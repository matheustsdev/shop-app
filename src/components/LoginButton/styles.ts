import { mainTheme } from "../../global/themes";
import styled from "styled-components/native";
import { useAuth } from "../../hooks/useAuth";

export const Container = styled.TouchableOpacity`
  width: 192px;
  height: 50px;
  border-radius: 25px;
  background-color: ${mainTheme.primary};

  align-items: center;
  flex-direction: row;

  padding: 0 44px;
`;
export const StyledText = styled.Text`
  color: ${mainTheme.light};

  font-size: 24px;
  font-weight: 700;
`;
