import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  NativeModules,
  Platform,
} from "react-native";
import React from "react";
const { StatusBarManager } = NativeModules;

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
        paddingBottom: 80,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar
        translucent
        barStyle={Platform.OS == "ios" ? "dark-content" : "default"}
      />
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
