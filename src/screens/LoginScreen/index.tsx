import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LoginForm } from "../../components/LoginForm";
import { useAuth } from "../../hooks/useAuth";
import {
  ContainerView,
  Heading,
  SigninContainer,
  LoginContainer,
  RegisterText,
} from "./styles";
import { SecondaryButton } from "../../components/SecondaryButton";
import { LoginButton } from "../../components/LoginButton";

export function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleAuthenticate, isLogged } = useAuth();

  async function handleLogin() {
    handleAuthenticate(email, password);
  }

  useEffect(() => {
    isLogged
      ? navigation.navigate("Home" as never, {} as never)
      : navigation.navigate("Login" as never, {} as never);
  }, [isLogged]);

  return (
    <ContainerView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Image source={require("../../assets/nike-icon.png")} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "90%",
        }}
      >
        <LoginContainer>
          <LoginForm
            onChangeEmail={(text) => setEmail(text)}
            emailValue={email}
            onChangePassword={(text) => setPassword(text)}
            passwordValue={password}
          />
          <LoginButton
            onPress={() => {
              handleLogin();
            }}
          >
            Entrar
          </LoginButton>
        </LoginContainer>

        <SigninContainer>
          <RegisterText>Não tem uma conta?</RegisterText>
          <SecondaryButton
            onPress={() => navigation.navigate("SignIn" as never, {} as never)}
          >
            Cadastre-se
          </SecondaryButton>
        </SigninContainer>
      </ScrollView>
    </ContainerView>
  );
}
