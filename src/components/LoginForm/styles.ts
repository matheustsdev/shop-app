import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const InputContainer = styled.View`
  width: 100%;
  height: 55px;
  align-items: center;
`;
export const StyledLabel = styled.Text`
  width: 250px;
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding-left: 12px;
  color: ${mainTheme.dark};
`;

export const StyledInput = styled.TextInput`
  width: 247px;
  height: 32px;
  background-color: #eee;
  border-radius: 16px;
  padding-left: 12px;
`;
