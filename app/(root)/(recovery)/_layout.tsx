import { Stack } from "expo-router";

export const unstable_settings = {
	initialRouteName: "recovery",
};

export default function RecoveryLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				gestureEnabled: false,
			}}
		>
			<Stack.Screen name="recovery"  />
			<Stack.Screen name="verify" />
			<Stack.Screen name="reset" />
			<Stack.Screen name="reset-success" />
		</Stack>
	);
}
