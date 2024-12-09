import GeneralHeader from "@/components/general-header";
import { SafeAreaView } from "@/components/theme";
import { info } from "@/constants";
import UpdateAvatar from "./update-avatar";
import { globalStyles } from "@/styles/global.styles";
import UserInfo from "./user-info";

export default function Profile() {
	return (
		<SafeAreaView style={globalStyles.container}>
			<GeneralHeader
				title="Profile"
				shadow
				showBack={false}
				showInfo
				infoTitle={info.screenInfo.profile.title}
				infoBody={info.screenInfo.profile.text}
			/>
			<UpdateAvatar />
			<UserInfo />
		</SafeAreaView>
	);
}
