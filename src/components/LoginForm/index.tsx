import React from "react";

import { InputContainer, StyledInput, StyledLabel } from "./styles";

interface LoginFormType {
  onChangeEmail(text: string): void;
  onChangePassword(text: string): void;
  emailValue: string;
  passwordValue: string;
}

export function LoginForm({
  onChangeEmail,
  onChangePassword,
  emailValue,
  passwordValue,
}: LoginFormType) {
  return (
    <>
      <InputContainer>
        <StyledLabel>Email</StyledLabel>

        <StyledInput onChangeText={onChangeEmail} value={emailValue} />
      </InputContainer>
      <InputContainer>
        <StyledLabel>Senha</StyledLabel>

        <StyledInput
          secureTextEntry
          onChangeText={onChangePassword}
          value={passwordValue}
        />
      </InputContainer>
    </>
  );
}
