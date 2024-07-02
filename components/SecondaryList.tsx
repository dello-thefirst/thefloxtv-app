import {
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import AppText from "./AppText";
import { useQuery } from "@tanstack/react-query";
import { fetchTrending } from "@/functions/fetch";
import { MovieProps } from "./MainScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import SecListMovieItem from "./SecListMovieItem";

const { width: screenWIdth } = Dimensions.get("screen");

const SecondaryList = () => {
  const { data: fetchData, isLoading } = useQuery({
    queryKey: ["ttww", 1],
    queryFn: () => fetchTrending("week"),
    refetchInterval: 5000,
  });

  const DATA = isLoading ? {} : fetchData.results.slice(0, 10);

  const renderItem = ({ item }: { item: MovieProps }) => (
    <SecListMovieItem item={item} />
  );

  if (isLoading) {
    return <Text>Loading</Text>;
  }
  return (
    <View className="w-screen mb-6">
      <View className="w-full flex flex-row justify-between px-5 items-center mb-2">
        <AppText className="w-full text-[#a9a9a9] text-[17px] font-[500] text-center">
          <FontAwesome5 name="fire" size={17} color="white" />
          {"  "}Trending This Week{"  "}
          <FontAwesome5 name="fire" size={17} color="white" />
        </AppText>
      </View>
      <FlatList
        className="pl-4"
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        decelerationRate={"normal"}
        horizontal
      />
    </View>
  );
};

export default SecondaryList;
