import { Stack } from "expo-router";

export default function ModalStack() {
  return (
    <Stack>
      <Stack.Screen
        name="movies/[id]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="tv/[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
