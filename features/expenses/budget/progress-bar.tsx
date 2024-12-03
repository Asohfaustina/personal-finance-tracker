import * as React from "react";
import { Animated } from "react-native";
import { styles } from "./styles";

type ProgressBarProps = {
	currentBudget: number;
	currentExpense: number;
};
export default React.memo(function ProgressBar(props: ProgressBarProps) {
	const animatedProgress = React.useRef(new Animated.Value(0)).current; // Initialize Animated Value

	const progressPercentage = React.useMemo(() => {
		const { currentBudget, currentExpense } = props;

		if (currentBudget === 0) return 0;

		const percentage = (currentExpense / currentBudget) * 100;
		return Math.min(percentage, 100);
	}, [props]);

	React.useEffect(() => {
		Animated.timing(animatedProgress, {
			toValue: progressPercentage,
			duration: 500,
			useNativeDriver: false,
		}).start();
	}, [progressPercentage]);
	return (
		<Animated.View
			style={[
				styles.progressIndicator,
				{
					width: animatedProgress.interpolate({
						inputRange: [0, 100],
						outputRange: ["0%", "100%"],
					}),
				},
			]}
		/>
	);
});
