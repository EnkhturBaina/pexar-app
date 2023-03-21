import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  BUTTON_BORDER_RADIUS,
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../../constant";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Icon, Button } from "@rneui/base";

const ConfirmOTPScreen = (props) => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [propss, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    console.log("value", value);
  }, [value]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: MAIN_BACKGROUND_COLOR,
        justifyContent: "space-evenly",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          marginTop: 10,
          textAlign: "center",
          width: "100%",
        }}
      >
        Бид таны и-мэйл хаяг руу баталгаажуулах код илгээлээ.
      </Text>
      <CodeField
        ref={ref}
        {...propss}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <Text style={{ fontWeight: "bold", textAlign: "center" }}>
        Дахин илгээх үү? <Text style={{ color: "red" }}>03:00</Text>
      </Text>
      <View
        style={{
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Button
          title="Баталгаажуулах"
          color={MAIN_COLOR}
          radius={BUTTON_BORDER_RADIUS}
          onPress={() => {
            // if (value?.length == 4) {
            props.navigation.navigate("NewPasswordScreen");
            // }
          }}
          titleStyle={{
            fontWeight: "bold",
          }}
          buttonStyle={{ height: 45, marginVertical: 10 }}
        />
      </View>
    </View>
  );
};

export default ConfirmOTPScreen;

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginTop: 20,
    width: 230,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: MAIN_COLOR_GRAY,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  cellText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  focusCell: {
    borderColor: MAIN_COLOR,
    borderWidth: 2,
  },
});
