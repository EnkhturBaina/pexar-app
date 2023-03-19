import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  NativeModules,
} from "react-native";
import React, { useState } from "react";
import {
  BUTTON_BORDER_RADIUS,
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_DARK_LEVEL9,
} from "../constant";
const { StatusBarManager } = NativeModules;
import { Button, Switch } from "@rneui/themed";

const PrivacyScreen = () => {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: MAIN_BACKGROUND_COLOR,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        paddingBottom: 20,
      }}
    >
      <View>
        <View style={styles.eachSection}>
          <Text style={styles.textStyle}>Намайг санах</Text>
          <Switch
            value={checked}
            onValueChange={(value) => setChecked(value)}
            color={MAIN_COLOR}
          />
        </View>
        <View style={styles.eachSection}>
          <Text style={styles.textStyle}>Нүүр таних</Text>
          <Switch
            value={checked}
            onValueChange={(value) => setChecked(value)}
            color={MAIN_COLOR}
          />
        </View>
        <View style={styles.eachSection}>
          <Text style={styles.textStyle}>Хурууны хээ таних</Text>
          <Switch
            value={checked}
            onValueChange={(value) => setChecked(value)}
            color={MAIN_COLOR}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          containerStyle={styles.btnContainer}
          title={
            <Text
              style={{
                fontSize: 16,
                color: MAIN_COLOR,
                fontWeight: "bold",
              }}
            >
              ПИН код өөрчлөх
            </Text>
          }
          color="#fff"
          radius={BUTTON_BORDER_RADIUS}
          onPress={() => {}}
          titleStyle={{
            fontWeight: "bold",
          }}
          buttonStyle={{ height: 45 }}
        />
        <Button
          containerStyle={styles.btnContainer}
          title={
            <Text
              style={{
                fontSize: 16,
                color: MAIN_COLOR,
                fontWeight: "bold",
              }}
            >
              Нууц үг өөрчлөх
            </Text>
          }
          color="#fff"
          radius={BUTTON_BORDER_RADIUS}
          onPress={() => {}}
          titleStyle={{
            fontWeight: "bold",
          }}
          buttonStyle={{ height: 45 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  eachSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnContainer: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    width: "100%",
    borderColor: MAIN_COLOR,
    borderWidth: 2,
  },
  bottomContainer: {},
  textStyle: {
    color: MAIN_DARK_LEVEL9,
    fontSize: 16,
    fontWeight: "bold",
  },
});
