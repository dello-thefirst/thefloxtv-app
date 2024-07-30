import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { MovieProps } from "./MainScreen";
import { LinearGradient } from "expo-linear-gradient";

const MainListMovieItem = ({
  item,
  listCat,
  index,
}: {
  item: MovieProps;
  listCat?: string;
  index: number;
}) => {
  return (
    <Link
      href={
        listCat == "trending" && item.media_type == "movie"
          ? `/movies/${item.id}`
          : listCat == "trending" && item.media_type == "tv"
          ? `/tv/${item.id}`
          : listCat == "popular-movies"
          ? `/movies/${item.id}`
          : listCat == "popular-movies"
          ? `/tv/${item.id}`
          : "/"
      }
    >
      <View className="w-auto h-[250] relative flex flex-row">
        <View
          className="w-auto h-full flex items-center justify-center"
          style={{ transform: [{ translateX: 10 }] }}
        >
          <Text className="text-[#201e27d3] text-[120px] font-bold">
            {index + 1}
          </Text>
        </View>
        <ImageBackground
          className="w-[160] h-[250] rounded-md overflow-hidden"
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
          }}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={["transparent", "#060d17"]}
            className="w-full h-[30] absolute bottom-0 left-0 z-[20]"
          ></LinearGradient>
        </ImageBackground>
      </View>
    </Link>
  );
};

export default MainListMovieItem;
