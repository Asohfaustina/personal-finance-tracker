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
				tabBarActiveTintColor: "#5B9EFF",
				tabBarInactiveTintColor: "rgba(255, 255,255, 0.7)",
				headerShown: false,
				tabBarStyle: {
					height: 70,
					borderTopRightRadius: 10,
					borderTopLeftRadius: 10,
					backgroundColor: "#081F3D",
					paddingTop: 5,
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
				name="expenses"
				options={{
					title: "Expenses",
					tabBarIcon: ({ color }) => <FontAwesome5 name="chart-pie" size={24} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="savings"
				options={{
					title: "Savings",
					tabBarIcon: ({ color }) => <FontAwesome5 name="coins" size={24} color={color} />,
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
