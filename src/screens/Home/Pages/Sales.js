import { StyleSheet, View } from "react-native";
import React from "react";
import TopFilter from "../TopFilter";
import ComingSoon from "../../../components/ComingSoon";

const Sales = () => {
  return (
    <View style={{ flex: 1 }}>
      <TopFilter tabs={false} cats={false} />
      <ComingSoon />
    </View>
  );
};

export default Sales;

const styles = StyleSheet.create({});
