import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Text,
  Dimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MovieLogo from "./MovieLogo";
import AppText from "./AppText";
import { getLetterRange, getWordRange } from "@/functions/all";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { fetchTrending } from "@/functions/fetch";
import { router } from "expo-router";
import { Button } from "react-native-paper";

export type MovieProps = {
  id: string;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  runtime?: number;
  last_episode_to_air?: { season_number: number };
  genres: { name: string; id: number }[];
  media_type: string;
};

const renderItem = ({ item }: { item: MovieProps }) => (
  <View
    className="h-full relative text-[#060d1790]"
    style={{ width: screenWidth }}
  >
    <LinearGradient
      // Background Linear Gradient
      colors={["#060d1790", "#060d17"]}
      className="z-[20] w-full h-full absolute"
    ></LinearGradient>
    <Image
      className="w-full h-full object-cover"
      source={{
        uri: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
      }}
    />
    <View className="w-full absolute z-[30] bottom-0 px-5 overflow-hidden flex items-center flex-col">
      <MovieLogo
        className="movie-logo w-[150] h-[80] mb-[5]"
        movieId={item.id}
        movieTitle={item.media_type == "movie" ? item.title : item.name}
        mediaType={item.media_type}
      />
      <View className="w-auto flex-row items-center flex gap-5 mb-[10]">
        <AppText className="text-white text-[13px]">
          {item.media_type == "movie"
            ? getLetterRange(item.release_date, 4)
            : getLetterRange(item.first_air_date, 4)}
        </AppText>
        <View className="hd-btn w-[33] h-[17] flex flex-row justify-center items-center border border-white rounded-2xl">
          <AppText className="text-white text-[10px]">HD</AppText>
        </View>
        <AppText className="text-white text-[13px] text">
          <Feather name="star" size={13} color="gold" />{" "}
          {item.vote_average.toFixed(1)}
        </AppText>
      </View>
      <AppText className="text-[#c5c5c5] text-[12px] px-[20] mb-[20] text-center">
        Action {"  "} Thriller {"   "} Drama
      </AppText>
      <View className="btn-cont mb-[30] flex flex-row gap-[10]">
        <Button
          onPress={() =>
            router.push(
              item.media_type == "movie"
                ? `/movies/${item.id}`
                : `/tv/${item.id}`
            )
          }
          className="watch-btn w-[120] h-[40] bg-[#e8e8e8] rounded-3xl"
          contentStyle={{ height: "100%" }}
        >
          <AppText className="text-[12px] text-[#000]">
            <AntDesign name="play" size={11} color="black" /> Watch
          </AppText>
        </Button>
        <TouchableOpacity className="watch-btn w-[120] h-[40] bg-transparent rounded-3xl flex flex-row justify-center items-center">
          <AppText className="text-[12px] text-[#f5f5f5]">
            <Feather name="bookmark" size={11} color="#f5f5f5" /> Bookmark
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const { width: screenWidth } = Dimensions.get("window");

export default function MainScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: fetchData, isLoading } = useQuery({
    queryKey: ["trending", 35],
    queryFn: () => fetchTrending("day"),
  });

  const DATA = isLoading ? {} : fetchData.results;
  const flatlistRef = useRef<FlatList>(null);
  let it = 0;

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <View className="w-full h-[65vh]">
      <FlatList
        ref={flatlistRef}
        data={DATA}
        horizontal
        pagingEnabled
        snapToInterval={screenWidth}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
