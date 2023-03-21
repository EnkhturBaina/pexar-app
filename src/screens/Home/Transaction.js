import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopFilter from "./TopFilter";

//Гүйлгээ
const Transaction = () => {
  return (
    <View>
      <TopFilter tabs={false} />
      <Text>Transaction</Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
