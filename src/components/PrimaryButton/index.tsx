import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonContainer, StyledLabel } from "./styles";

interface ButtonType extends TouchableOpacityProps {
  children: ReactNode;
}

export function PrimaryButton({ children, ...rest }: ButtonType) {
  return (
    <ButtonContainer activeOpacity={0.8} {...rest}>
      <StyledLabel>{children}</StyledLabel>
    </ButtonContainer>
  );
}
