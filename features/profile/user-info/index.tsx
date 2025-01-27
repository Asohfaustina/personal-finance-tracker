import { View } from "@/components/theme";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";
import * as React from "react";
import InfoItem from "./info-item";
import EditProfile from "./edit-profile";
import ChangePassword from "./change-password";
import { styles } from "./style";
import { colors } from "@/constants";
import { useAppSelector } from "@/store/hooks";
import { router } from "expo-router";
import Logout from "./logout-user/logout";
import LogoutUser from "./logout-user";

export type UserInfo = {
	id: number;
	title: string;
	icon: typeof Feather.prototype;
	actionText: string;
	press: () => void;
	disabled?: boolean;
};

type ActionTypes = "edit" | "password" | "logout" | "";

export default function UserInfo() {
	const { user } = useAppSelector((state) => state.account);
	const [actionTypes, setActionType] = React.useState<ActionTypes>("");

	const close = () => {
		setActionType("");
	};

	const data: UserInfo[] = [
		{
			id: 1,
			title: "Edit Profile",
			icon: <Feather name="edit" size={25} color={colors.primary[600]} />,
			actionText: "Edit",
			press: () => setActionType("edit"),
		},
		{
			id: 2,
			title: "Verify Email",
			icon: <Feather name="check-circle" size={25} color={colors.primary[600]} />,
			actionText: user.isEmailVerified ? "Verified" : "Verify",
			press: () => router.navigate(`/(root)/verify-email?email=${user.email}`),
			disabled: user.isEmailVerified,
		},
		{
			id: 3,
			title: "Change Password",
			icon: <Feather name="shield" size={25} color={colors.primary[600]} />,
			actionText: "Change",
			press: () => setActionType("password"),
		},

		{
			id: 4,
			title: "Log out",
			icon: <Feather name="log-out" size={25} color={colors.warning[600]} />,
			actionText: "",
			press: () => setActionType("logout"),
		},
	];
	return (
		<React.Fragment>
			<View style={styles.container}>
				<FlatList
					style={styles.listBox}
					renderItem={({ index, item }) =>
						index === 3 ? <Logout key={index} {...item} /> : <InfoItem key={index} {...item} />
					}
					showsVerticalScrollIndicator={false}
					data={data}
				/>
			</View>
			<EditProfile open={actionTypes === "edit"} close={close} />
			<ChangePassword open={actionTypes === "password"} close={close} />
			<LogoutUser open={actionTypes === "logout"} close={close} />
		</React.Fragment>
	);
}
