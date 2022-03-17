import React from "react";

import { ScrollView } from "react-native";
import { PrimaryButton } from "../PrimaryButton";

import { ContainerView, StyledInput, StyledLabel } from "./styles";

export function SignForm() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        width: "90%",
      }}
    >
      <ContainerView>
        <StyledLabel>Como gostaria de ser chamado?</StyledLabel>
        <StyledInput />

        <StyledLabel>Nome completo</StyledLabel>
        <StyledInput />

        <StyledLabel>Email</StyledLabel>
        <StyledInput />

        <StyledLabel>Senha</StyledLabel>
        <StyledInput />

        <StyledLabel>Confirmar senha</StyledLabel>
        <StyledInput />

        <PrimaryButton>Cadastrar</PrimaryButton>
      </ContainerView>
    </ScrollView>
  );
}
