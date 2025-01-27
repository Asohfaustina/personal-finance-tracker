import * as React from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import { ExpenseTypesList } from "@/types/expense";
import capitalize from "@/lib/capitalize";
import { colors } from "@/constants";

type FilterProps = {
	setCategory: (value: string) => void;
	category: string;
};
export default React.memo(function Category(props: FilterProps) {
	const change = (value: string) => {
		props.setCategory(value);
	};

	return (
		<Picker
			mode="dialog"
			selectedValue={props.category}
			onValueChange={change}
			style={styles.dropdown}
		>
			{ExpenseTypesList.map((item) => (
				<Picker.Item label={capitalize(item)} value={item} key={item} />
			))}
		</Picker>
	);
});

const styles = StyleSheet.create({
	dropdown: {
		width: "100%",
		borderWidth: 2,
		// alignSelf: "flex-end",
		borderColor: colors.primary[700],
	},
});
