import { Dimensions, Text, StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import TopFilter from "../TopFilter";
// import { PieChart } from "react-native-chart-kit";

import { PieChart } from "react-native-svg-charts";
import { MAIN_BACKGROUND_COLOR, MAIN_COLOR_GRAY } from "../../../constant";
const Report = () => {
  const data = [
    {
      key: 1,
      amount: 50,
      svg: { fill: "#007B42" },
    },
    {
      key: 2,
      amount: 50,
      svg: { fill: "#22465E" },
    },
    {
      key: 3,
      amount: 40,
      svg: { fill: "#86909C" },
    },
    {
      key: 4,
      amount: 20,
      svg: { fill: "#EC7A09" },
    },
    {
      key: 5,
      amount: 35,
      svg: { fill: "#E34935" },
    },
  ];
  const data1 = [
    {
      key: 1,
      amount: 50,
      svg: { fill: "#007B42" },
    },
    {
      key: 2,
      amount: 11,
      svg: { fill: "#22465E" },
    },
    {
      key: 3,
      amount: 21,
      svg: { fill: "#86909C" },
    },
    {
      key: 4,
      amount: 20,
      svg: { fill: "#EC7A09" },
    },
    {
      key: 5,
      amount: 35,
      svg: { fill: "#E34935" },
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <TopFilter tabs={true} cats={true} />
      <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
        <View
          style={{
            flexDirection: "row",
            borderColor: MAIN_COLOR_GRAY,
            backgroundColor: "#FFF",
            opacity: 1,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,
            elevation: 1,
            borderRadius: 8,
            padding: 10,
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <PieChart
            style={{ height: 250, width: "60%" }}
            data={data}
            innerRadius={"70%"}
            valueAccessor={({ item }) => item.amount}
          >
            <View
              style={{
                position: "absolute",
                left: 250 / 3,
                top: 250 / 3,
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                61%
              </Text>
              <Text>Ашиг</Text>
            </View>
          </PieChart>
          <View
            style={{
              flexDirection: "column",
              width: "30%",
              justifyContent: "space-around",
            }}
          >
            <PieChart
              style={{ height: 100, marginBottom: 10 }}
              data={data1}
              innerRadius={"60%"}
              valueAccessor={({ item }) => item.amount}
            />
            <PieChart
              style={{ height: 100 }}
              data={data}
              innerRadius={"60%"}
              valueAccessor={({ item }) => item.amount}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{ width: "33%", alignItems: "center" }}>
            <Text style={{ color: "#EC7A09" }}>Орлого</Text>
            <Text style={styles.amountText}>99,999сая₮</Text>
          </View>
          <View style={styles.bottomMidContent}>
            <Text style={{ color: "#E34935" }}>Зардал</Text>
            <Text style={styles.amountText}>99,999сая₮</Text>
          </View>
          <View style={{ width: "33%", alignItems: "center" }}>
            <Text style={{ color: "#22A06B" }}>Ашиг</Text>
            <Text style={styles.amountText}>99,999сая₮</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: MAIN_COLOR_GRAY,
    backgroundColor: "#FFF",
    opacity: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 8,
    paddingVertical: 10,
  },
  bottomMidContent: {
    borderLeftColor: "#E5E6EB",
    borderLeftWidth: 1,
    borderRightColor: "#E5E6EB",
    borderRightWidth: 1,
    width: "33%",
    alignItems: "center",
  },
  amountText: {
    color: "#4E5969",
    fontWeight: "bold",
  },
});
