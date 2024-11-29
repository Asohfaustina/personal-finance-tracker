import { SafeAreaView, Text, View } from "@/components/theme";
import Input from "@/components/ui/input";
import { styles } from "./styles";
import { Link } from "expo-router";
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
							<Text style={styles.label}>Email </Text>
							<Input
								type="text"
								placeholder="Enter email"
								value={formData.email}
								onChange={(e) => updateForm("email", e)}
								style={styles.input}
								isLoading={isLoading}
							/>
						</View>
					</ScrollView>

					<View style={styles.actionBox}>
						<BaseButton
							title="Submit"
							press={submit}
							width={"100%"}
							disabled={isLoading}
							showSpinner={isLoading}
						/>

						<Link href={"/"} style={[styles.signInText]}>
							Sign In
						</Link>
					</View>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
}
