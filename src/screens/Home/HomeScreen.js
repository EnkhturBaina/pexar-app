import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  NativeModules,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { MAIN_COLOR, MAIN_COLOR_GRAY_LEVEL4 } from "../../constant";
import { Provider } from "react-native-paper";
import { Icon } from "@rneui/base";
import Inventory from "./Pages/Inventory";
import List from "./Pages/List";
import Plan from "./Pages/Plan";
import Report from "./Pages/Report";
import Sales from "./Pages/Sales";
import Transaction from "./Pages/Transaction";
import MainContext from "../../contexts/MainContext";
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const HomeScreen = () => {
  const state = useContext(MainContext);
  const [cardMenu, setCardMenu] = useState(1);
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
          paddingBottom: 80,
          backgroundColor: "#fff",
        }}
      >
        <MyStatusBar backgroundColor={MAIN_COLOR} barStyle="light-content" />
        {pages_comps.map((el, index) => {
          if (el.key === state.selectedReport.key) {
            return el.value;
          }
        })}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            style={[
              styles.eachCardMenu,
              cardMenu == 1
                ? {
                    backgroundColor: MAIN_COLOR,
                    borderRadius: 8,
                  }
                : null,
            ]}
            onPress={() => setCardMenu(1)}
          >
            <Icon name="graph-pie" type="foundation" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.eachCardMenu,
              cardMenu == 2
                ? {
                    backgroundColor: MAIN_COLOR,
                    borderRadius: 8,
                  }
                : null,
            ]}
            onPress={() => setCardMenu(2)}
          >
            <Icon name="bar-chart" type="ion-icon" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.eachCardMenu,
              cardMenu == 3
                ? {
                    backgroundColor: MAIN_COLOR,
                    borderRadius: 8,
                  }
                : null,
            ]}
            onPress={() => setCardMenu(3)}
          >
            <Icon name="document-text" type="ionicon" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </Provider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  eachCardMenu: {
    width: "30%",
    borderRadius: 6,
    height: 40,
    justifyContent: "center",
    backgroundColor: MAIN_COLOR_GRAY_LEVEL4,
  },
});
