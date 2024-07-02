import AppText from "@/components/AppText";
import MovieHeader from "@/components/MovieHeader";
import { getLetterRange, getWordRange } from "@/functions/all";
import { fetchMovieData } from "@/functions/fetch";
import { EvilIcons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";
import { Dimensions, ImageBackground, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { ShouldStartLoadRequest } from "react-native-webview/lib/WebViewTypes";

const { width: screenWidth } = Dimensions.get("screen");

export default function Movie() {
  //...
  const webViewRef = useRef(null);
  //...
  const [isPlaying, setIsPLaying] = useState(false);
  function togglePlayer() {
    if (isPlaying) {
      setIsPLaying(false);
    } else {
      setIsPLaying(true);
    }
  }
  //...
  const { id } = useLocalSearchParams();
  const tmdbId = id as string;
  const { data, isLoading } = useQuery({
    queryKey: ["movie", tmdbId],
    queryFn: () => fetchMovieData(tmdbId),
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
  });
  return (
    <SafeAreaView className="flex-[1] bg-[#060d17]">
      <MovieHeader />
      {isLoading ? (
        <View className="flex-[1] items-center justify-center">
          <ActivityIndicator animating={true} color="lightgreen" />
        </View>
      ) : (
        <ScrollView className="flex-[1]">
          {isPlaying ? (
            <WebView
              ref={webViewRef}
              className="w-screen"
              style={{ height: screenWidth * 0.6 }}
              source={{
                uri: `https://vidsrc.to/embed/movie/${data.imdb_id}`,
              }}
              onShouldStartLoadWithRequest={(request: ShouldStartLoadRequest) =>
                false
              }
            />
          ) : (
            <ImageBackground
              className="w-screen"
              style={{ height: screenWidth * 0.6 }}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${
                  data.images.backdrops[0]
                    ? data.images.backdrops[0].file_path
                    : data.backdrop_path
                }`,
              }}
            >
              <LinearGradient
                // Background Linear Gradient
                colors={["transparent", "#060d17"]}
                className="w-screen h-full relative flex items-center justify-center"
              >
                <Text>
                  <EvilIcons
                    onPress={() => togglePlayer()}
                    name="play"
                    size={80}
                    color="white"
                  />
                </Text>
              </LinearGradient>
            </ImageBackground>
          )}
          <View className="movie-info w-full h-auto">
            <View className="t-and-d w-full h-auto px-4 my-4">
              <AppText className="text-[25px] text-[#fff] font-bold mb-3">
                {data.title}
              </AppText>

              <AppText className="text-[15px] text-[#777777] font-light mb-3">
                2024{"   |   "}Action{"   |   "}Adventure
              </AppText>
              <AppText className="text-[15px] text-[#c4c4c4] font-light mb-3">
                {getWordRange(data.overview, 30)}
              </AppText>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
