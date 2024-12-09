import * as React from "react";
import useChangePassword from "./use-change-password";
import { Text, View } from "@/components/theme";
import { styles } from "./styles";
import BottomSheet from "@/components/bottom-sheet";
import Input from "@/components/ui/input";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import { AppButton } from "@/components/app-button";
import BaseButton from "@/components/ui/base-button";

type ChangePasswordProps = {
	open: boolean;
	close: () => void;
};

export default React.memo(function ChangePassword(props: ChangePasswordProps) {
	const { isLoading, formData, updateForm, update, close } = useChangePassword(props.close);

	if (!props.open) return null;

	return (
		<React.Fragment>
			<BottomSheet type="1" max={0.57} min={0.53} title={"Change Password"}>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<KeyboardAvoidingView
						style={styles.container}
						keyboardVerticalOffset={100}
						behavior={Platform.OS === "ios" ? "padding" : undefined}
					>
						<View style={styles.inputBox}>
							<Text style={styles.label}>Old Password</Text>
							<Input
								type="text"
								placeholder="Enter Password"
								value={formData.oldPassword}
								onChange={(e) => updateForm("oldPassword", e)}
								style={styles.input}
								isLoading={isLoading}
							/>
						</View>
						<View style={styles.inputBox}>
							<Text style={styles.label}>New Password</Text>
							<Input
								type="text"
								placeholder="Enter Password"
								value={formData.newPassword}
								onChange={(e) => updateForm("newPassword", e)}
								style={styles.input}
								isLoading={isLoading}
							/>
						</View>

						<View style={styles.actionBox}>
							<AppButton press={close} style={styles.dismissBox}>
								<Text style={styles.dismissText}>Dismiss</Text>
							</AppButton>
							<BaseButton
								press={update}
								title={"Update"}
								width={"100%"}
								disabled={isLoading}
								showSpinner={isLoading}
							/>
						</View>
					</KeyboardAvoidingView>
				</TouchableWithoutFeedback>
			</BottomSheet>
		</React.Fragment>
	);
});
