import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const ContainerView = styled.KeyboardAvoidingView`
  height: 380px;

  align-items: center;
  justify-content: space-between;
`;

export const StyledLabel = styled.Text`
  width: 248px;
  text-align: left;
  padding-left: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${mainTheme.dark};
`;
export const StyledInput = styled.TextInput`
  width: 247px;
  height: 32px;
  background-color: ${mainTheme.input};
  border-radius: 16px;
  padding-left: 12px;
`;
