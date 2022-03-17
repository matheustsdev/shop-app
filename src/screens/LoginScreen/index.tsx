import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LoginForm } from "../../components/LoginForm";
import { PrimaryButton } from "../../components/PrimaryButton";
import { ContainerView, Heading, LoginContainer, RegisterLink } from "./styles";

export function LoginScreen() {
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
          <LoginForm />
          <PrimaryButton>Entrar</PrimaryButton>
        </LoginContainer>

        <TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
          <RegisterLink>Ainda não possui uma conta? Registre-se</RegisterLink>
        </TouchableOpacity>
      </ScrollView>
    </ContainerView>
  );
}
