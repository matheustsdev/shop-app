import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, Text, TouchableOpacity, Image } from "react-native";
import { SecondaryButton } from "../../components/SecondaryButton";

import { SignInForm } from "../../components/SignInForm";

import { ContainerView, Heading, LoginContainer, LoginText } from "./styles";

export function SignInScreen() {
  const navigation = useNavigation();

  return (
    <ContainerView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Image source={require("../../assets/nike-icon.png")} />

      <SignInForm />
      <LoginContainer>
        <LoginText>Já tem uma conta?</LoginText>
        <SecondaryButton
          onPress={() => navigation.navigate("Login" as never, {} as never)}
        >
          Entre
        </SecondaryButton>
      </LoginContainer>
    </ContainerView>
  );
}
