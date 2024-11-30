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
    padding: layout.padding.large,
  },
  modal: {
    maxWidth: 400,
    width: "100%",
    backgroundColor: "white",
    borderRadius: layout.radius.medium
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
    fontSize: layout.font.medium + 2
  },
  visual: {
    borderBottomWidth: 0.3,
    borderColor: "rgba(0,0,0,0.3)",
    padding: layout.padding.medium,
    alignItems: "center"
  },
  alertTitle: {
    fontSize: layout.font.medium + 4,
    marginTop: layout.margin.small
  },
  alertBody: {
    fontSize: layout.font.medium + 2,
    textAlign: "center",
    marginTop: layout.margin.small
  },
  loading: {
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: layout.radius.small,
    justifyContent: "center",
    backgroundColor: "white"
  },
  additional: {
    borderStartWidth: 0.3,
    borderColor: "rgba(0,0,0,0.3)"
  }
});


