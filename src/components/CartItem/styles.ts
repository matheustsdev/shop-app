import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const ItemContainer = styled.TouchableOpacity`
  width: 93%;
  height: 96px;

  background-color: #fff;

  border-top-width: 8px;
  border-top-color: ${mainTheme.primary};

  border-radius: 8px;

  margin-bottom: 25px;
`;

export const ImageBox = styled.Image`
  width: 70px;
  height: 70px;

  border-radius: 8px;
`;

export const ItemContent = styled.View`
  width: 100%;
  height: 100%;
  padding: 5px 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ProductDetails = styled.View`
  height: 80px;

  align-items: center;
  justify-content: center;
`;
export const ProductTitle = styled.Text`
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  align-self: flex-start;
`;

export const TotalProduct = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const RemoveItem = styled.TouchableOpacity`
  height: 32px;
  width: 32px;

  border-radius: 16px;

  align-items: center;
  justify-content: center;
`;
