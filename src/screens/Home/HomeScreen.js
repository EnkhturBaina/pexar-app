import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import React, { useContext } from "react";
import { MAIN_BACKGROUND_COLOR, MAIN_COLOR } from "../../constant";
import { Provider } from "react-native-paper";
import Inventory from "./Pages/Inventory";
import List from "./Pages/List";
import Plan from "./Pages/Plan";
import Report from "./Pages/Report";
import Sales from "./Pages/Sales";
import Transaction from "./Pages/Transaction";
import MainContext from "../../contexts/MainContext";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const HomeScreen = () => {
  const state = useContext(MainContext);
  const pages_comps = [
    { key: "Inventory", value: <Inventory /> },
    { key: "List", value: <List /> },
    { key: "Plan", value: <Plan /> },
    { key: "Report", value: <Report /> },
    { key: "Sales", value: <Sales /> },
    { key: "Transaction", value: <Transaction /> },
  ];

  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );

  return (
    <Provider>
      <View
        style={{
          flex: 1,
          // paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
          backgroundColor: MAIN_BACKGROUND_COLOR,
        }}
      >
        <MyStatusBar backgroundColor={MAIN_COLOR} barStyle="light-content" />
        {pages_comps.map((el, index) => {
          if (el.key === state.selectedReport.key) {
            return (
              <View key={index} style={{ flex: 1 }}>
                {el.value}
              </View>
            );
          }
        })}
      </View>
    </Provider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
