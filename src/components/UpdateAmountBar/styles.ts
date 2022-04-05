import { mainTheme } from "./../../global/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100px;
  height: 32px;

  padding: 0 12px;
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  background-color: transparent;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Label = styled.Text`
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
  color: ${mainTheme.title};
`;
export const UpdateButton = styled.TouchableOpacity`
  height: 18px;
  width: 10px;

  align-items: center;
  justify-content: center;
`;
