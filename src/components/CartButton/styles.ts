import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 35px;
`;
export const Badger = styled.View`
  width: 20px;
  height: 20px;

  border-radius: 12px;
  background-color: ${mainTheme.highlight};

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 16px;
  left: 12px;
`;
export const LabelBadger = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;
