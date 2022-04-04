import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";
export const Active = styled.TouchableOpacity`
  width: 126px;
  height: 24px;

  border-radius: 15px;

  justify-content: center;
  align-items: center;

  background-color: ${mainTheme.primary};
  margin: 8px;
`;

export const Inactive = styled.TouchableOpacity`
  width: 126px;
  height: 24px;

  border-radius: 15px;

  justify-content: center;
  align-items: center;

  background-color: ${mainTheme.inactive};
  margin: 8px;
`;
export const ActiveLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: ${mainTheme.title};
`;
export const InactiveLabel = styled.Text`
  font-size: 16px;

  color: ${mainTheme.title};
`;
