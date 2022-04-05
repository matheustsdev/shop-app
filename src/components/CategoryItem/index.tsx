import React from "react";

import { CategoryType } from "../../global/types";
import { Active, ActiveLabel, Inactive, InactiveLabel } from "./styles";

interface CategoryItemType {
  category: CategoryType;
  activeCategory: string;
  onPress(): void;
}

export function CategoryItem({
  category,
  activeCategory,
  onPress,
}: CategoryItemType) {
  return (
    <>
      {activeCategory === category.category ? (
        <Active activeOpacity={0.9} onPress={onPress}>
          <ActiveLabel>{category.category}</ActiveLabel>
        </Active>
      ) : (
        <Inactive activeOpacity={0.9} onPress={onPress}>
          <InactiveLabel>{category.category}</InactiveLabel>
        </Inactive>
      )}
    </>
  );
}
