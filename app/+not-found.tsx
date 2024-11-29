import { Link,  Stack, usePathname,  } from "expo-router";
import { StyleSheet } from "react-native";

import { Text } from "@/components/theme";
import { View } from "@/components/theme";

export default function NotFoundScreen() {
	const router = usePathname();
	console.log(router);
	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<View style={styles.container}>
				<Text type="title">This screen doesn't exist.</Text>
				<Link href="/" style={styles.link}>
					<Text type="link">Go to home screen!</Text>
				</Link>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
});