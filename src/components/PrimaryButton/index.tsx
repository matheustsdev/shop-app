import React, { ReactNode } from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { useAuth } from "../../hooks/useAuth";

import { ButtonContainer, StyledLabel } from "./styles";

interface ButtonType extends TouchableOpacityProps {
  children: ReactNode;
}

export function PrimaryButton({ children, ...rest }: ButtonType) {
  const { isLoading } = useAuth();
  return (
    <ButtonContainer activeOpacity={0.8} {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <StyledLabel>{children}</StyledLabel>
      )}
    </ButtonContainer>
  );
}
