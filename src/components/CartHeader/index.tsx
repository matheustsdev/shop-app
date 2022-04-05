import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function CartHeader() {
  const navigation = useNavigation();

  return (
    <Container>
      <Ionicons
        name="arrow-back"
        size={32}
        color="white"
        onPress={() => navigation.goBack()}
      />
    </Container>
  );
}
