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
  height: 300px;
  padding-top: 75px;
  align-items: center;
  justify-content: space-between;
`;

export const SigninContainer = styled.View`
  width: 100%;
  height: 62px;

  justify-content: space-between;
  align-items: center;

  align-self: flex-end;

  margin-top: 150px;
`;

export const RegisterText = styled.Text`
  font-size: 16px;
  line-height: 24px;

  text-align: center;
`;
