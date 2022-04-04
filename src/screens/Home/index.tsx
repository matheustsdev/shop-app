import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { FlatList } from "react-native";
import { CategoryItem } from "../../components/CategoryItem";
import { HeroImg } from "../../components/HeroImg";
import { HomeHeader } from "../../components/HomeHeader";
import { ProductButton } from "../../components/ProductButton";
import { CategoryType, ProductType } from "../../global/types";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";
import { Container, HeroText, HeroView } from "./styles";

export function Home() {
  const [search, setSearch] = useState("");
  const [productsDisplayed, setProductsDisplayed] = useState<ProductType[]>([]);
  const [activeCategory, setActiveCategory] = useState("");
  const { productsList, setProduct } = useCart();
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
      category: {
        id: 0,
        category: "",
      },
      stock: 0,
    };
    if (productsArray.length % 2 !== 0) {
      productsListGrid.push(blanckProduct);
    }

    return productsListGrid;
  }

  function filterByName() {
    const filteredProductsLists = productsList.filter((product) =>
      product.title.includes(search)
    );

    return createProductsGrid(filteredProductsLists);
  }

  function filterByCategory() {
    const filteredProductsLists = productsList.filter(
      (product) => product.category.category === activeCategory
    );

    return createProductsGrid(filteredProductsLists);
  }

  const mockedCategory: CategoryType[] = [
    { id: 1, name: "Tênis" },
    { id: 2, name: "Tês" },
    { id: 3, name: "Tnis" },
    { id: 5, name: "ênis" },
    { id: 6, name: "Têns" },
  ];

  function handleActiveCategory(categoryName: string) {
    if (categoryName === activeCategory) {
      setActiveCategory("");
    } else {
      setActiveCategory(categoryName);
    }

    console.log(activeCategory);
  }

  useEffect(() => {
    setProductsDisplayed(createProductsGrid(productsList));
    setProduct({} as ProductType);
    if (user.id === undefined) {
      navigation.navigate("Login" as never, {} as never);
    }
  }, [user, isLogged]);

  useEffect(() => {
    setProductsDisplayed(filterByName());
    setProductsDisplayed(filterByCategory());
  }, [search, activeCategory]);

  return (
    <Container>
      <HeroImg />
      <HomeHeader onChangeText={setSearch} value={search} />
      <HeroView>
        <HeroText>Confira nossa{"\n"}nova coleção, Matheus</HeroText>
      </HeroView>

      <FlatList
        style={{ marginBottom: 56 }}
        contentContainerStyle={{
          alignItems: "center",
        }}
        data={mockedCategory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            activeCategory={activeCategory}
            onPress={() => handleActiveCategory(item.name)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

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
