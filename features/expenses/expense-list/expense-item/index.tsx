import { Text, View } from "@/components/theme";
import { Expense } from "@/types/expense";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { amountSeparator } from "@/lib/amount-separator";
import { Link } from "expo-router";
import Icon from "./icon";

export default function ExpenseItem (props: Expense) {
	// TODO: add amount separator fo all amount related values
	// use the amountSeparator utility function
	return (
		<Link href={{ pathname: "/(root)/(main)/(tabs)/expenses", params: { id: props._id } }}>
			<View style={styles.container}>
				<View style={styles.titleBox}>
					<Icon  type={props.category} />
					<View>
						<Text style={styles.title}>{props.category}</Text>

						<Text style={styles.date}>
							{new Date(props.createdAt).toLocaleTimeString("default", {
								timeStyle: "short",
							})}{" "}
							- {new Date(props.createdAt).toLocaleDateString("default", { dateStyle: "medium" })}
						</Text>
						{/* <Text style={styles.subTitle}>
							{props.currency.toUpperCase()} {amountSeparator(props.amount)}
						</Text> */}
					</View>
				</View>

				<View>
					<Text style={styles.amount}>
						<Text style={styles.currency}>{props.currency.toUpperCase()} </Text>
						{amountSeparator(props.amount)}
					</Text>
					{/* <View style={styles.categoryBox}>
						<Text style={styles.categoryText}>{props.category}</Text>
					</View> */}
				</View>
			</View>
		</Link>
	);
}
