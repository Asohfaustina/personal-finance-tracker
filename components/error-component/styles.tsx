import { StyleSheet } from "react-native";
import { color, layout } from "@/constants";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: layout.padding.medium + 10,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: layout.font.medium + 4,
    textTransform: "capitalize"
  },
  sub: {
    color: color.mute,
    fontSize: layout.font.medium
  },
  pill: {
    borderRadius: layout.radius.extraLarge + 100,
    paddingHorizontal: layout.padding.medium + 4,
    paddingVertical: layout.padding.small + 4,
    backgroundColor: "rgba(203, 32, 32, 0.1)",
    marginTop: layout.margin.medium
  },
  again: {
    fontSize: layout.font.medium,
    color: "rgba(203, 32, 32, 0.9)",
    fontWeight: "600",
    letterSpacing: -0.3
  }
});

