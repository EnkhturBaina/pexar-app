import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import coming_soon from "../../assets/coming_soon.png";
import { MAIN_COLOR } from "../constant";

const ComingSoon = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={coming_soon}
        style={{ width: "80%", height: 300 }}
        resizeMode="contain"
      />
      <Text style={{ color: MAIN_COLOR, fontSize: 18, marginVertical: 20 }}>
        Тун удахгүй
      </Text>
    </View>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({});
