import { Stack } from "expo-router";
import React from "react";
import { MenuProvider } from "./context/MenuContext"; // <-- use MenuContext

export default function RootLayout() {
  return (
    <MenuProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </MenuProvider>
  );
}




