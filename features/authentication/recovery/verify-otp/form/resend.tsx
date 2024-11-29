import { AppButton } from "@/components/app-button";
import { Text } from "@/components/theme";
import { colors } from "@/constants";
import useCountdown from "@/hooks/use-count-down";
import * as React from "react";
import { StyleSheet } from "react-native";

type ResendProps = {
	resend: () => void;
};
export default React.memo(function Resend(props: ResendProps) {
	const init = 60;
	const [counter, reset] = useCountdown(init);

	const press = () => {
		props.resend && props.resend();
		reset();
	};

	if (counter === 0)
		return (
			<AppButton press={press} style={styles.resendBox}>
				<Text style={styles.resendText}>Resend</Text>
			</AppButton>
		);
	return <Text>Resend {counter} </Text>;
});

const styles = StyleSheet.create({
	resendBox: {
		backgroundColor: "none",
	},
	resendText: {
		color: colors.primary[400],
	},
});
