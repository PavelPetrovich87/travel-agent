import { Stack } from 'expo-router';

export default function ScreenLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="trip-form" />
      <Stack.Screen name="trip-details" />
    </Stack>
  );
} 