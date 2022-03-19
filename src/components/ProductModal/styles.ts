import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";
export const ModalContainer = styled.View`
  flex: 1;
  margin-top: 175px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  background-color: ${mainTheme.light};
`;

export const ModalContent = styled.View`
  flex: 1;

  align-items: center;

  padding: 12px;
`;

export const ModalImg = styled.Image`
  height: 250px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ModalPrice = styled.Text`
  font-size: 32px;
  font-weight: bold;

  width: 100%;
  text-align: left;

  margin-top: 15px;
  padding: 5px 10px;
`;
export const ModalTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;

  width: 100%;
  text-align: left;
`;

export const ModalText = styled.Text`
  font-size: 18px;

  width: 100%;
  text-align: left;
`;

export const DescriptionContainer = styled.View`
  height: 40%;
  width: 100%;
`;

export const DescriptionText = styled.Text`
  font-size: 16px;
`;
