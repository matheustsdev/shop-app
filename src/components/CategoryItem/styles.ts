import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";
export const Container = styled.TouchableOpacity`
  width: 100px;
  height: 30px;

  border-radius: 15px;
  border: 1px solid ${mainTheme.secondary};

  justify-content: center;
  align-items: center;

  background-color: ${mainTheme.light};
  margin: 8px;
`;
export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: ${mainTheme.secondary};
`;
