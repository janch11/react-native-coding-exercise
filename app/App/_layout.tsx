import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "Root",
};

export default function AppLayout() {


  return (
    <Stack
      initialRouteName="Root"
      screenOptions={{ headerShown: false, animation: "fade" }}
    >
      <Stack.Screen name="Root" />
      <Stack.Screen name="Ticket" />
    </Stack>
  );
}
