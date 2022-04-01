import React, { ReactNode } from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { useCart } from "../../hooks/useCart";

import { Button, Label } from "./styles";

interface HighlightButtonType extends TouchableOpacityProps {
  children: ReactNode;
}

export function HighlightButton({ children, ...rest }: HighlightButtonType) {
  const { isLoading } = useCart();
  return (
    <>
      <Button activeOpacity={0.8} {...rest}>
        {isLoading ? (
          <ActivityIndicator size={"small"} color="black" />
        ) : (
          <Label>{children}</Label>
        )}
      </Button>
    </>
  );
}
