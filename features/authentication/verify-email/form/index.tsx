import { SafeAreaView, Text, View } from "@/components/theme";
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
import OtpInput from "@/components/otp-input";
import Resend from "./resend";

export default function Form() {
	const { isLoading, formData, isError, errMsg, resend, updateForm, submit } = useForm();
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
							<Text style={styles.label}>OTP </Text>
							<OtpInput
								isError={isError}
								errMsg={errMsg}
								isLoading={isLoading}
								value={formData.otp}
								valueLength={6}
								setValue={(e) => updateForm("otp", e)}
							/>
						</View>
					</ScrollView>

					<View style={styles.actionBox}>
						{!isLoading && <Resend resend={resend} />}
						<BaseButton
							title="Submit"
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
