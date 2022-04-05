import { mainTheme } from "../../global/themes";
import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  width: 140px;
  height: 36px;
  border-radius: 25px;
  background-color: ${mainTheme.secondary};

  align-items: center;
  justify-content: center;
`;
export const StyledLabel = styled.Text`
  color: ${mainTheme.title};

  font-size: 16px;
  font-weight: 24px;
  font-weight: 400;
`;
