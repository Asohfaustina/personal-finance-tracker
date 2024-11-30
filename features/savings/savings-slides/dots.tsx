import { View } from "@/components/theme";
import * as React from "react";
import { styles } from "./styles";

export default React.memo(function Dots({ active, count }: { active: number; count: number }) {
  
	return (
		<View style={[styles.dotsBox,]}>
			{Array.from(new Array(count), (_, idx) => (
				<View key={idx} style={[styles.dots, idx === active && styles.activeDot]} />
			))}
		</View>
	);
});
