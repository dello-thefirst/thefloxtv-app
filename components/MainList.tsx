import React from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Text,
  View,
} from "react-native";
import AppText from "./AppText";
import { useQuery } from "@tanstack/react-query";
import {
  fetchPopularMovies,
  fetchPopularSeries,
  fetchTrending,
} from "@/functions/fetch";
import { Image } from "expo-image";
import type { MovieProps } from "./MainScreen";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import MainListMovieItem from "./MainListMovieItem";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

export default function MainList({ listCat }: { listCat?: string }) {
  const { data: fetchData, isLoading } = useQuery({
    queryKey: [listCat, 20, "ggcjyffvvvnjcff"],
    queryFn: () =>
      listCat == "trending"
        ? fetchTrending("day")
        : listCat == "popular-movies"
        ? fetchPopularMovies()
        : fetchPopularSeries(),
    refetchInterval: 5000,
  });

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  const renderItem = ({ item, index }: { item: MovieProps; index: number }) => (
    <MainListMovieItem item={item} listCat={listCat} index={index} />
  );

  const DATA = isLoading
    ? {}
    : listCat == "trending"
    ? fetchData.results.slice(0, 10)
    : fetchData.results.slice(0, 10);
  return (
    <View className="w-full mb-6">
      <View className="w-full flex flex-row justify-between px-5 items-center mb-4">
        <AppText className="w-full text-[#a9a9a9] text-[16px] font-[600]">
          {listCat == "trending" && (
            <Text>
              Today's top picks{" "}
              <AntDesign name="clockcircleo" size={12} color="lightgreen" />
            </Text>
          )}
          {listCat == "popular-movies" && (
            <Text>
              Top Rated Movies{" "}
              <AntDesign name="staro" size={13} color="lightgreen" />
            </Text>
          )}
          {listCat == "popular-series" && <Text>Top Rated Tv Shows</Text>}
        </AppText>
      </View>
      <FlatList
        className="pl-5"
        data={DATA}
        renderItem={renderItem}
        horizontal
        decelerationRate={"normal"}
      />
    </View>
  );
}
