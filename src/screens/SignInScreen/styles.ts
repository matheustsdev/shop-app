import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const ContainerView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding-top: 80px;
`;

export const Heading = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: ${mainTheme.highlight};

  text-align: center;

  padding-bottom: 15px;
`;
