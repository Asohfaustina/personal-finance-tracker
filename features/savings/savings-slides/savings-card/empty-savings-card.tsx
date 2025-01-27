import { Text, View } from "@/components/theme";
import * as React from "react";

import { Dimensions, StyleSheet } from "react-native";
import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { Link } from "expo-router";

export default function EmptySavingsCard() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>No Savings Record yet</Text>
			<Text style={styles.info}>
				You don't have any savings Record yet.{" "}
				<Link href={"/(root)/(main)/(tabs)/savings"}>
					<Text type="link" style={styles.link}>
						Create new savings
					</Text>
				</Link>{" "}
				and they'll appear here
			</Text>
		</View>
	);
}

const width = Math.floor(Dimensions.get("screen").width);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width,
		...globalStyles.px,
		...globalStyles.bgNone,

		borderRadius: layout.radius.sm,
	},
	info: {
		color: colors.black[500],
		fontSize: layout.font.sm + 2,
		paddingHorizontal: layout.padding.md,
		textAlign: "center",
		marginVertical: layout.margin.md,
	},
	title: {
		color: colors.black[600],
		fontSize: layout.font.md + 4,
		marginTop: layout.margin.sm + 4,
		textAlign: "center",
	},
	link: {
		textDecorationLine: "underline",
	},
});
