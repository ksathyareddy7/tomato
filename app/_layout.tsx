import { StoreProvider } from "@/storeSetup";
import { AppFonts } from "@/styles/constants";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    [AppFonts.Poppins300]: Poppins_300Light,
    [AppFonts.Poppins400]: Poppins_400Regular,
    [AppFonts.Poppins500]: Poppins_500Medium,
    [AppFonts.Poppins600]: Poppins_600SemiBold,
    [AppFonts.Poppins700]: Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <StoreProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="cart" />
        <Stack.Screen name="restaurant/[id]" />
        <Stack.Screen name="dish/[restaurantId]" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </StoreProvider>
  );
}
