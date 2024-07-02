import { View, Text, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "./AppText";
import {
  convertMinutesToHoursAndMinutes,
  getLetterRange,
  getWordRange,
} from "@/functions/all";
import { MovieProps } from "./MainScreen";
import WatchNowBtn from "./WatchNowBtn";
import { fetchMovieData, fetchSeriesData } from "@/functions/fetch";
import { ActivityIndicator } from "react-native-paper";

const SecListMovieItem = ({ item }: { item?: any }) => {
  const [moreDetails, setMoreDetails] = useState<MovieProps>();
  useEffect(() => {
    const fetchMore = async () => {
      const data =
        item.media_type == "movie"
          ? await fetchMovieData(item.id)
          : await fetchSeriesData(item.id);
      setMoreDetails(data);
    };
    fetchMore();
  }, [item]);
  return (
    <View className="w-[85vw] h-auto py-2 mr-3">
      <View className="w-full h-[170] rounded-2xl overflow-hidden">
        <ImageBackground
          className="w-full h-full"
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
          }}
        >
          <LinearGradient
            className="w-full h-full p-3 flex justify-between"
            colors={["transparent", "rgba(20,20,23,0.9)"]}
            start={[1.0, 0.1]}
          >
            <AppText className="text-[#90ee90] text-[15px]">
              {item.media_type == "movie"
                ? `Movie  ${"\u00B7"}  ${getLetterRange(item.release_date, 4)}`
                : `Tv Show  ${"\u00B7"}  ${getLetterRange(
                    item.first_air_date,
                    4
                  )}`}
            </AppText>
            <AppText className="text-[#d7d5d5] text-[25px] font-bold">
              {item.media_type == "movie"
                ? getWordRange(item.title, 4)
                : getWordRange(item.name, 4)}
            </AppText>
            <AppText className="text-[#d7d5d5] text-[16px] font-light">
              {item.media_type == "movie" ? (
                moreDetails ? (
                  <AppText>
                    {convertMinutesToHoursAndMinutes(
                      moreDetails.runtime as number
                    )}
                  </AppText>
                ) : (
                  <Text>...</Text>
                )
              ) : moreDetails ? (
                moreDetails?.last_episode_to_air?.season_number && (
                  <AppText>
                    (Season {moreDetails.last_episode_to_air.season_number})
                  </AppText>
                )
              ) : (
                <Text>...</Text>
              )}
            </AppText>
            <WatchNowBtn
              url={`
                ${
                  item.media_type == "movie"
                    ? `/movies/${item.id}`
                    : `/tv/${item.id}`
                }`}
            />
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SecListMovieItem;
