import { mainTheme } from "../../global/themes";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 192px;
  height: 48px;
  border-radius: 24px;
  background-color: ${mainTheme.primary};

  align-items: center;
  flex-direction: row;

  padding: 0 32px;
`;
export const StyledText = styled.Text`
  color: ${mainTheme.light};

  font-size: 18px;
  font-weight: 700;
`;
