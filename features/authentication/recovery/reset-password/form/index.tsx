import { SafeAreaView, Text, View } from "@/components/theme";
import Input from "@/components/ui/input";
import { styles } from "./styles";
import BaseButton from "@/components/ui/base-button";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native";
import useForm from "./use-form";

export default function Form() {
	const { isLoading, formData, updateForm, submit } = useForm();
	return (
		<SafeAreaView style={styles.container}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<KeyboardAvoidingView
					style={styles.container}
					keyboardVerticalOffset={100}
					behavior={Platform.OS === "ios" ? "padding" : undefined}
				>
					<ScrollView showsVerticalScrollIndicator={false} style={styles.formBox}>
						<View style={styles.inputBox}>
							<Text style={styles.label}>New Password </Text>
							<Input
								type="password"
								placeholder="Enter password"
								value={formData.newPassword}
								onChange={(e) => updateForm("newPassword", e)}
								style={styles.input}
								isLoading={isLoading}
							/>
						</View>
						<View style={styles.inputBox}>
							<Text style={styles.label}>Confirm Password </Text>
							<Input
								type="password"
								placeholder="Enter Password"
								value={formData.confirmPassword}
								onChange={(e) => updateForm("confirmPassword", e)}
								style={styles.input}
								isLoading={isLoading}
							/>
						</View>
					</ScrollView>

					<View style={styles.actionBox}>
						<BaseButton
							title="Reset password"
							press={submit}
							width={"100%"}
							disabled={isLoading}
							showSpinner={isLoading}
						/>
					</View>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
}
