import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const ProductContainer = styled.TouchableOpacity`
  background-color: ${mainTheme.primary};
  margin: 10px;

  height: 200px;
  border-radius: 8px;
  border: 0.5px solid #999;

  align-items: center;
  justify-content: space-between;
`;
export const ImageBox = styled.Image`
  width: 150px;
  height: 150px;

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
  color: ${mainTheme.title};
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${mainTheme.title};
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
