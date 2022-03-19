import { createContext, ReactNode, useContext, useState } from "react";
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
  user: UserType;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [isLogged, setIsLogged] = useState(false);

  async function handleAuthenticate(email: string, password: string) {
    const token = await api
      .get<UserType>(`/auth?email=${email}`, {
        headers: {
          authorization: password,
        },
      })
      .then((res) => {
        setUser(res.data);
        setIsLogged(true);
      });
  }

  async function handleLogout() {
    setUser({} as UserType);
    setIsLogged(false);
  }

  async function handleSignIn(newUser: SignInUser) {
    const user = await api
      .post("/add/user", newUser)
      .then((res) => {
        setUser(res.data);
        setIsLogged(true);
      })
      .catch((err) => console.log("CAdastro - ", err));

    console.log(newUser);
  }
  return (
    <AuthContext.Provider
      value={{ handleAuthenticate, handleSignIn, handleLogout, user, isLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
