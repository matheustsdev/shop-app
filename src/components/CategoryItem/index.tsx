import React from "react";

import { Text } from "react-native";
import { CategoryType } from "../../global/types";
import { Container, Label } from "./styles";

interface CategoryItemType {
  category: CategoryType;
}

export function CategoryItem({ category }: CategoryItemType) {
  return (
    <Container activeOpacity={0.7}>
      <Label>{category.name}</Label>
    </Container>
  );
}
