import { Text } from "react-native";
import { StyleProps } from "react-native-reanimated";
import { useFonts } from "expo-font";
import { ClassAttributes, ComponentClass } from "react";

export default function AppText({
  children,
  className,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: StyleProps;
}) {
  const [fontLoaded] = useFonts({
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontLoaded) {
    return undefined;
  }
  return (
    <Text style={[{ fontFamily: "Lato-Regular", fontSize: 11 }, style]}>
      {children}
    </Text>
  );
}
