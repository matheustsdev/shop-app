import { mainTheme } from "./../../global/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 73px;
  padding: 0 12px;
  background-color: ${mainTheme.primary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Total = styled.Text`
  font-size: 24px;
  line-height: 32px;
  color: ${mainTheme.title};
  font-weight: bold;
`;
export const ActionButton = styled.TouchableOpacity`
  height: 36px;
  width: 120px;
  border-radius: 18px;
  background-color: ${mainTheme.secondary};

  align-items: center;
  justify-content: center;
`;
export const ActionText = styled.Text`
  font-size: 20px;
  line-height: 24px;
  color: ${mainTheme.title};
  font-weight: bold;
`;
