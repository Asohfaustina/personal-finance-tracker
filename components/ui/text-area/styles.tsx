import { StyleSheet } from "react-native";
import { colors, layout } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: layout.margin.xs + 3
  },
  box: {
    marginBottom: layout.margin.xs,
    fontSize: layout.font.sm,
    color: colors.black[900]
  },
  textBox: {
    borderRadius: layout.radius.xs - 2,
    width: "100%",
    height: 150,
    borderWidth: 0.3,
    borderColor: colors.mute,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    padding: layout.padding.sm - 2,
    fontSize: layout.font.sm + 2,
    flex: 1,
    paddingTop: 15,
    height: "100%",
    textAlign: "left",
  },
  error: {
    marginVertical: layout.margin.xs,
    color: "red"
  }
});

