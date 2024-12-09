import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import useEditSavings from "./use-edit-savings";
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


type SavingsProps = {
	open: boolean;
	close: () => void;
};

export default React.memo(function EditSavings(props: SavingsProps) {
	const { isLoading, formData, updateForm, update, close } = useEditSavings(props.close);

	const [showDatePicker, setShowDatePicker] = useState(false);

	const handleDateChange = (event: any, selectedDate?: Date) => {
		setShowDatePicker(false);
		if (selectedDate) {
			updateForm("duration", selectedDate.toISOString());
		}
	};

	if (!props.open) return null;

	return (
		<React.Fragment>
			<BottomSheet type="1" max={0.57} min={0.53} title={"Edit savings"}>
				<ScrollView style={{ height: 200 }}>
					<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
						<KeyboardAvoidingView
							style={styles.container}
							keyboardVerticalOffset={100}
							behavior={Platform.OS === "ios" ? "padding" : undefined}
						>
							<View style={styles.inputBox}>
								<Text style={styles.label}>Title</Text>
								<Input
									type="text"
									// keyboardType="numeric"
									placeholder="Enter Title"
									value={formData.title}
									onChange={(e) => updateForm("title", e)}
									style={styles.input}
									isLoading={isLoading}
								/>
							</View>
							<View style={styles.inputBox}>
								<Text style={styles.label}>Comments</Text>
								<Input
									type="text"
									keyboardType="numeric"
									placeholder="Enter Comments"
									value={formData.comments}
									onChange={(e) => updateForm("comments", e)}
									style={styles.input}
									isLoading={isLoading}
								/>
							</View>
							<View style={styles.inputBox}>
								<Text style={styles.label}>Target</Text>
								<Input
									type="text"
									keyboardType="numeric"
									placeholder="Enter Target"
									value={String(formData.targetAmount)}
									onChange={(e) => updateForm("targetAmount", e)}
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
