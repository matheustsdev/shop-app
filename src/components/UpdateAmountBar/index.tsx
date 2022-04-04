import React from "react";

import { View, Text } from "react-native";
import { ProductType } from "../../global/types";
import { Container, Label, UpdateButton } from "./styles";

interface Type {
  amount: number;
  onIncrease(): void;
  onDecrease(): void;
}

export function UpdateAmountBar({ amount, onDecrease, onIncrease }: Type) {
  return (
    <Container>
      <UpdateButton onPress={() => onDecrease()}>
        <Label>-</Label>
      </UpdateButton>
      <Label>{amount}</Label>
      <UpdateButton onPress={() => onIncrease()}>
        <Label>+</Label>
      </UpdateButton>
    </Container>
  );
}
