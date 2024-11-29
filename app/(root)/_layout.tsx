import { Stack } from "expo-router";

export const unstable_settings = {
	initialRouteName: "sign-up",
};

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				gestureEnabled: false,
			}}
		>
			<Stack.Screen name="sign-up" />
			<Stack.Screen name="(recovery)" />
			<Stack.Screen name="verify-email" />
			<Stack.Screen name="(main)" />
		</Stack>
	);
}
