import { colors, layout } from "@/constants";
import { Dimensions, StyleSheet } from "react-native";

const width = Math.floor(Dimensions.get("screen").width);
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: layout.padding.md,
    paddingVertical: layout.padding.sm,
    alignItems: "center",
    gap: 25,
  },

  imageBox: {
    width: "100%",
    flex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    flex: 1,
    width: width,
    height: "100%",
  },

  descriptionBox: {
    flex: 0.4,
    alignItems: "center",
    gap: 10,
  },

  title: {
    fontSize: layout.font["2xl"],
    lineHeight: layout.height.l,
    fontWeight: "600",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: layout.font.base,
  },
  dotsBox: {
    width: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  dots: {
    borderRadius: layout.radius.xl,
    backgroundColor: colors.black[400],
    height: layout.height.sm,
    width: layout.width.sm,
  },
  activeDot: {
    backgroundColor: colors.primary[600],
    width: layout.width.l,
  },

  actionsBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  button: {
    width: 170,
    alignItems: "center",
    padding: layout.padding.md,
    borderRadius: layout.radius.md + 5,
  },
  next: {
    backgroundColor: colors.primary[700],
  },
  skip: {
    backgroundColor: colors.secondary[200],
  },
  buttonText: {
    fontSize: layout.font.base,
    fontWeight: "600",
    color: colors.black[700],
    textTransform: "uppercase",
  },
});
