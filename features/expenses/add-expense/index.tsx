import * as React from "react";
import useAddExpense from "./use-add-expense";
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
import Category from "./category";

export default React.memo(function AddExpense() {
	const { isLoading, formData, open, updateForm, create, close, actions } = useAddExpense();

	if (!open) return <FloatingButton action={() => actions("open")} />;

	return (
		<React.Fragment>
			<BottomSheet type="1" max={0.57} min={0.53} title={"Add Expense"}>
				<ScrollView style={{ height: 200 }}>
					<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
						<KeyboardAvoidingView
							style={styles.container}
							keyboardVerticalOffset={100}
							behavior={Platform.OS === "ios" ? "padding" : undefined}
						>
							<View style={styles.inputBox}>
								<Text style={styles.label}>Title</Text>
								<View style={styles.categoryBox}>
									<Category
										category={formData.category}
										setCategory={(e) => updateForm("category", e)}
									/>
								</View>
							</View>
							<View style={styles.inputBox}>
								<Text style={styles.label}>Comments</Text>
								<Input
									type="text"
									keyboardType="default"
									placeholder="Enter Comments"
									value={formData.comments}
									onChange={(e) => updateForm("comments", e)}
									style={styles.input}
									isLoading={isLoading}
								/>
							</View>
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
								<AppButton press={close} style={styles.dismissBox} disabled={isLoading}>
									<Text style={styles.dismissText}>Dismiss</Text>
								</AppButton>
								<BaseButton
									press={create}
									title={"Add Expense"}
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
