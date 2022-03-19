import { LoginScreen } from "./src/screens/LoginScreen";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { SignInScreen } from "./src/screens/SignInScreen";
import { Home } from "./src/screens/Home";
import { Cart } from "./src/screens/Cart";
import { AppRoutes } from "./src/routes/app.routes";
import { CartProvider } from "./src/hooks/useCart";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./src/hooks/useAuth";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <CartProvider>
        <StatusBar translucent />
        <AppRoutes />
      </CartProvider>
    </AuthProvider>
  );
}
