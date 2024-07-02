import React from "react";
import MainScreen from "@/components/MainScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import MainList from "@/components/MainList";
import HomeHeader from "@/components/HomeHeader";
import SecondaryList from "@/components/SecondaryList";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-[1] bg-[#060d17]">
      <StatusBar />
      <ScrollView className="flex-[1]">
        <HomeHeader />
        <MainScreen />
        <SecondaryList />
        <MainList listCat="trending" />
        <MainList listCat="popular-movies" />
        <MainList listCat="popular-series" />
      </ScrollView>
    </SafeAreaView>
  );
}
