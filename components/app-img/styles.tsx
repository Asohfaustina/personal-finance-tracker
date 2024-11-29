import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  loading: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

