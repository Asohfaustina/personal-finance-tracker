import { SafeAreaView, Text, View } from "./theme";
import { StyleSheet } from "react-native";
import { layout } from "@/constants";
import { AppButton } from "./app-button";
import { Spacer } from "./spacer";

type ErrorScreenProps = {
  error?: Error;
  retry?: Function;
};
export function ErrorScreen(props: ErrorScreenProps) {
  const press = () => {
    if (props.retry) props.retry();
  };
  return (
		<SafeAreaView style={styles.container}>
			<View style={styles.box}>
				<Text>Error Screen</Text>
				<Text style={styles.text}>Error message: {props.error?.message}</Text>
				<Spacer height={20} />
				<AppButton press={press}>
					<Text>Retry?</Text>
				</AppButton>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: layout.padding.xs,
  },
  text: {
    textAlign: "center",
  },
});
