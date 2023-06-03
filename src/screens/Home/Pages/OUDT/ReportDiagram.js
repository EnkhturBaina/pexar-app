import { Text, StyleSheet, View, ScrollView, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import {
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../../../../constant";
import { CheckBox } from "@rneui/base";
import ReportDiagramSkeleton from "../../../../Skeletons/ReportDiagramSkeleton";
import MainContext from "../../../../contexts/MainContext";
import { PieChart } from "react-native-chart-kit";

const ReportDiagram = () => {
  const state = useContext(MainContext);
  const [selectedIndex, setSelectedIndex] = useState([]);

  const width = Dimensions.get("window").width;

  const onChange = (val) => {
    const reducedArr = [...selectedIndex];
    var index = reducedArr.indexOf(val);
    if (index !== -1) {
      reducedArr?.splice(index, 1);
      setSelectedIndex(reducedArr);
    } else {
      setSelectedIndex((selectedIndex) => [...selectedIndex, val]);
    }
  };

  const data = [
    {
      name: "Үйлдвэр",
      population: 364500,
      color: "#007B42",
      legendFontColor: "#7F7F7F",
      legendFontSize: 14,
    },
    {
      name: "Орон сууц",
      population: 611058,
      color: "#22465E",
      legendFontColor: "#7F7F7F",
      legendFontSize: 14,
    },
    {
      name: "Тээвэр",
      population: 527612,
      color: "#86909C",
      legendFontColor: "#7F7F7F",
      legendFontSize: 14,
    },
    {
      name: "Агуулах",
      population: 41350,
      color: "#EC7A09",
      legendFontColor: "#7F7F7F",
      legendFontSize: 14,
    },
    {
      name: "Касс",
      population: 102020,
      color: "#E34935",
      legendFontColor: "#7F7F7F",
      legendFontSize: 14,
    },
  ];
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
        {state.isLoadingReport ? (
          <ReportDiagramSkeleton />
        ) : (
          <View>
            <View style={styles.topPieContainer}>
              <PieChart
                data={data}
                width={width - 40}
                height={200}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
              />
            </View>
            <View style={styles.bottomContainer}>
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text style={{ color: "#EC7A09", fontWeight: "bold" }}>
                  Орлого
                </Text>
                <Text style={styles.amountText}>{state.calcSum("sale")}₮</Text>
              </View>
              <View style={styles.bottomMidContent}>
                <Text style={{ color: "#E34935", fontWeight: "bold" }}>
                  Зардал
                </Text>
                <Text style={styles.amountText}>{state.calcSum("cost")}₮</Text>
              </View>
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text style={{ color: "#22A06B", fontWeight: "bold" }}>
                  Ашиг
                </Text>
                <Text style={styles.amountText}>
                  {state.calcSum("amount")}₮
                </Text>
              </View>
            </View>
            <View style={styles.bottomCardContainer}>
              <ScrollView bounces={false} nestedScrollEnabled>
                {state.reportData?.map((el, index) => {
                  return (
                    <View style={styles.rowContainer} key={index}>
                      <CheckBox
                        checked={selectedIndex?.includes(el.b_id)}
                        onPress={() => {
                          onChange(el.b_id);
                        }}
                        iconType="ionicon"
                        checkedIcon="checkbox"
                        uncheckedIcon="square-outline"
                        title={el.b_name}
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
                      <Text style={styles.regText}>{el.b_register}</Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        )}
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
    justifyContent: "space-evenly",
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
    fontSize: 12,
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
    maxHeight: 220,
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
  chart1Container: {
    justifyContent: "center",
    alignItems: "center",
    height: 180,
  },
  chart1Text: {
    fontSize: 36,
    fontWeight: "bold",
    lineHeight: 36,
  },
  chart2Container: {
    flexDirection: "column",
    width: "30%",
    justifyContent: "space-around",
  },
  mainChart1: {
    height: 180,
    width: 180,
    flex: 1,
    alignSelf: "center",
  },
});
