import { StyleSheet } from "react-native";
import { colors, layout } from "@/constants";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: layout.padding.sm + 10,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: layout.font.sm + 4,
    textTransform: "capitalize"
  },
  sub: {
    color: colors.mute,
    fontSize: layout.font.sm
  },
  pill: {
    borderRadius: layout.radius.l + 100,
    paddingHorizontal: layout.padding.sm + 4,
    paddingVertical: layout.padding.xs + 4,
    backgroundColor: "rgba(203, 32, 32, 0.1)",
    marginTop: layout.margin.sm
  },
  again: {
    fontSize: layout.font.sm,
    color: "rgba(203, 32, 32, 0.9)",
    fontWeight: "600",
    letterSpacing: -0.3
  }
});

