import React, { ReactNode, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { GreetingContainer, GreetingText } from "./styles";

export function Greeting() {
  const [nickname, setNickname] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    setNickname(user.nickname);
  }, [user]);

  return (
    <GreetingContainer>
      <GreetingText>Olá, {nickname}</GreetingText>
    </GreetingContainer>
  );
}
