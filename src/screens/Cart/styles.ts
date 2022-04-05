import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;

  align-items: center;
  justify-content: center;
  padding-top: 50px;

  background-color: ${mainTheme.primary};
`;
export const ContentContainer = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: center;
  padding-top: 50px;

  background-color: #fff;
`;

export const PageTitle = styled.Text`
  font-size: 32px;
  line-height: 48px;
  font-weight: 500;
  color: ${mainTheme.body};
  text-align: center;

  background-color: #fff;
  width: 100%;
  padding-top: 6px;
`;

export const EmptyText = styled.Text`
  font-size: 40px;
  color: ${mainTheme.body};
  text-align: center;
`;
