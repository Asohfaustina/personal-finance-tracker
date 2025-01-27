import { Loading } from "@/components/loading";
import { Security } from "@/components/security";
import store from "@/store";
import { useAppSelector } from "@/store/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { Redirect, Stack, useNavigation } from "expo-router";
import * as React from "react";

export const unstable_settings = {
	initialRouteName: "(tabs)",
};

const selectRoot = (state: ReturnType<typeof store.getState>) => state.root;
const selectUI = (state: ReturnType<typeof store.getState>) => state.ui;

export const selectAuthAndLoading = createSelector([selectRoot, selectUI], (root, ui) => ({
	isLoggedIn: root.isLoggedIn,
	isLoading: ui.isLoading,
}));
export default function MainLayout() {
	const { isLoggedIn, isLoading } = useAppSelector(selectAuthAndLoading);

	const navigation = useNavigation();
	React.useEffect(() => {
		navigation.addListener("beforeRemove", (event) => {
			if (event.data.action.type === "GO_BACK") {
				event.preventDefault();
			}
		});
	}, [navigation]);

	return (
		<Security>
			{!isLoggedIn ? (
				<Redirect href={"/welcome"} />
			) : (
				<Loading isLoading={isLoading}>
					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name="(tabs)" />
					</Stack>
				</Loading>
			)}
		</Security>
	);
}
