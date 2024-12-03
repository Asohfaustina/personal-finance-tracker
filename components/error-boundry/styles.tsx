import { StyleSheet } from "react-native";
import { layout } from "@/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: layout.padding.sm,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: layout.font.md,
		marginTop: 10,
	},
	text: {
		fontSize: layout.font.sm + 6,
		paddingHorizontal: layout.padding.sm,
		textAlign: "center",
		marginTop: layout.margin.xs,
		marginBottom: layout.margin.sm,
	},
	img: {
		width: "80%",
		height: 200,
		marginBottom: layout.margin.sm,
	},
});
