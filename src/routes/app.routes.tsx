import { NavigationContainer, Route } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { ProductType } from "../global/types";
import { Cart } from "../screens/Cart";
import { Home } from "../screens/Home";
import { LoginScreen } from "../screens/LoginScreen";
import { NewCollection } from "../screens/NewCollection";
import { ProductDetail } from "../screens/ProductDetail";
import { SignInScreen } from "../screens/SignInScreen";

type RoutesTypes = {
  Home: undefined;
  Cart: undefined;
  Login: undefined;
  SignIn: undefined;
  NewCollection: undefined;
  ProductDetail: { product: ProductType };
};

const Stack = createNativeStackNavigator<RoutesTypes>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="NewCollection" component={NewCollection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
