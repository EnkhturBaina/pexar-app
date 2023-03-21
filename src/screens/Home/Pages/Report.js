import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopFilter from "../TopFilter";

const Report = () => {
  return (
    <View>
      <TopFilter tabs={true} />
      <Text>Report</Text>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({});
