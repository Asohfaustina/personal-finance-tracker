import { StyleSheet } from "react-native";
import { layout } from "@/constants";
export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: layout.padding.md,
  },
  modal: {
    maxWidth: 400,
    width: "100%",
    backgroundColor: "white",
    borderRadius: layout.radius.sm
  },
  optionsContainer: {
    flexDirection: "row"
  },
  optionBox: {
    padding: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  option: {
    fontSize: layout.font.sm + 2
  },
  visual: {
    borderBottomWidth: 0.3,
    borderColor: "rgba(0,0,0,0.3)",
    padding: layout.padding.sm,
    alignItems: "center"
  },
  alertTitle: {
    fontSize: layout.font.sm + 4,
    marginTop: layout.margin.xs
  },
  alertBody: {
    fontSize: layout.font.sm + 2,
    textAlign: "center",
    marginTop: layout.margin.xs
  },
  loading: {
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: layout.radius.xs,
    justifyContent: "center",
    backgroundColor: "white"
  },
  additional: {
    borderStartWidth: 0.3,
    borderColor: "rgba(0,0,0,0.3)"
  }
});


