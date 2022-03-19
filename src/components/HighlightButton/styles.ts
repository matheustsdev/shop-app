import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 0px;
  background-color: ${mainTheme.highlight};

  align-items: center;
  justify-content: center;
`;
export const Label = styled.Text`
  font-size: 28px;
  font-weight: bold;

  color: black;
`;
