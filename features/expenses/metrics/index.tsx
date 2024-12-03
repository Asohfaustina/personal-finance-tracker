import { Animated, Easing } from "react-native";
import * as React from "react";
import Chart from "./chart";
import useMetrics from "./use-metrics";
import Render from "@/components/render";
import { AppButton } from "@/components/app-button";
import { styles } from "./styles";
import { globalStyles } from "@/styles/global.styles";
import Filter from "./filter";
import { Text, View } from "@/components/theme";

export default React.memo(function Metrics() {
	const { isFetching, isError, error, data, month, setMonth } = useMetrics();
	const [open, setOpen] = React.useState(false);
	const animationValue = React.useRef(new Animated.Value(0)).current;

	const toggle = () => {
		setOpen((prev) => !prev);
		Animated.timing(animationValue, {
			toValue: open ? 0 : 1,
			duration: 200,
			easing: Easing.ease,
			useNativeDriver: false,
		}).start();
	};

	const animatedHeight = animationValue.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 300], // Adjust the height based on your chart size
	});

	const animatedOpacity = animationValue.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1],
	});

	return (
		<View >
			<View
				style={[
					styles.chartHeaderBox,
					open && { justifyContent: "space-between" },
					globalStyles.px,
				]}
			>
				{open && <Text style={styles.chartHeader}>Chart</Text>}
				<AppButton press={toggle}>
					<Text type="link"> {open ? "Hide" : "Show"} Chart</Text>
				</AppButton>
			</View>
			<Animated.View
				style={{
					height: animatedHeight,
					opacity: animatedOpacity,
					overflow: "hidden",
				}}
			>
				<Filter month={month} setMonth={setMonth} />
				<Render isLoading={isFetching} isError={isError} error={error}>
					{!data ? <Text> No Chart Data Recorded Yet</Text> : <Chart chartItems={data} />}
				</Render>
			</Animated.View>
		</View>
	);
});
