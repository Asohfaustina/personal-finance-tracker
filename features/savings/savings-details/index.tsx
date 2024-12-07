import GeneralHeader from "@/components/general-header";
import { SafeAreaView } from "@/components/theme";
import { info } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import SavingsInfo from "./savings-info";
import HistoryList from "./history-list";
import AddSavings from "./savings-info/add-savings";

export default function SavingsDetails() {
	return (
		<SafeAreaView style={globalStyles.container}>
			<GeneralHeader
				title="Savings Details"
				shadow
				showBack={true}
				showInfo
				infoTitle={info.screenInfo.savingsDetails.title}
				infoBody={info.screenInfo.savingsDetails.text}
			/>
			<SavingsInfo />
			<HistoryList />
			<AddSavings />
		</SafeAreaView>
	);
}
