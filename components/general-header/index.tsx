import { View, Text } from "react-native";
import { styles } from "./styles";
import Back from "./back";
import Info from "./info";
import * as React from "react";
import truncate from "@/lib/truncate";

type GeneralHeaderProps = {
  title?: string
  showBack?: boolean
  showInfo?: boolean
  infoBody?: string
  infoTitle?: string
  shadow?: boolean
  titleComponent?: React.ReactNode | (() => React.ReactNode)
  leftComponent?: React.ReactNode | (() => React.ReactNode)
  rightComponent?: React.ReactNode | (() => React.ReactNode)
}

export default React.memo(function GeneralHeader(props: GeneralHeaderProps) {
  const {
    showBack = true,
    showInfo = true,
    shadow = false,
    title = "General Header",
    titleComponent,
    infoBody,
    infoTitle,
    leftComponent,
    rightComponent
  } = props;
  return (
    <View style={[styles.container, shadow && styles.shadow]}>
      {
        leftComponent ? typeof leftComponent === "function" ? leftComponent() : leftComponent
          : <Back show={showBack} />
      }
      {
        titleComponent ? typeof titleComponent === "function" ? titleComponent() : titleComponent
          : <Text style={styles.title}>{truncate(title, 20)}</Text>
      }
      {
        rightComponent ? typeof rightComponent === "function" ? rightComponent() : rightComponent
          : <Info body={infoBody} show={showInfo} title={infoTitle} />
      }
    </View>
  )
});

