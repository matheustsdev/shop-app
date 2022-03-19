import { mainTheme } from "./../../global/themes";
import styled from "styled-components/native";

export const GreetingContainer = styled.View`
  width: 100%;
  height: 50px;

  justify-content: center;

  margin-top: 35px;
  padding-left: 25px;
`;

export const GreetingText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${mainTheme.light};
`;
