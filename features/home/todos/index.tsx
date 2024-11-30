import { Text, View } from "@/components/theme";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { FlatList } from "react-native";
import TodoCard from "./todo-card";
import { useAppSelector } from "@/store/hooks";
import { styles } from "../styles";

export type CardData = {
	id: number;
	title: string;
	note: string;
	icon: any;
	show: boolean;
};
export default React.memo(function Todos() {
	const { hasSetup } = useAppSelector((state) => state.root);

	if (hasSetup) return;

	// TODO: add a link to the setup and change the icons to a befitting one
	const data: CardData[] = [
		{
			id: 1,
			title: "Upload Photo",
			note: "upload your photo",
			icon: <AntDesign name="user" size={20} />,
			show: true,
		},
		{
			id: 2,
			title: "Create Savings",
			note: "get started with your savings.",
			icon: <AntDesign name="user" size={20} />,
			show: true,
		},
		{
			id: 3,
			title: "Set Budget",
			note: "set your discipline by setting a budget.",
			icon: <AntDesign name="user" size={20} />,
			show: true,
		},
	];

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.sectionHeaderBox}>
				<Text style={styles.sectionHeader}>Todos</Text>
			</View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={({ index, item }) => <TodoCard key={index} {...item} />}
				ListEmptyComponent={() => {
					if (data.every((item) => !item.show)) return null;
				}}
			/>
		</View>
	);
});
