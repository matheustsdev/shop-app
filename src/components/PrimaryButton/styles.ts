import { mainTheme } from "../../global/themes";
import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  border-radius: 25px;
  background-color: ${mainTheme.primary};

  align-items: center;
  justify-content: center;
`;
export const StyledLabel = styled.Text`
  color: ${mainTheme.light};

  font-size: 24px;
  font-weight: 700;
`;
