import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const InputContainer = styled.View`
  flex: 1;
  width: 100%;

  align-items: center;
`;
export const StyledLabel = styled.Text`
  width: 250px;
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  color: ${mainTheme.dark};
`;

export const StyledInput = styled.TextInput`
  width: 250px;
  height: 35px;
  background-color: #eee;
  border-radius: 8px;
  padding-left: 6px;

  border-width: 1px;
  border-color: #ddd;
  margin-top: 8px;
`;
