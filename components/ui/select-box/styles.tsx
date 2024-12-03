import { Platform, StyleSheet } from "react-native";
import { colors, layout } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: layout.margin.sm
  },
  label: {
    marginBottom: layout.margin.xs,
    fontSize: layout.font.sm,
    color: "black"
  },
  box: {
    ...Platform.select({
      android: {
        borderRadius: layout.radius["2xs"] + 1,
        height: 60,
      },
      ios: {
        borderRadius: layout.radius.xs - 2,
        height: 50,
      }
    }),
    width: "100%",
    borderWidth: 0.3,
    borderColor: colors.mute,
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
    paddingHorizontal: layout.padding.sm,
    borderBottomWidth: 0.17,
    borderColor: colors.mute
  },
  headerText: {
    textAlign: "center",
    fontSize: layout.font.sm,
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
