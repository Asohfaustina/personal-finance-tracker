import { View } from "@/components/theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { styles } from "./styles";
import { ExpenseType } from "@/types/expense";
import { colors } from "@/constants";

export default React.memo(function Icon({ type }: { type: ExpenseType }) {
	// food  => food
	const data: { [id in ExpenseType]: keyof typeof MaterialCommunityIcons.glyphMap } = {
		food: "food-outline",
		shopping: "shopping-outline",
		utilities: "office-building-cog",
		education: "school-outline",
		rent: "hand-coin-outline",
		others: "shuffle",
	};

	return (
		<View style={styles.iconBox}>
			<MaterialCommunityIcons name={data[type]} size={25} color={colors.primary[700]} />
		</View>
	);
});
