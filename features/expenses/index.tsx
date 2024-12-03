import GeneralHeader from "@/components/general-header";
import { SafeAreaView, Text, View } from "@/components/theme";
import { info } from "@/constants";
import ExpenseList from "./expense-list";
import { globalStyles } from "@/styles/global.styles";
import Metrics from "./metrics";
import Budget from "./budget";

export default function Expenses() {
	return (
		<SafeAreaView style={[globalStyles.container, { gap: 10 }]}>
			<GeneralHeader
				title="Expenses"
				shadow
				showBack={false}
				showInfo
				infoTitle={info.screenInfo.expenses.title}
				infoBody={info.screenInfo.expenses.text}
			/>
			<Budget />

			<Metrics />
			<View style={globalStyles.px}>
				<Text style={globalStyles.headers}>Expenses</Text>
			</View>
			<ExpenseList />
		</SafeAreaView>
	);
}
