import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const ContainerView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding-top: 15px;
  padding-bottom: 50px;
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
  padding: 0;

  border-width: 1px;
  border-color: #ddd;
  margin-top: 8px;
  margin-bottom: 50px;
`;
