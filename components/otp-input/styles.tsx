import { StyleSheet } from "react-native";
import { layout } from "@/constants";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		marginVertical: layout.margin.sm,
	},
	box: {
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		gap: 6,
	},
	otpBox: {
		flex: 1,
		height: layout.height.xl,
		borderWidth: 0.5,
		padding: layout.padding.sm,
		borderRadius: layout.radius.sm - 2,
		textAlign: "center",
		verticalAlign: "middle",
		borderColor: "gray",
	},
	error: {
		borderColor: "#EC5454",
		color: "#EC5454",
		backgroundColor: "rgba(236,84,84,0.1)",
	},
	errMsg: {
		width: "100%",
		marginVertical: layout.margin.sm,
		textAlign: "center",
		fontSize: layout.font.xs + 2,
		color: "#EC5454",
	},
});
