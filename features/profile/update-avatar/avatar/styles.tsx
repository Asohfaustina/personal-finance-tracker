import { StyleSheet } from "react-native";
import { colors, layout } from "@/constants";

export const styles = StyleSheet.create({
	container: {
		height: 100,
		width: 100,
		borderRadius: layout.radius.xl,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
		borderWidth: 0.3,
	},
	img: {
		width: "100%",
		height: "100%",
		borderRadius: layout.radius.xl,
	},
	verified: {
		position: "absolute",
		top: 45,
		right: -25,
		backgroundColor: colors.white[200],
		borderRadius: layout.radius.xl,
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
		justifyContent: "center",
		borderRadius: layout.radius.xl,
	},
});
