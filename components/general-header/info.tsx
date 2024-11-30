import { Pressable, View, Modal } from "react-native";
import { Feather } from "@expo/vector-icons";
import { globalStyles } from "@/styles/global.styles";
import { styles } from "./styles";
import * as React from "react";
import ModalContainer from "@/components/modal-container";

type InfoProps = {
	show?: boolean;
	body?: string;
	title?: string;
};

export default React.memo(function Info(props: InfoProps) {
	const {
		body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minus dolor adipisci reiciendis ipsum.",
		show = true,
		title = "Information",
	} = props;
	const [open, setOpen] = React.useState(false);
	const pressed = () => {
		setOpen(true);
	};

	if (!show) return <View style={styles.hide} />;
	return (
		<React.Fragment>
			<Pressable onPress={pressed}>
				{({ pressed }) => (
					<View style={[styles.iconBox, pressed && globalStyles.pressed]}>
						<Feather name="alert-circle" size={24} color={"black"} />
					</View>
				)}
			</Pressable>
			<Modal visible={open} transparent={true}>
				<ModalContainer
					body={body}
					closeModal={() => setOpen(false)}
					closeTitle="Close"
					proceedTitle="Continue"
					title={title}
					proceedTitleType="default"
				/>
			</Modal>
		</React.Fragment>
	);
});
