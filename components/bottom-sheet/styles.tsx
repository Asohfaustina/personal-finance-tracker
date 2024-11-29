import { StyleSheet, Platform } from "react-native";
import { color, layout } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    borderColor: color.mute,
    backgroundColor: color.white
  },
  type1: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
          width: 0,
          height: -7,
        },
        shadowOpacity: 0.09,
        shadowRadius: 5.84,
      },
      android: {
        elevation: 10,
      },
    }),
    borderTopRightRadius: layout.radius.small + 10,
    borderTopLeftRadius: layout.radius.small + 10,
  },
  type2: {
    borderTopWidth: 0.3,
    borderColor: color.mute
  },
  dragBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: layout.padding.small + 6,
    paddingBottom: layout.padding.small + 6,
    borderTopRightRadius: layout.radius.small + 4,
    borderTopLeftRadius: layout.radius.small + 4
  },
  dragBar: {
    width: 42,
    paddingBottom: layout.padding.tiny + 5,
    marginBottom: layout.margin.small + 6,
    backgroundColor: "rgba(0,0,0,0.15)",
    borderRadius: layout.radius.extraLarge
  },
  title: {
    paddingBottom: layout.padding.small,
    fontSize: layout.font.medium + 2,
    textTransform: "capitalize"
  }
});


