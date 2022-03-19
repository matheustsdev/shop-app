import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, Platform, ScrollView, TouchableOpacity } from "react-native";
import { LoginForm } from "../../components/LoginForm";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";
import {
  ContainerView,
  Heading,
  LinkContainer,
  LoginContainer,
  RegisterLink,
} from "./styles";

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "90%",
        }}
      >
        <Heading>Login</Heading>

        <LoginContainer>
          <LoginForm
            onChangeEmail={(text) => setEmail(text)}
            emailValue={email}
            onChangePassword={(text) => setPassword(text)}
            passwordValue={password}
          />
          <PrimaryButton
            onPress={() => {
              handleLogin();
            }}
          >
            Entrar
          </PrimaryButton>
        </LoginContainer>

        <LinkContainer
          activeOpacity={0.9}
          onPress={() => navigation.navigate("SignIn" as never, {} as never)}
        >
          <RegisterLink>Ainda não possui uma conta? Registre-se</RegisterLink>
        </LinkContainer>
      </ScrollView>
    </ContainerView>
  );
}
