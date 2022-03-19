import React, { ReactNode } from "react";

import { GreetingContainer, GreetingText } from "./styles";

interface GreetingType {
  children: ReactNode;
}

export function Greeting({ children }: GreetingType) {
  return (
    <GreetingContainer>
      <GreetingText>Olá, {children}</GreetingText>
    </GreetingContainer>
  );
}
