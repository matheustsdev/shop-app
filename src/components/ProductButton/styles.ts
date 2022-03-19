import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const ProductContainer = styled.TouchableOpacity`
  background-color: #eee;

  height: 225px;

  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  margin: 10px;
`;
export const ImageBox = styled.Image`
  width: 165px;
  height: 165px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const TitleContainer = styled.View`
  width: 100%;
  padding: 0 10px 5px 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;

export const BlanckProduct = styled.TouchableOpacity`
  background-color: transparent;

  height: 225px;
  width: 165px;

  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  margin: 10px;
`;
