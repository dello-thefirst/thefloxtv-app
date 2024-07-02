import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default function HomeHeader() {
  return (
    <LinearGradient
      className="w-screen h-[70] absolute z-[200] px-4 flex-row items-center justify-between"
      colors={["#060d17", "transparent"]}
    >
      <Image
        className="w-[120] h-[40]"
        contentFit="contain"
        source={require("../assets/images/logo.png")}
      />
      <Button onPress={() => alert("Your Papa")}>
        <Ionicons
          name="notifications-outline"
          size={24}
          color="whitesmoke"
          className="text-[whitesmoke]"
        />
      </Button>
    </LinearGradient>
  );
}
