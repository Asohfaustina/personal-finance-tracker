import { View, StyleSheet } from "react-native";
import { Spinner } from "../spinner";
import { layout } from "@/constants";
import * as React from "react";

type LoadingBoxProps = {
  position?: "top" | "center"
}

export function LoadingBox(props: LoadingBoxProps) {
  const { position = "center" } = props;
  return (
    <View style={[
      styles.loading,
      position === "top" && styles.top
    ]}>
      <Spinner />
    </View>
  )
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  top: {
    paddingTop: layout.padding.l,
    justifyContent: "flex-start",
  }
});
