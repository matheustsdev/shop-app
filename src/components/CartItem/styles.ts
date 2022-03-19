import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const ItemContainer = styled.TouchableOpacity`
  width: 95%;
  height: 120px;

  background-color: #eee;

  border-top-width: 5px;
  border-top-color: ${mainTheme.highlight};

  margin-bottom: 25px;
`;

export const ImageBox = styled.Image`
  width: 75px;
  height: 75px;

  border-radius: 8px;
`;

export const ItemContent = styled.View`
  width: 100%;
  height: 100%;
  padding: 5px 0px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const ProductDetails = styled.View`
  height: 80px;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  font-size: 12px;
`;

export const AmountItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const AmountItemButton = styled.TouchableOpacity`
  height: 25px;
  border-radius: 25px;
`;

export const AmountItemInput = styled.TextInput`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
  width: 30px;
  height: 25px;

  border-bottom-color: black;
  border-bottom-width: 1px;

  color: black;
  text-align: center;
  font-size: 18px;
`;

export const TotalProduct = styled.Text`
  margin-top: 12px;
  font-size: 20px;
  font-weight: bold;
`;
