import { Text, View } from "@/components/theme";
import { Expense } from "@/types/expense";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { amountSeparator } from "@/lib/amount-separator";

export default function (props: Expense) {
	// TODO: add amount separator fo all amount related values
	// use the amountSeparator utility function
	return (
		<View style={styles.container}>
			<View style={styles.titleBox}>
				<View style={styles.iconBox}>
					<Ionicons name="add-sharp" />
				</View>
				<View>
					<Text style={styles.title}>{props._id.slice(0, 15)}</Text>
					<Text style={styles.subTitle}>
						{props.currency.toUpperCase()} {amountSeparator(props.amount)}
					</Text>
				</View>
			</View>

			<View>
				<Text style={styles.date}>
					{new Date(props.createdAt).toLocaleDateString("default", { dateStyle: "medium" })}
				</Text>
				<View style={styles.categoryBox}>
					<Text style={styles.categoryText}>{props.category}</Text>
				</View>
			</View>
		</View>
	);
}
