import { Text, View } from "@/components/theme";
import { CardData } from ".";
import { styles } from "./styles";

export default function TodoCard(props: CardData) {
	if (!props.show) return;
	return (
		<View style={styles.todoBox}>
			{props.icon}
			<Text style={styles.todoTitle}>{props.title}</Text>

			<Text style={styles.todoNote}>{props.note}</Text>
		</View>
	);
}
