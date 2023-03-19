import { Icon } from "@rneui/base";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGHT,
  INPUT_BG_COLOR,
  MAIN_COLOR_GRAY,
  MAIN_DARK_LEVEL9,
} from "../constant";

const styles = StyleSheet.create({
  container: {},
  containerTouchable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 56,
    borderRadius: 8,
    paddingLeft: 15,
    paddingRight: 10,
  },
  textInput: {
    fontFamily: FONT_FAMILY_LIGHT,
    fontSize: 16,
    textAlignVertical: "center",
    width: "80%",
  },
});

const CustomLookup = ({
  value,
  press,
  disabled,
  placeholder,
  iconName,
  iconType,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={[
        styles.containerTouchable,
        { backgroundColor: disabled ? MAIN_COLOR_GRAY : INPUT_BG_COLOR },
      ]}
      onPress={!disabled ? press : null}
    >
      <Icon
        name={iconName}
        type={iconType}
        size={20}
        color={MAIN_DARK_LEVEL9}
        style={styles.inputIcon}
      />
      <Text style={styles.textInput} numberOfLines={1}>
        {value ? value : placeholder}
      </Text>
      <Icon name="keyboard-arrow-right" type="material-icons" size={25} />
    </TouchableOpacity>
  </View>
);

export default CustomLookup;
