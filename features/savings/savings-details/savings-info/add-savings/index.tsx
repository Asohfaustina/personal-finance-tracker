import * as React from "react";
import useAddSavings from "./use-add-savings";
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
import FloatingButton from "@/components/floating-button";

export default React.memo(function AddSavings() {
	const { isLoading, formData, open, updateForm, update, actions } = useAddSavings();

	if (!open) return <FloatingButton action={() => actions("open")} />;

	return (
		<React.Fragment>
			<BottomSheet type="1" max={0.4} title={"Add savings"}>
				<ScrollView style={{ height: 200 }}>
					<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
						<KeyboardAvoidingView
							style={styles.container}
							keyboardVerticalOffset={100}
							behavior={Platform.OS === "ios" ? "padding" : undefined}
						>
							<View style={styles.inputBox}>
								<Text style={styles.label}>Amount</Text>
								<Input
									type="text"
									keyboardType="numeric"
									placeholder="Enter Amount"
									value={String(formData.amount)}
									onChange={(e) => updateForm("amount", e)}
									style={styles.input}
									isLoading={isLoading}
								/>
							</View>

							<View style={styles.actionBox}>
								<AppButton
									press={() => actions("close")}
									style={styles.dismissBox}
									disabled={isLoading}
								>
									<Text style={styles.dismissText}>Dismiss</Text>
								</AppButton>
								<BaseButton
									press={update}
									title={"Add Savings"}
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
