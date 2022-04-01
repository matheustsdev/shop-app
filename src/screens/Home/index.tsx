import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

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
  const [search, setSearch] = useState("");
  const [productsDisplayed, setProductsDisplayed] = useState<ProductType[]>([]);
  const { productsList } = useCart();
  const { user, handleLogout, isLogged } = useAuth();
  const navigation = useNavigation();

  function createProductsGrid(productsArray: ProductType[]) {
    let productsListGrid: ProductType[] = [...productsArray];
    const blanckProduct: ProductType = {
      id: 0,
      title: "Blanck",
      price: 0,
      img_url: "Blanck",
      description: "Blanck",
      category: 0,
      stock: 0,
    };
    if (productsArray.length % 2 !== 0) {
      productsListGrid.push(blanckProduct);
    }

    return productsListGrid;
  }

  function filterProductsList() {
    const filteredProductsLists = productsList.filter((product) =>
      product.title.includes(search)
    );

    return createProductsGrid(filteredProductsLists);
  }

  const mockedCategory: CategoryType[] = [
    { id: 1, name: "Tênis" },
    { id: 2, name: "Tênis" },
    { id: 3, name: "Tênis" },
    { id: 4, name: "Tênis" },
    { id: 5, name: "Tênis" },
    { id: 6, name: "Tênis" },
  ];

  useEffect(() => {
    setProductsDisplayed(createProductsGrid(productsList));

    if (user.id === undefined) {
      navigation.navigate("Login" as never, {} as never);
    }
  }, [user, isLogged]);

  useEffect(() => {
    setProductsDisplayed(filterProductsList());
  }, [search]);

  return (
    <Container>
      <HighlightView />
      <Header>
        <Greeting />
        <LogoutContainer onPress={() => handleLogout()}>
          <LogoutText>Logout</LogoutText>
        </LogoutContainer>
      </Header>
      <SearchHeader>
        <SearchBar value={search} onChangeText={setSearch} />
        <CartButton />
      </SearchHeader>

      <CategoryContainer>
        <CategoryTitle> Categorias: </CategoryTitle>
        <FlatList
          contentContainerStyle={{
            alignItems: "center",
          }}
          data={mockedCategory}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CategoryItem category={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </CategoryContainer>

      <FlatList
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 300,
        }}
        data={productsDisplayed}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductButton product={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
