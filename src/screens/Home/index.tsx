import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

import { FlatList, Text } from "react-native";
import { CartButton } from "../../components/CartButton";
import { CategoryItem } from "../../components/CategoryItem";
import { Greeting } from "../../components/Greeting";
import { ProductButton } from "../../components/ProductButton";
import { SearchBar } from "../../components/SearchBar";
import { CategoryType, ProductType } from "../../global/types";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";
import {
  CategoryContainer,
  CategoryTitle,
  Container,
  Header,
  HighlightView,
  LogoutContainer,
  LogoutText,
  SearchHeader,
} from "./styles";

export function Home() {
  const { productsList } = useCart();
  const { user, handleLogout, isLogged } = useAuth();
  const navigation = useNavigation();

  let productsListGrid: ProductType[] = [...productsList];

  const blanckProduct: ProductType = {
    product_id: 0,
    title: "Blanck",
    price: 0,
    image_url: "Blanck",
    description: "Blanck",
    category: 0,
    stock: 0,
  };

  if (productsList.length % 2 !== 0) {
    productsListGrid.push(blanckProduct);
  }

  const mockedCategory: CategoryType[] = [
    { category_id: 1, name: "Tênis" },
    { category_id: 2, name: "Tênis" },
    { category_id: 3, name: "Tênis" },
    { category_id: 4, name: "Tênis" },
    { category_id: 5, name: "Tênis" },
    { category_id: 6, name: "Tênis" },
  ];

  useEffect(() => {
    if (user.user_id === undefined) {
      navigation.navigate("Login" as never, {} as never);
    }
  }, [user, isLogged]);

  return (
    <Container>
      <HighlightView />
      <Header>
        <Greeting>{user.nickname}</Greeting>
        <LogoutContainer onPress={() => handleLogout()}>
          <LogoutText>Logout</LogoutText>
        </LogoutContainer>
      </Header>
      <SearchHeader>
        <SearchBar />
        <CartButton />
      </SearchHeader>

      <CategoryContainer>
        <CategoryTitle> Categorias: </CategoryTitle>
        <FlatList
          contentContainerStyle={{
            alignItems: "center",
          }}
          data={mockedCategory}
          keyExtractor={(item) => item.category_id.toString()}
          renderItem={({ item }) => <CategoryItem category={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </CategoryContainer>

      <FlatList
        contentContainerStyle={{
          alignItems: "center",
        }}
        data={productsListGrid}
        numColumns={2}
        keyExtractor={(item) => item.product_id.toString()}
        renderItem={({ item }) => <ProductButton product={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
