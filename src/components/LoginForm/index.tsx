import React from "react";

import { Text, TextInput, View } from "react-native";

import { InputContainer, StyledInput, StyledLabel } from "./styles";

export function LoginForm() {
  return (
    <>
      <InputContainer>
        <StyledLabel>Email</StyledLabel>

        <StyledInput />
      </InputContainer>
      <InputContainer>
        <StyledLabel>Senha</StyledLabel>

        <StyledInput />
      </InputContainer>
    </>
  );
}
