import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import { Button, Label } from "./styles";

interface HighlightButtonType extends TouchableOpacityProps {
  children: ReactNode;
}

export function HighlightButton({ children, ...rest }: HighlightButtonType) {
  return (
    <Button activeOpacity={0.8} {...rest}>
      <Label>{children}</Label>
    </Button>
  );
}
