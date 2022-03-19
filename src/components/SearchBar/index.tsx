import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SearchContainer, SearchInput } from "./styles";

export function SearchBar() {
  return (
    <SearchContainer>
      <FontAwesome name="search" size={20} color="black" />
      <SearchInput />
    </SearchContainer>
  );
}
