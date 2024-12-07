import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Animated } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "@/constants";

type ProgressProps = {
	amount: number;
	targetAmount: number;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default React.memo(function Progress(props: ProgressProps) {
	const radius = 30;
	const strokeWidth = 8;
	const circumference = 2 * Math.PI * radius;

	const completed = useMemo(() => {
		return props.amount === props.targetAmount;
	}, [props]);

	const progressPercentage = React.useMemo(() => {
		const { targetAmount, amount } = props;
		if (targetAmount === 0) return 0;

		const percentage = (amount / targetAmount) * 100;
		return Math.min(percentage, 100);
	}, [props]);

	const animatedProgress = React.useRef(new Animated.Value(0)).current;

	React.useEffect(() => {
		Animated.timing(animatedProgress, {
			toValue: progressPercentage,
			duration: 500,
			useNativeDriver: false,
		}).start();
	}, [progressPercentage]);

	const strokeDashoffset = animatedProgress.interpolate({
		inputRange: [0, 100],
		outputRange: [circumference, 0],
	});

	return (
		<View style={styles.container}>
			<Svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth}>
				<Circle
					stroke={colors.black[200]}
					fill="none"
					cx={radius + strokeWidth / 2}
					cy={radius + strokeWidth / 2}
					r={radius}
					strokeWidth={strokeWidth}
				/>

				<AnimatedCircle
					stroke={colors.primary[700]}
					fill="none"
					cx={radius + strokeWidth / 2}
					cy={radius + strokeWidth / 2}
					r={radius}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
				/>
			</Svg>

			<View style={styles.iconContainer}>
				<FontAwesome5 name={completed ? "check" : "coins"} size={24} color={colors.primary[700]} />
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		width: 80,
		height: 80,
	},
	iconContainer: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
	},
});
