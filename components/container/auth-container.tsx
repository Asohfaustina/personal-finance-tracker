import { Text, View } from "@/components/theme";
import { globalStyles } from "@/styles/global.styles";
import * as React from "react";
import LogoBox from "@/components/logo-box";
import { colors, layout } from "@/constants";
import { StyleSheet } from "react-native";

type AuthContainerProps = {
	title: string;
	subTitle: string;
	children: React.ReactNode;
};

export default function AuthContainer(props: AuthContainerProps) {
	return (
		<View style={[globalStyles.container, styles.container]}>
			<View style={styles.viewBox}>
				<LogoBox size={50} />
				<View style={styles.headerBox}>
					<Text style={styles.title}>{props.title} </Text>
					<Text style={styles.subTitle}>{props.subTitle}</Text>
				</View>
				{props.children}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black[200],
	},

	viewBox: {
		flex: 1,
		gap: 10,
		justifyContent: "center",
		marginHorizontal: layout.margin.md + 1,
		backgroundColor: "none",
	},
	headerBox: {
		backgroundColor: "none",
	},
	title: {
		fontSize: layout.font["2xl"],
		color: colors.primary[700],
		fontWeight: 600,
		paddingTop: 10,
	},
	subTitle: {
		fontSize: layout.font.sm,
		color: colors.black[600],
	},
});
