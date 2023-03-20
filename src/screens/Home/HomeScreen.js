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
import React, { useState } from "react";
import { MAIN_COLOR, MAIN_COLOR_GRAY_LEVEL4 } from "../../constant";
import TopFilter from "./TopFilter";
import { Provider } from "react-native-paper";
import { Icon } from "@rneui/base";
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const HomeScreen = () => {
  const [cardMenu, setCardMenu] = useState(1);
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
          paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
          paddingBottom: 80,
          backgroundColor: "#fff",
        }}
      >
        <MyStatusBar backgroundColor={MAIN_COLOR} barStyle="light-content" />
        <TopFilter />
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
