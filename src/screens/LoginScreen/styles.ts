import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const ContainerView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding-top: 80px;
`;
export const Heading = styled.Text`
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  color: ${mainTheme.highlight};
`;
export const LoginContainer = styled.View`
  height: 400px;
  padding-top: 75px;
  align-items: center;
  justify-content: space-between;
`;

export const LinkContainer = styled.TouchableOpacity`
  width: 100%;
  height: 50px;

  justify-content: center;

  align-self: flex-end;

  margin-top: 175px;
`;

export const RegisterLink = styled.Text`
  color: blue;
  font-size: 16px;

  text-align: center;
`;
