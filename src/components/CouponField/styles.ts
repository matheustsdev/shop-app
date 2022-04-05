import styled from "styled-components/native";
import { mainTheme } from "../../global/themes";

export const Container = styled.View`
  width: 356px;
  height: 50px;

  align-items: center;
`;

export const InputContainer = styled.View`
  height: 50px;
  width: 100%;
  justify-content: space-evenly;

  flex-direction: row;
`;

export const CouponInput = styled.TextInput`
  height: 32px;
  width: 184px;

  border-radius: 16px;

  background-color: ${mainTheme.input};
`;

export const LabelText = styled.Text`
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  align-self: flex-start;
  padding-left: 24px;

  margin-bottom: 2px;
`;
