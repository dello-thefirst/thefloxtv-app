import { fetchMovieData, fetchSeriesData } from "@/functions/fetch";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";
import { Dimensions, ImageBackground, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView, { WebViewNavigation } from "react-native-webview";
import { ShouldStartLoadRequest } from "react-native-webview/lib/WebViewTypes";

const { width: screenWidth } = Dimensions.get("screen");

export default function MovieItem() {
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
    queryKey: ["series", tmdbId],
    queryFn: () => fetchSeriesData(tmdbId),
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
  });
  return (
    <SafeAreaView className="flex-[1] bg-[#141313]">
      <ScrollView className="flex-[1]">
        {isLoading ? (
          <Text>Loading</Text>
        ) : (
          <>
            <LinearGradient
              className="w-screen h-[60] absolute z-[20] px-4 flex-row items-center"
              colors={["transparent", "transparent"]}
            >
              <Text className="bg-[#000] px-2 py-2 rounded-full">
                <Ionicons
                  onPress={() => router.back()}
                  name="arrow-back-outline"
                  size={24}
                  color="white"
                />
              </Text>
            </LinearGradient>
            {isPlaying ? (
              <WebView
                ref={webViewRef}
                className="w-screen"
                style={{ height: screenWidth * 0.6 }}
                source={{
                  uri: `https://vidsrc.to/embed/tv/${data.imdb_id}`,
                }}
                onShouldStartLoadWithRequest={(
                  request: ShouldStartLoadRequest
                ) => false}
              />
            ) : (
              <ImageBackground
                className="w-screen"
                style={{ height: screenWidth * 0.7 }}
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
                }}
              >
                <LinearGradient
                  // Background Linear Gradient
                  colors={["transparent", "#141313"]}
                  className="w-screen h-full relative flex items-center justify-center"
                >
                  <Text>
                    <FontAwesome
                      onPress={() => togglePlayer()}
                      name="play-circle"
                      size={64}
                      color="lightgreen"
                    />
                  </Text>
                </LinearGradient>
              </ImageBackground>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
