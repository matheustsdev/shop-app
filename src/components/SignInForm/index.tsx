import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";

import { Alert, ScrollView, View } from "react-native";
import { SignInUser, UserType } from "../../global/types";
import { useAuth } from "../../hooks/useAuth";
import { SigninButton } from "../SigninButton";

import { ContainerView, StyledInput, StyledLabel } from "./styles";

export function SignInForm() {
  const [nickname, setNickname] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const { user, isLogged, handleSignIn } = useAuth();
  const navigation = useNavigation();

  async function handleSubmitNewUser() {
    if (password === verifyPassword) {
      const newUser: SignInUser = {
        nickname,
        fullname,
        email,
        password,
      };

      handleSignIn(newUser);
    } else {
      Alert.alert("As senhas precisam ser iguais.");
    }
  }

  // Ref to avoid first render of useEffect
  const prevUserRef = useRef<UserType>();

  useEffect(() => {
    prevUserRef.current = user;
  });
  const userPreviousValue = prevUserRef.current ?? user;

  useEffect(() => {
    if (userPreviousValue !== user) {
      if (user.id === undefined) {
        navigation.navigate("Login" as never, {} as never);
      }
    }
  }, [user, isLogged]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        width: "90%",
      }}
    >
      <ContainerView>
        <View>
          <StyledLabel>Nome</StyledLabel>
          <StyledInput onChangeText={setFullname} value={fullname} />
        </View>
        <View>
          <StyledLabel>Email</StyledLabel>
          <StyledInput onChangeText={setEmail} value={email} />
        </View>
        <View>
          <StyledLabel>Senha</StyledLabel>
          <StyledInput onChangeText={setPassword} value={password} />
        </View>
        <View>
          <StyledLabel>Repita a senha</StyledLabel>
          <StyledInput
            onChangeText={setVerifyPassword}
            value={verifyPassword}
          />
        </View>

        <SigninButton onPress={() => handleSubmitNewUser()}>
          Registre-se
        </SigninButton>
      </ContainerView>
    </ScrollView>
  );
}
