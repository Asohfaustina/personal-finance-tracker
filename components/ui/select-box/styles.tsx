import { Platform, StyleSheet } from "react-native";
import { color, layout } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: layout.margin.medium
  },
  label: {
    marginBottom: layout.margin.small,
    fontSize: layout.font.medium,
    color: "black"
  },
  box: {
    ...Platform.select({
      android: {
        borderRadius: layout.radius.tiny + 1,
        height: 60,
      },
      ios: {
        borderRadius: layout.radius.small - 2,
        height: 50,
      }
    }),
    width: "100%",
    borderWidth: 0.3,
    borderColor: color.mute,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 18
  },
  modal: {
    flex: 1
  },
  hidden: {
    color: "white"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: layout.padding.medium,
    borderBottomWidth: 0.17,
    borderColor: color.mute
  },
  headerText: {
    textAlign: "center",
    fontSize: layout.font.medium,
    fontWeight: "bold",
    padding: 18
  },
  item: {
    borderBottomWidth: 0.2,
    borderColor: "rgba(0,0,0,0.3)",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemText: {
    fontSize: 18
  }
});
