import { Spinner } from "@/components/spinner";
import { SafeAreaView, View } from "@/components/theme";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React from "react";

type LoadingProps = {
  children: React.ReactNode;
  isLoading?: boolean;
};
export function Loading(props: LoadingProps) {
  return (
    <SafeAreaView style={styles.container}>
      {props.isLoading && <LoadingView />}
      {props.children}
    </SafeAreaView>
  );
}

function LoadingView() {
  return (
    <View style={styles.loading}>
      <Spinner />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
