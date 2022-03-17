import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const ContainerView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
`;
export const Heading = styled.Text`
  margin-top: 120px;
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  color: ${mainTheme.highlight};
`;
export const LoginContainer = styled.View`
  height: 400px;
  padding-top: 75px;
  padding-bottom: 75px;
  align-items: center;
  justify-content: space-between;
`;
export const RegisterLink = styled.Text`
  margin-top: 150px;
  color: blue;
  font-size: 16px;
  font-weight: 600;
`;
