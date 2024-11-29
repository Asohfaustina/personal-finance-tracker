import { StyleSheet } from "react-native";
import { color, layout } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: layout.margin.small + 3
  },
  box: {
    marginBottom: layout.margin.small,
    fontSize: layout.font.medium,
    color: color.black
  },
  textBox: {
    borderRadius: layout.radius.small - 2,
    width: "100%",
    height: 150,
    borderWidth: 0.3,
    borderColor: color.mute,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    padding: layout.padding.medium - 2,
    fontSize: layout.font.medium + 2,
    flex: 1,
    paddingTop: 15,
    height: "100%",
    textAlign: "left",
  },
  error: {
    marginVertical: layout.margin.small,
    color: "red"
  }
});

