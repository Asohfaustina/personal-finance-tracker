import * as React from "react";
import useOTPInput from "./use-otp-input";
import { styles } from "./styles";
import { TextInput, View, Dimensions, Text } from "react-native";

const width = Dimensions.get("screen").width;

type OTPInputProps = {
	value: string;
	setValue: (val: string) => void;
	valueLength: number;
	isError?: boolean;
	isLoading?: boolean;
	errMsg?: string;
};

export default React.memo(function OTPInput(props: OTPInputProps) {
	const { isError, setValue, value, valueLength, isLoading } = props;
	const { inputOnFocus, inputOnKeyPress, onInputChange, valueItems, boxes } = useOTPInput(
		value,
		valueLength,
		setValue
	);

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				{valueItems.map((digit, idx) => (
					<TextInput
						key={idx}
						style={[
							styles.otpBox,
							isError && styles.error,
							{ fontSize: (width / valueLength) * 0.4 },
						]}
						maxLength={valueLength}
						value={digit}
						ref={(e) => (boxes[idx] = e!)}
						onChangeText={(e) => onInputChange(e, idx)}
						autoComplete="one-time-code"
						keyboardType="numeric"
						editable={isLoading ? false : true}
						onFocus={(e) => inputOnFocus(e, idx)}
						onKeyPress={(e) => inputOnKeyPress(e, idx)}
					/>
				))}
			</View>
			{isError && (
				<Text style={styles.errMsg}>{props.errMsg ?? "The passcode you entered is incorrect"}</Text>
			)}
		</View>
	);
});
