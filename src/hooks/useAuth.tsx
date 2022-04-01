import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { SignInUser, UserType } from "../global/types";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}
interface AuthContextData {
  handleAuthenticate(email: string, password: string): void;
  handleLogout(): void;
  handleSignIn(newUser: SignInUser): void;
  isLogged: boolean;
  isLoading: boolean;
  user: UserType;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleAuthenticate(email: string, password: string) {
    setIsLoading(true);

    await api
      .get<UserType>(`/auth?email=${email}`, {
        headers: {
          authorization: password,
        },
      })
      .then((res) => {
        useAsyncStorage("@auth_token")
          .setItem(res.data.auth_token)
          .then(() => {
            console.log("Added auth_token");
          });
        setUser(res.data);
        setIsLogged(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function handleLogout() {
    setUser({} as UserType);
    setIsLogged(false);
    await useAsyncStorage("@auth_token").removeItem();
  }

  async function handleSignIn(newUser: SignInUser) {
    setIsLoading(true);

    const user = await api
      .post("/add/user", newUser)
      .then((res) => {
        setUser(res.data);
        setIsLogged(true);
      })
      .catch((err) => console.log("Cadastro - ", err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function handleGetToken() {
    const authToken = await useAsyncStorage("@auth_token")
      .getItem()
      .then((res) => {
        return res;
      });

    if (authToken) {
      const user = await api
        .get<UserType>(`/user`, {
          headers: {
            authorization: authToken,
          },
        })
        .then((res) => {
          setUser(res.data);
          setIsLogged(true);
        })
        .catch((err) => {
          console.log("Request with token", err);
        });
    }

    return await useAsyncStorage("@auth_token").getItem();
  }

  useEffect(() => {
    handleGetToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        handleAuthenticate,
        handleSignIn,
        handleLogout,
        user,
        isLoading,
        isLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
