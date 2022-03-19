import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, Text, TouchableOpacity } from "react-native";

import { SignInForm } from "../../components/SignInForm";

import { ContainerView, Heading, LinkContainer, TextLink } from "./styles";

export function SignInScreen() {
  const navigation = useNavigation();

  return (
    <ContainerView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Heading>Cadastro</Heading>
      <SignInForm />
      <LinkContainer
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Login" as never, {} as never)}
      >
        <TextLink>Já possui cadastro? Entre</TextLink>
      </LinkContainer>
    </ContainerView>
  );
}
