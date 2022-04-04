import { Header } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { SearchBar } from "../SearchBar";
import { CartButton } from "../CartButton";
import { TextInputProps } from "react-native";

export function HomeHeader({ ...rest }: TextInputProps) {
  return (
    <Header>
      <FontAwesome5 name="user-alt" size={24} color="white" />
      <SearchBar {...rest} />
      <CartButton />
    </Header>
  );
}
