import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { StyleProps } from "react-native-reanimated";

export default function MovieLogo({
  movieId,
  movieTitle,
  mediaType,
  className,
  style,
}: {
  movieId: string;
  movieTitle: string;
  mediaType?: string;
  className?: string;
  style?: StyleProps;
}) {
  const [movieLogoData, setMovieLogoData] = useState([]);

  useEffect(() => {
    async function getMovieLogo() {
      const res = await fetch(
        `https://api.themoviedb.org/3/${mediaType}/${movieId}/images?include_image_language=en&api_key=c19b8e28dc3c9d900ceb4696bf2d247c`,
        { cache: "no-store" }
      );
      const data = await res.json();
      setMovieLogoData(data.logos[0] ? data.logos[0].file_path : "");
    }
    getMovieLogo();
  }, []);
  if (movieLogoData) {
    return (
      <View style={style}>
        <Image
          className="w-full h-full object-contain"
          contentFit="contain"
          source={{ uri: `https://themoviedb.org/t/p/w500/${movieLogoData}` }}
        />
      </View>
    );
  } else {
    return <Text>{movieTitle}</Text>;
  }
}
