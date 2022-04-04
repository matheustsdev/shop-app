import { mainTheme } from "./../../global/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 50px;
  background-color: ${mainTheme.primary};
`;

export const ProductImg = styled.Image`
  width: 100%;
  height: 328px;
`;

export const ProductBody = styled.View`
  background-color: #fff;
  height: 400px;
  width: 100%;
  padding: 0 38px;
`;

export const TextTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
`;

export const TextPrice = styled.Text`
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
`;

export const TextBody = styled.Text`
  margin-top: 25px;

  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 18px;
`;
