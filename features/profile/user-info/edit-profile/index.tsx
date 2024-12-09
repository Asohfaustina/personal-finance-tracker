import * as React from "react";
import useEditProfile from "./use-edit-profile";
import { Text, View } from "@/components/theme";
import { styles } from "./styles";
import BottomSheet from "@/components/bottom-sheet";
import Input from "@/components/ui/input";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native";
import { AppButton } from "@/components/app-button";
import BaseButton from "@/components/ui/base-button";

type EditProps = {
	open: boolean;
	close: () => void;
};

export default React.memo(function EditProfile(props: EditProps) {
	const { isLoading, formData, updateForm, update, close } = useEditProfile(props.close);

	if (!props.open) return null;

	return (
		<React.Fragment>
			<BottomSheet type="1" max={0.43} min={0.4} title={"Edit Profile"}>
				<ScrollView style={{ height: 200 }}>
					<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
						<KeyboardAvoidingView
							style={styles.container}
							keyboardVerticalOffset={100}
							behavior={Platform.OS === "ios" ? "padding" : undefined}
						>
							<View style={styles.inputBox}>
								<Text style={styles.label}>Name</Text>
								<Input
									type="text"
									placeholder="Enter Title"
									value={formData.name}
									onChange={(e) => updateForm("name", e)}
									style={styles.input}
									isLoading={isLoading}
								/>
							</View>

							<View style={styles.actionBox}>
								<AppButton press={close} style={styles.dismissBox} disabled={isLoading}>
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
				</ScrollView>
			</BottomSheet>
		</React.Fragment>
	);
});
