import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { router } from "expo-router";

const WatchNowBtn = ({ url }: { url: string }) => {
  return (
    <Button
      className="w-[170] h-[45] rounded-xl bg-[#2d3b4e]"
      contentStyle={{ height: "100%" }}
      icon="play"
      mode="contained"
      onPress={() => router.push(url)}
    >
      <Text className="w-full h-full">Watch Now</Text>
    </Button>
  );
};

export default WatchNowBtn;
