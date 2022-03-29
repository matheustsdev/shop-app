import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SearchContainer, SearchInput } from "./styles";
import { TextInputProps } from "react-native";

export function SearchBar({ ...rest }: TextInputProps) {
  return (
    <SearchContainer>
      <FontAwesome name="search" size={20} color="black" />
      <SearchInput {...rest} />
    </SearchContainer>
  );
}
