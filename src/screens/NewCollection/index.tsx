import React, { useEffect, useState } from "react";

import { FlatList } from "react-native";
import { ProductButton } from "../../components/ProductButton";
import { ProductHeader } from "../../components/ProductHeader";
import { ProductType } from "../../global/types";
import { usePromo } from "../../hooks/usePromotion";
import {
  Body,
  Container,
  Content,
  Header,
  Hero,
  SubTitle,
  Title,
} from "./styles";

interface PromoCollectionType {
  product: ProductType;
}

export function NewCollection() {
  const { collection } = usePromo();
  const [productsGrid, setProductsGrid] = useState<ProductType[]>([]);

  function createProductsGrid(collection_products: PromoCollectionType[]) {
    const productList: ProductType[] = collection_products.map((product) => {
      return product.product;
    });

    let productsListGrid: ProductType[] = [...productList];
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
    if (collection_products.length % 2 !== 0) {
      productsListGrid.push(blanckProduct);
    }

    return productsListGrid;
  }

  useEffect(() => {
    setProductsGrid(createProductsGrid(collection.collection_products));
  }, []);

  return (
    <Container>
      <Hero
        source={{
          uri: collection.banner_img,
        }}
      />
      <Header>
        <ProductHeader />
      </Header>
      <Content>
        <SubTitle>Nova coleção</SubTitle>
        <Title>{collection.name}</Title>
        <Body>{collection.body}</Body>
        <FlatList
          contentContainerStyle={{
            alignItems: "center",
            paddingBottom: 600,
          }}
          data={productsGrid}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductButton product={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
}
