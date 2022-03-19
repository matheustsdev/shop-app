import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;

  align-items: center;
  justify-content: center;
`;
export const PrimaryView = styled.View`
  position: absolute;
  background-color: ${mainTheme.primary};
  height: 300px;
  width: 100%;
  top: 0px;
`;
export const ResumeView = styled.View`
  height: 250px;
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const ResumeTitle = styled.Text`
  font-size: 18px;

  color: ${mainTheme.light};
`;

export const ResumeText = styled.Text`
  font-size: 32px;
  font-weight: bold;

  color: ${mainTheme.light};
`;
