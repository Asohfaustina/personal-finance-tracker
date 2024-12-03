import * as React from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

type FilterProps = {
	setMonth: (value: string) => void;
	month: string;
};
export default React.memo(function Filter(props: FilterProps) {
	const currentYear = new Date().getFullYear();
	const months = Array.from({ length: 12 }, (_, idx) => {
		const date = new Date(currentYear, idx, 1);
		return {
			label: date.toLocaleString("default", { month: "long" }),
			value: date.toISOString(),
		};
	});

	const change = (value: string) => {
		props.setMonth(value);
	};

	return (
		<Picker
			mode="dropdown"
			selectedValue={props.month}
			onValueChange={change}
			style={styles.dropdown}
		>
			{months.map((month) => (
				<Picker.Item label={month.label} value={month.value} key={month.value} />
			))}
		</Picker>
	);
});

const styles = StyleSheet.create({
	dropdown: {
		width: 170,
		alignSelf: "flex-end",
	},
});
