import { StyleSheet } from "react-native";
import { layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
export const styles = StyleSheet.create({
	img: {
		borderRadius: layout.radius.xl,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	loading: {
		justifyContent: "center",
		alignItems: "center",
	},
	actualImg: {
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 1,
		width: "100%",
		height: "100%",
		borderRadius: layout.radius.xl,
	},
});
