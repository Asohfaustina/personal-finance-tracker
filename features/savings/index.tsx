import GeneralHeader from "@/components/general-header";
import { SafeAreaView } from "@/components/theme";
import { info } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import SavingsSlides from "./savings-slides";

export default function Savings() {
	return (
		<SafeAreaView style={globalStyles.container}>
			<GeneralHeader
				title="My Savings"
				shadow
				showBack={false}
				showInfo
				infoTitle={info.screenInfo.savings.title}
				infoBody={info.screenInfo.savings.text}
			/>
			<SavingsSlides scope="2" />
		</SafeAreaView>
	);
}
