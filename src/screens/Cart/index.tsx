import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

import { FlatList, View } from "react-native";
import { CartBar } from "../../components/CartBar";
import { CartHeader } from "../../components/CartHeader";
import { CartItem } from "../../components/CartItem";
import { CouponField } from "../../components/CouponField";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";
import { Container, ContentContainer, EmptyText, PageTitle } from "./styles";

export function Cart() {
  const { cart, cartTotal, createSell } = useCart();
  const { user } = useAuth();
  const navigation = useNavigation();

  const formattedPrice = `R$ ${Math.floor(cartTotal / 100)},${String(
    cartTotal
  ).slice(-2)}`;

  async function handleSellConfirm() {
    createSell(user).then(() => {
      navigation.navigate("Home" as never, {} as never);
    });
  }
  return (
    <Container>
      <CartHeader />
      <PageTitle>Carrinho</PageTitle>
      <ContentContainer>
        {cart[0] ? (
          <>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <CartItem product={item} />}
              contentContainerStyle={{
                alignItems: "center",
              }}
            />
            <CartBar />
          </>
        ) : (
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        )}
      </ContentContainer>
    </Container>
  );
}
