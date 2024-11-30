import { StyleSheet } from "react-native";
import { layout } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: layout.padding.medium,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: layout.font.large,
    marginTop: 10
  },
  text: {
    fontSize: layout.font.medium + 6,
    paddingHorizontal: layout.padding.medium,
    textAlign: "center",
    marginTop: layout.margin.small,
    marginBottom: layout.margin.medium
  },
  img: {
    width: "80%",
    height: 200,
    marginBottom: layout.margin.medium
  }
});
