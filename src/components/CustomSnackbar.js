import { StyleSheet, Text } from "react-native";
import React from "react";
import { Snackbar } from "react-native-paper";
import { MAIN_COLOR } from "../constant";

export default function ({ visible, dismiss, text, topPos }) {
  return (
    <Snackbar
      visible={visible}
      onDismiss={dismiss}
      wrapperStyle={{ top: topPos ?? 0, zIndex: 9999 }}
      duration={2000}
      style={{ backgroundColor: MAIN_COLOR }}
      action={{
        label: "Хаах",
        onPress: dismiss,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        {text}
      </Text>
    </Snackbar>
  );
}

const styles = StyleSheet.create({});
