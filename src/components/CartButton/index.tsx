import React from "react";
import { Feather } from "@expo/vector-icons";

import { Badger, Container, LabelBadger } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../hooks/useCart";

export function CartButton() {
  const navigation = useNavigation();
  const { cart } = useCart();

  return (
    <Container
      activeOpacity={0.7}
      onPress={() => navigation.navigate("Cart" as never, {} as never)}
    >
      <Feather name="shopping-cart" size={28} color="white" />

      {cart.length > 0 ? (
        <Badger>
          <LabelBadger>{cart.length}</LabelBadger>
        </Badger>
      ) : (
        <></>
      )}
    </Container>
  );
}
