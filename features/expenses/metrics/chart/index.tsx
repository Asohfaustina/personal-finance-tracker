import { colors } from "@/constants";
import { amountSeparator } from "@/lib/amount-separator";
import capitalize from "@/lib/capitalize";
import { ExpenseType } from "@/types/expense";
import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";

type ChartData = {
	chartItems: { [id in ExpenseType]: number };
};

const width = Math.floor(Dimensions.get("screen").width);

export default React.memo(function Chart(props: ChartData) {
	const data = React.useMemo(() => {
		return Object.entries(props.chartItems).map(([key, value]) => ({
			x: capitalize(key),
			y: value,
		}));
	}, [props.chartItems]);

	const colorScale = [
		"#154D92", // Rent (primary.600)
		"#83C785", // Food (success.500)
		"#B59FF0", // Shopping (secondary.500)
		"#5B9EFF", // Education (primary.400)
		"#F87B72", // Utilities (warning.500)
		"#8F90A6", // Others (black.500)
	];
	// Dynamically compute tick values based on the maximum value in the data
	const maxValue = Math.max(...data.map((d) => d.y));
	const stepSize = Math.pow(10, Math.floor(Math.log10(maxValue)) - 1); // Dynamically calculate step size
	const tickValues = Array.from(
		{ length: Math.ceil(maxValue / stepSize) + 1 },
		(_, i) => i * stepSize
	);

	return (
		<View style={styles.container}>
			<VictoryChart
				theme={VictoryTheme.grayscale}
				domainPadding={{ x: 20, y: 20 }}
				height={200}
				padding={{ top: 10, right: 20, bottom: 30, left: 60 }}
				width={width}
			>
				<VictoryAxis
					style={{
						axis: { stroke: "#000" },
						tickLabels: { fontSize: 10, fill: "#000" },
						grid: { stroke: "#D8D9E4", strokeDasharray: "4" }, // Changes grid line color and style
					}}
				/>
				<VictoryAxis
					dependentAxis
					tickFormat={(t) => amountSeparator(t.toString())}
					style={{
						axis: { stroke: "#000" },
						tickLabels: { fontSize: 10, fill: "#000" },
						grid: { stroke: "#D8D9E4", strokeDasharray: "4" }, // Changes grid line color and style
					}}
				/>
				<VictoryBar
					data={data}
					x="x"
					y="y"
					style={{
						data: {
							fill: ({ index }) => colorScale[(index as number) % colorScale.length],
						},
					}}
					animate
					barWidth={20}
				/>
			</VictoryChart>
		</View>
	);
});

const styles = StyleSheet.create({
	container: { backgroundColor: colors.secondary[200] },
});
