import { colors, layout } from "@/constants";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    width: 250,
    paddingVertical: layout.padding.md,
    marginVertical: layout.margin.md,
    borderRadius: layout.radius.md,
    backgroundColor: colors.primary[700],
  },
  text: {
    textAlign: "center",
    color: colors.white[200],
    fontSize: layout.font.md,
  },
});
