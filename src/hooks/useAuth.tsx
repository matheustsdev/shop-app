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
        setUser(res.data);
        setIsLogged(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function handleLogout() {
    setUser({} as UserType);
    setIsLogged(false);
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
    return await useAsyncStorage("@auth_token").getItem();
  }

  async function handleSetToken() {
    return await useAsyncStorage("@auth_token").setItem("test");
  }

  async function handleCheckToken() {
    const authToken = await useAsyncStorage("@auth_token")
      .getItem()
      .then((res) => {
        return res;
      });

    if (user.auth_token === undefined) {
      if (authToken) {
        console.log("token:", authToken);
        //Chamada por token e setar user
      }
    }
  }

  useEffect(() => {
    handleCheckToken();
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
