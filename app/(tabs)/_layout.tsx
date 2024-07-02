import React from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "lightgreen",
        tabBarInactiveTintColor: "white",
        tabBarBackground: () => {
          return (
            <BlurView
              intensity={100}
              tint="dark"
              experimentalBlurMethod="dimezisBlurView"
              style={{ flex: 1, borderRadius: 50 }}
            />
          );
        },
        tabBarStyle: {
          width: "90%",
          overflow: "hidden",
          marginHorizontal: "5%",
          height: 60,
          borderRadius: 50,
          backgroundColor: "#060d17",
          position: "absolute",
          bottom: 10,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="home" size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="search" size={18} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favourites"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="heart" size={18} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="user" size={18} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
