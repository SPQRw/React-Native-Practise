import { View, Text, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function screenWrapper({ children }) {
  let statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : Platform.OS == "android" || Platform.OS == "ios"
    ? 30
    : 0;
  return <View style={{ paddingTop: statusBarHeight }}>{children}</View>;
}
