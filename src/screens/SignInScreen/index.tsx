import React from "react";
import { Platform } from "react-native";

import { SignForm } from "../../components/SignForm";

import { ContainerView, Heading } from "./styles";

export function SignInScreen() {
  return (
    <ContainerView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Heading>Cadastro</Heading>
      <SignForm />
    </ContainerView>
  );
}
