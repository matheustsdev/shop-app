import React from "react";

import { Container, Label, UpdateButton } from "./styles";

interface Type {
  amount: number;
  color?: string;
  onIncrease(): void;
  onDecrease(): void;
}

export function UpdateAmountBar({
  amount,
  color,
  onDecrease,
  onIncrease,
}: Type) {
  const usingColor = color === undefined ? "white" : color;
  return (
    <Container style={{ borderColor: usingColor }}>
      <UpdateButton onPress={() => onDecrease()}>
        <Label style={{ color: usingColor }}>-</Label>
      </UpdateButton>
      <Label style={{ color: usingColor }}>{amount}</Label>
      <UpdateButton onPress={() => onIncrease()}>
        <Label style={{ color: usingColor }}>+</Label>
      </UpdateButton>
    </Container>
  );
}
