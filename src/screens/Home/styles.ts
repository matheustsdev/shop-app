import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const Container = styled.KeyboardAvoidingView`
  align-items: center;
`;

export const HighlightView = styled.View`
  position: absolute;
  background-color: ${mainTheme.primary};
  height: 300px;
  width: 100%;
  top: 0px;
`;

export const CategoryContainer = styled.View`
  height: 80px;

  justify-content: space-around;
  align-items: flex-start;

  padding: 0 20px;
  margin-top: 25px;
  margin-bottom: 15px;
`;

export const CategoryTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;

  color: ${mainTheme.light};
`;

export const SearchHeader = styled.View`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-top: 25px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Header = styled.View`
  width: 100%;
  height: 40px;
  padding: 0 30px;
  margin-top: 25px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const LogoutContainer = styled.TouchableOpacity`
  height: 25px;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  margin-top: 30px;
`;
export const LogoutText = styled.Text`
  color: red;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
