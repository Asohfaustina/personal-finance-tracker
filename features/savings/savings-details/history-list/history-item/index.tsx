import { Text, View } from "@/components/theme";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { amountSeparator } from "@/lib/amount-separator";
import { SavingsHistory } from "@/types/savings";
import { colors } from "@/constants";

export default function HistoryItem(props: SavingsHistory) {
	return (
		<View style={styles.container}>
			<View style={styles.titleBox}>
				<View style={styles.iconBox}>
					<FontAwesome5 name={"coins"} size={25} color={colors.primary[700]} />
				</View>
				<View>
					<Text style={styles.title}>Transfer</Text>

					<Text style={styles.date}>
						{new Date(props.createdAt).toLocaleTimeString("default", {
							timeStyle: "short",
						})}{" "}
						- {new Date(props.createdAt).toLocaleDateString("default", { dateStyle: "medium" })}
					</Text>
				</View>
			</View>

			<View style={styles.amountBox}>
				<Text style={styles.amount}>
					<Text style={styles.currency}>{props.currency.toUpperCase()} </Text>
					{"+"}
					{amountSeparator(props.amount)}
				</Text>
				<View style={styles.balanceBox}>
					<Text style={styles.balanceText}>
						{props.currency.toUpperCase()} {amountSeparator(props.amountAfterPayment)}
					</Text>
				</View>
			</View>
		</View>
	);
}
