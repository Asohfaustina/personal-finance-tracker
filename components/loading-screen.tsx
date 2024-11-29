import { Spinner } from "@/components/spinner";
import { View } from "@/components/theme";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React from "react";

export function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Spinner />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#10231C",
  },
});
