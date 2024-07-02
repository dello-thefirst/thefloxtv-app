import { View, Text, FlatList } from "react-native";
import React from "react";
import { MovieProps } from "./MainScreen";

const Trailers = ({ trailerData }: { trailerData: any }) => {
  const DATA = trailerData;
  const renderItem = ({ item }: { item: MovieProps }) => {
    <View>
      <View>{item.videos.results.key}</View>
    </View>;
  };
  return (
    <View className="w-full h-auti px-3">
      <Text>Trailers</Text>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
};

export default Trailers;
