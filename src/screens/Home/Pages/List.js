import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopFilter from "../TopFilter";

const List = () => {
  return (
    <View>
      <TopFilter tabs={false} />
      <Text>List</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
