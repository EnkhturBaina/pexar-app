import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopFilter from "../TopFilter";
import ComingSoon from "../../../components/ComingSoon";

//Гүйлгээ
const Transaction = () => {
  return (
    <View style={{ flex: 1 }}>
      <TopFilter tabs={false} cats={false} />
      <ComingSoon />
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
