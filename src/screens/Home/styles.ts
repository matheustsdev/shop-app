import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const Container = styled.KeyboardAvoidingView`
  padding-top: 42px;
  align-items: center;
  background-color: #fff;
`;

export const HeroText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  line-height: 42px;
  color: ${mainTheme.title};
`;
export const HeroView = styled.Text`
  text-align: center;
  padding: 0 15px;
  margin-bottom: 100px;
`;
