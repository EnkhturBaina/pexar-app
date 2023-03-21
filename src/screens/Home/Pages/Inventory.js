import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopFilter from "../TopFilter";

const Inventory = () => {
  return (
    <View>
      <TopFilter tabs={false} cats={false} />
      <Text>Inventory</Text>
    </View>
  );
};

export default Inventory;

const styles = StyleSheet.create({});
