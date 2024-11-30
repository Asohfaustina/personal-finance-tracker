import type { ErrorBoundryProps, ErrorBoundryState } from "./types";
import { View, SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { variables } from "@/constants";
import { globalStyles } from "@/styles/global.styles";
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import BaseButton from "../ui/base-button";
import * as React from 'react';
import * as Constants from "expo-constants";

class ErrorBoundary extends React.Component<ErrorBoundryProps, ErrorBoundryState> {
  state = {
    error: {} as Error,
    errorInfo: {} as React.ErrorInfo,
    hasError: false
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const { server } = variables.ACTIVE;

    const device = {
      systemVersion: Constants.default.systemVersion,
      deviceName: Constants.default.deviceName,
      platform: Constants.default.platform,
      serviceInfo: Constants.default.expoRuntimeVersion
    }

    const a = server + '/errors/';

    const sendData = {
      source: "mobile",
      message: JSON.stringify(error),
      context: JSON.stringify(device),
      userId: this.props.user ?? null,
      isCritical: true
    }

    axios.post(a, sendData).catch(() => null);

    return this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    const handlePress = () => {
      this.setState({ hasError: false });
    }

    if (!this.state.hasError) return this.props.children;
    return (
      <SafeAreaView style={globalStyles.container}>
        <View style={styles.container}>
          <MaterialIcons name="bus-alert" size={104} color="black" />
          <Text style={styles.title}>Oops....</Text>
          <Text style={styles.title}>Something Went Wrong</Text>
          <Text style={styles.text}>
            {this.state.error && this.state.error.toString()}
          </Text>
          <BaseButton title="Refresh" press={handlePress} />
        </View>
      </SafeAreaView>
    )
  }
}

export default ErrorBoundary;

