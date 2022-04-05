import React from "react";

import { SecondaryButton } from "../SecondaryButton";
import { Container, CouponInput, InputContainer, LabelText } from "./styles";

export function CouponField() {
  return (
    <Container>
      <LabelText>Insira um cupom</LabelText>
      <InputContainer>
        <CouponInput />
        <SecondaryButton>Usar cupom</SecondaryButton>
      </InputContainer>
    </Container>
  );
}
