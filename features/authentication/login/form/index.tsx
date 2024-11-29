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

export default function () {
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

						<View style={styles.inputBox}>
							<Text style={styles.label}>Password </Text>
							<Input
								type="password"
								placeholder="Enter Password"
								value={formData.password}
								onChange={(e) => updateForm("password", e)}
								style={styles.input}
								isLoading={isLoading}
							/>
						</View>

						<Link href={"/(root)/(recovery)/recovery"} style={styles.recoveryText}>
							Recover Password?
						</Link>
					</ScrollView>

					<View style={styles.actionBox}>
						<BaseButton
							title="Sign In"
							press={submit}
							width={"100%"}
							disabled={isLoading}
							showSpinner={isLoading}
						/>

						<Text style={[styles.signUpText]}>
							{" "}
							Don't have an account? {""}
							<Link href={"/(root)/sign-up"} style={[styles.recoveryText]}>
								Sign Up
							</Link>
						</Text>
					</View>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
}
