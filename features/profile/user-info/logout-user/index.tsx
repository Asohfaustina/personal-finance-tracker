import { Text, View } from "@/components/theme";
import { colors, layout } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Animated, Modal, Pressable, StyleSheet } from "react-native";
import useLogout from "./use-dissolve";
import { SafeAreaView } from "react-native";

type LogoutProps = {
	open: boolean;
	close: () => void;
};
export default React.memo(function LogoutUser(props: LogoutProps) {
	const { isLoading, handleClose, handleProceed, scaleAnimValue, fadeAnimValue } = useLogout(
		props.close,
		props.open
	);
	return (
		<Modal visible={props.open} transparent={true}>
			<SafeAreaView style={styles.container}>
				<View style={[styles.box]}>
					<Animated.View
						key={"unique"}
						style={[
							styles.modal,
							{ transform: [{ scale: scaleAnimValue }], opacity: fadeAnimValue },
						]}
					>
						<View style={styles.visual}>
							<Feather name="log-out" size={25} color={colors.warning[600]} />
							<Text style={styles.alertTitle}>Logout ?</Text>
							<Text style={styles.alertBody}>
								Are you sure you want to Proceed to logging out of the application ?
							</Text>
						</View>

						<View style={styles.optionsContainer}>
							<Pressable onPress={handleClose} style={styles.optionBox}>
								{({ pressed }) => (
									<View
										style={[pressed && globalStyles.pressed, isLoading && globalStyles.disabled]}
									>
										<Text style={styles.option}>Close</Text>
									</View>
								)}
							</Pressable>

							<Pressable onPress={handleProceed} style={[styles.optionBox, styles.additional]}>
								{({ pressed }) => (
									<View
										style={[pressed && globalStyles.pressed, isLoading && globalStyles.disabled]}
									>
										<Text style={[styles.option, { color: colors.primary[500] }]}>Logout</Text>
									</View>
								)}
							</Pressable>
						</View>
					</Animated.View>
				</View>
			</SafeAreaView>
		</Modal>
	);
});

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		flex: 1,
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0,0,0,0.3)",
		...globalStyles.px,
	},
	box: {
		marginTop: "70%",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: layout.radius.md,
	},
	modal: {
		maxWidth: 400,
		width: "100%",
		backgroundColor: "white",
		borderRadius: layout.radius.sm,
		paddingVertical: layout.padding.sm,
	},
	optionsContainer: {
		flexDirection: "row",
	},
	optionBox: {
		padding: 15,
		width: "50%",
		alignItems: "center",
		justifyContent: "center",
	},
	option: {
		fontSize: layout.font.sm + 2,
	},
	visual: {
		borderBottomWidth: 0.3,
		borderColor: "rgba(0,0,0,0.3)",
		padding: layout.padding.sm,
		alignItems: "center",
	},
	alertTitle: {
		marginTop: layout.margin.xs,
		...globalStyles.headers,
		color: colors.warning[600],
	},
	alertBody: {
		fontSize: layout.font.sm + 2,
		textAlign: "center",
		marginTop: layout.margin.xs,
	},
	loading: {
		alignItems: "center",
		width: 30,
		height: 30,
		borderRadius: layout.radius.xs,
		justifyContent: "center",
		backgroundColor: "white",
	},
	additional: {
		borderStartWidth: 0.3,
		borderColor: "rgba(0,0,0,0.3)",
	},
});
