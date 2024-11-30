import { SafeAreaView, Text, View } from "@/components/theme";
import { globalStyles } from "@/styles/global.styles";
import * as React from "react";
import { styles } from "./styles";
import { useAppSelector } from "@/store/hooks";
import SavingsSlides from "../savings/savings-slides";
import { colors } from "@/constants";
import ExpenseList from "../expenses/expense-list";
import { Link } from "expo-router";
import Todos from "./todos";

export default function Home() {
	const { user } = useAppSelector((state) => state.account);
	return (
		<SafeAreaView style={globalStyles.container}>
			<View style={{ backgroundColor: colors.secondary[200] }}>
				<View style={styles.container}>
					<Text style={styles.welcomeText}>
						Welcome back <Text style={[styles.welcomeText, styles.name]}> {user.name}</Text>
					</Text>
					<Text style={styles.subText}>What will you be doing today</Text>
				</View>
				<SavingsSlides />
			</View>

			<Todos />

			<View style={styles.sectionHeaderBox}>
				<Text style={styles.sectionHeader}>Recent Expenses</Text>
				<Link href={"/(root)/(main)/(tabs)/expenses"} style={styles.subText}>
					View more{" "}
				</Link>
			</View>
			<ExpenseList />
		</SafeAreaView>
	);
}
