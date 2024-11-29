import { FontAwesome5, FontAwesome6, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export const unstable_settings = {
	initialRouteName: "(home)",
};

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#FFCC89",
				tabBarInactiveTintColor: "rgba(255, 255,255, 0.7)",
				headerShown: false,
				tabBarStyle: {
					backgroundColor: "#10231C",
					paddingHorizontal: 50,
					paddingTop: 10,
				},
			}}
		>
			<Tabs.Screen
				name="(home)"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <Octicons name="home" size={20} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="trips"
				options={{
					title: "Trips",
					tabBarIcon: ({ color }) => <FontAwesome5 name="route" size={24} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => <FontAwesome6 name="user-circle" color={color} size={24} />,
				}}
			/>
		</Tabs>
	);
}
