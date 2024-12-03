import { Text, View } from "@/components/theme";
import * as React from "react";
import Chart from "./chart";
import useMetrics from "./use-metrics";
import Render from "@/components/render";
import { AppButton } from "@/components/app-button";
import { styles } from "./styles";
import { globalStyles } from "@/styles/global.styles";
import Filter from "./filter";

export default React.memo(function Metrics() {
	const { isFetching, isError, error, data, month, setMonth } = useMetrics();
	const [open, setOpen] = React.useState(false);

	const toggle = () => setOpen((prev) => !prev);
	return (
		<View style={[open && styles.container]}>
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
			{open && (
				<View style={styles.container}>
					<Filter month={month} setMonth={setMonth} />
					<Render isLoading={isFetching} isError={isError} error={error}>
						{!data ? <Text> No Chart Data Recorded Yet</Text> : <Chart chartItems={data} />}
					</Render>
				</View>
			)}
		</View>
	);
});
