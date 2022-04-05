import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator, TouchableOpacityProps, View } from "react-native";
import { Container, StyledText } from "./styles";
import { useAuth } from "../../hooks/useAuth";

export function SigninButton({ children, ...rest }: TouchableOpacityProps) {
  const { isLoading } = useAuth();

  return (
    <Container
      {...rest}
      style={{ justifyContent: isLoading ? "center" : "space-between" }}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color="white"
          style={{
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        <>
          <AntDesign name="adduser" size={24} color="white" />
          <StyledText>{children}</StyledText>
        </>
      )}
    </Container>
  );
}
