import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import useBudgetActions from "./use-budget-actions";
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
import { globalStyles } from "@/styles/global.styles";

type BudgetProps = {
	open: boolean;
	close: (state?: boolean) => void;
};

export default React.memo(function UpdateBudget(props: BudgetProps) {
	const { isUpdate, isLoading, formData, updateForm, create, update } = useBudgetActions(
		props.close
	);

	const [showDatePicker, setShowDatePicker] = useState(false);

	const handleDateChange = (event: any, selectedDate?: Date) => {
		setShowDatePicker(false);
		if (selectedDate) {
			updateForm("duration", selectedDate.toISOString());
		}
	};

	if (!props.open) return null;

	return (
		<BottomSheet
			type="1"
			threshold={10}
			max={0.54}
			min={0.53}
			title={`${isUpdate ? "Update" : "Create"} Budget`}
		>
			<ScrollView>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<KeyboardAvoidingView
						style={styles.container}
						keyboardVerticalOffset={100}
						behavior={Platform.OS === "ios" ? "padding" : undefined}
					>
						<View style={styles.inputBox}>
							<Text style={styles.label}>Budget</Text>
							<Input
								type="text"
								keyboardType="numeric"
								placeholder="Enter Budget"
								value={formData.budget}
								onChange={(e) => updateForm("budget", e)}
								style={styles.input}
								isLoading={isLoading}
							/>
						</View>
						<View style={styles.inputBox}>
							<Text style={styles.label}>Duration</Text>
							<AppButton
								press={() => setShowDatePicker(true)}
								style={[styles.input, styles.durationBox, isLoading && globalStyles.disabled]}
							>
								<Text style={styles.durationText}>
									{formData.duration
										? new Date(formData.duration).toLocaleDateString("default", {
												dateStyle: "full",
										  })
										: "Select Date"}
								</Text>
							</AppButton>
							{showDatePicker && (
								<DateTimePicker
									value={formData.duration ? new Date(formData.duration) : new Date()}
									mode="date"
									display="default"
									onChange={handleDateChange}
								/>
							)}
						</View>

						<View style={styles.actionBox}>
							<AppButton press={props.close} style={styles.dismissBox}>
								<Text style={styles.dismissText}>Dismiss</Text>
							</AppButton>
							<BaseButton
								press={isUpdate ? update : create}
								title={isUpdate ? "Update" : "Create"}
								width={"100%"}
								disabled={isLoading}
								showSpinner={isLoading}
							/>
						</View>
					</KeyboardAvoidingView>
				</TouchableWithoutFeedback>
			</ScrollView>
		</BottomSheet>
	);
});
