import { StyleSheet, View, SafeAreaView, Platform } from "react-native";
import React, { useState } from "react";
import {
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_DARK_LEVEL9,
} from "../constant";
import { CheckBox } from "@rneui/themed";

const LanguageScreen = () => {
  const [selectedIndex, setIndex] = useState(0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: MAIN_BACKGROUND_COLOR,
        paddingHorizontal: 20,
        justifyContent: "space-between",
      }}
    >
      <View>
        <CheckBox
          checked={selectedIndex === 0}
          onPress={() => setIndex(0)}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          title="Монгол хэл"
          iconRight
          wrapperStyle={{ justifyContent: "space-between" }}
          containerStyle={{ backgroundColor: MAIN_BACKGROUND_COLOR }}
          checkedColor={MAIN_COLOR}
        />
        <CheckBox
          checked={selectedIndex === 1}
          onPress={() => setIndex(1)}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          title="English"
          iconRight
          wrapperStyle={{ justifyContent: "space-between" }}
          containerStyle={{ backgroundColor: MAIN_BACKGROUND_COLOR }}
          checkedColor={MAIN_COLOR}
        />
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  eachSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Platform.OS == "ios" ? 10 : 0,
  },
  btnContainer: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    width: "100%",
    borderColor: MAIN_COLOR,
    borderWidth: 2,
  },
  bottomContainer: {
    paddingBottom: 20,
  },
  textStyle: {
    color: MAIN_DARK_LEVEL9,
    fontSize: 16,
    fontWeight: "bold",
  },
});
