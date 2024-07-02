import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function MovieHeader() {
  return (
    <View className="w-screen h-[50] px-4 flex-row items-center">
      <Button
        className="h-full flex flex-row items-center"
        onPress={() => router.back()}
      >
        <Text className="">
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </Text>
      </Button>
    </View>
  );
}
