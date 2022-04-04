import React from "react";

import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Container } from "./styles";
import { CartButton } from "../CartButton";
import { useNavigation } from "@react-navigation/native";

export function ProductHeader() {
  const navigation = useNavigation();

  return (
    <Container>
      <Ionicons
        name="arrow-back"
        size={32}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <CartButton />
    </Container>
  );
}
