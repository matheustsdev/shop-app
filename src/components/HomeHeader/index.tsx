import { Header, LogoutButton } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "../SearchBar";
import { CartButton } from "../CartButton";
import { TextInputProps } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export function HomeHeader({ ...rest }: TextInputProps) {
  const { handleLogout } = useAuth();

  return (
    <Header>
      <LogoutButton onPress={() => handleLogout()} activeOpacity={0.8}>
        <MaterialIcons name="logout" size={32} color="white" />
      </LogoutButton>
      <SearchBar {...rest} />
      <CartButton />
    </Header>
  );
}
