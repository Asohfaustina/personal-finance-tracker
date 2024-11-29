import { Image } from "react-native";
import { View } from "./theme";
import { assets } from "@/constants";
import { StyleSheet } from "react-native";

type LogoBoxProps = {
	size?: number;
};
export default function LogoBox({ size }: LogoBoxProps) {
	const width = size ?? 30;
	const height = size ?? 30;
	return (
		<View style={styles.container}>
			<Image source={assets.logo} style={{ width, height }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		alignContent: "center",
		backgroundColor: "none",
	},
});
