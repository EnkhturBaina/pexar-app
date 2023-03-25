import { Dimensions, Text, StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import TopFilter from "../TopFilter";
// import { PieChart } from "react-native-chart-kit";

import { PieChart } from "react-native-svg-charts";
import {
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../../../constant";
import { CheckBox } from "@rneui/base";
const ReportDiagram = () => {
  const [selectedIndex, setSelectedIndex] = useState(false);
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
      <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
        <View style={styles.topPieContainer}>
          <PieChart
            style={{
              height: 180,
              width: 180,
              flex: 1,
              alignSelf: "center",
            }}
            data={data}
            innerRadius={"70%"}
            valueAccessor={({ item }) => item.amount}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 180,
              }}
            >
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: "bold",
                  lineHeight: 36,
                }}
              >
                61%
              </Text>
              <Text style={{ fontSize: 20, lineHeight: 18 }}>Ашиг</Text>
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
              style={styles.smallPieContainer}
              data={data1}
              innerRadius={"60%"}
              valueAccessor={({ item }) => item.amount}
            >
              <View style={styles.smallPieTextContainer}>
                <Text style={styles.smallPieTopText}>61%</Text>
                <Text style={styles.smallPieBtmText}>Орлого</Text>
              </View>
            </PieChart>
            <PieChart
              style={styles.smallPieContainer}
              data={data}
              innerRadius={"60%"}
              valueAccessor={({ item }) => item.amount}
            >
              <View style={styles.smallPieTextContainer}>
                <Text style={styles.smallPieTopText}>61%</Text>
                <Text style={styles.smallPieBtmText}>Зардал</Text>
              </View>
            </PieChart>
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
        <View style={styles.bottomCardContainer}>
          <ScrollView bounces={false} nestedScrollEnabled>
            <View style={styles.rowContainer}>
              <CheckBox
                checked={selectedIndex}
                onPress={() => setSelectedIndex(!selectedIndex)}
                iconType="ionicon"
                checkedIcon="checkbox"
                uncheckedIcon="square-outline"
                title="Тэнплас Интернэйшнал ХХК"
                containerStyle={{
                  width: "75%",
                  padding: 0,
                  margin: 0,
                  marginLeft: 0,
                }}
                checkedColor={MAIN_COLOR}
                uncheckedColor={MAIN_COLOR}
                titleProps={{ numberOfLines: 1 }}
              />
              <Text style={styles.regText}>5506913</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReportDiagram;

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
  topPieContainer: {
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
    height: 220,
  },
  smallPieContainer: {
    height: 90,
    width: 90,
    flex: 1,
  },
  smallPieTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  smallPieTopText: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 18,
  },
  smallPieBtmText: {
    fontSize: 12,
    lineHeight: 12,
  },
  bottomCardContainer: {
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
    height: 220,
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
  },
  regText: {
    width: "20%",
    textAlign: "center",
    color: "#86909C",
  },
});
