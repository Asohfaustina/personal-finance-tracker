import { Animated, SafeAreaView, View } from "react-native";
import { StyleSheet } from "react-native";
import { layout } from "@/constants";
import { useAppModal } from "./use-app-modal";
import { ActionButton } from "./action-button";
import { CloseButton } from "./close-button";
import { Title } from "./title";
import * as React from "react";

type AppModalProps = {
	proceedAction?: (cb: Function) => void;
	proceedTitle?: string;
	proceedTitleType?: "default" | "destructive";
	closeTitle?: string;
	title?: string;
	message?: string;
	isLoading?: boolean;
	closeModal: Function;
};
export default function InfoModal(props: AppModalProps) {
	const {
		proceedAction,
		closeModal,
		isLoading = false,
		message = "Modal Message",
		closeTitle = "Cancel",
		proceedTitle = "Continue",
		title = "Modal Title",
		proceedTitleType = "default",
	} = props;
	const { fadeAnimValue, handleClose, handleProceed, scaleAnimValue } = useAppModal(
		closeModal,
		proceedAction
	);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.box}>
				<Animated.View
					style={[
						styles.modal,
						{
							transform: [{ scale: scaleAnimValue }],
							opacity: fadeAnimValue,
						},
					]}
				>
					<Title message={message} title={title} />
					<View style={styles.optionsContainer}>
						<CloseButton handleClose={handleClose} title={closeTitle} />
						<ActionButton
							isLoading={isLoading}
							title={proceedTitle}
							proceed={handleProceed}
							type={proceedTitleType}
						/>
					</View>
				</Animated.View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		flex: 1,
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0,0,0,0.1)",
	},
	box: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: layout.padding.l,
	},
	modal: {
		maxWidth: 400,
		width: "100%",
		backgroundColor: "white",
		borderRadius: layout.radius.md,
	},
	optionsContainer: {
		flexDirection: "row",
	},
});
