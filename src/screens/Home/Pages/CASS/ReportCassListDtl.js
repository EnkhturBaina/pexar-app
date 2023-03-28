import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Icon } from "@rneui/base";
import Base from "../../../../../assets/Base.png";
import TopFilter from "../../TopFilter";
import {
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
  MAIN_COLOR_GRAY_LEVEL4,
} from "../../../../constant";
import khan from "../../../../../assets/khan.png";
// import { Grid, LineChart, XAxis, YAxis } from "react-native-svg-charts";

const ReportCassListDtl = (props) => {
  const [selectedCat, setSelectedCat] = useState(1);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.headerLeftContainer}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Icon name="arrow-left" type="feather" size={25} color="#FFF" />
          <Image
            source={Base}
            style={{ width: 30, height: 30, marginLeft: 5 }}
            resizeMode="contain"
          />
          <Text style={[styles.headerLeftText, { color: "#FFF" }]}>
            Төлөвлөгөө
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [props.navigation]);
  return (
    <View style={{ flex: 1, backgroundColor: MAIN_BACKGROUND_COLOR }}>
      <TopFilter tabs={true} cats={false} />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          style={[
            styles.eachCardMenu,
            {
              backgroundColor:
                selectedCat == 1 ? MAIN_COLOR : MAIN_COLOR_GRAY_LEVEL4,
              width: "48%",
            },
          ]}
          onPress={() => setSelectedCat(1)}
        >
          <Icon name="bar-chart" type="ion-icon" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.eachCardMenu,
            {
              backgroundColor:
                selectedCat == 2 ? MAIN_COLOR : MAIN_COLOR_GRAY_LEVEL4,
              width: "48%",
            },
          ]}
          onPress={() => setSelectedCat(2)}
        >
          <Icon name="document-text" type="ionicon" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ width: "33%", alignItems: "center" }}>
          <Text style={{ color: "#EC7A09", fontWeight: "bold" }}>
            Харилцах данс
          </Text>
          <Text style={styles.amountText}>99,999сая₮</Text>
        </View>
        <View style={styles.bottomMidContent}>
          <Text style={{ color: "#E34935", fontWeight: "bold" }}>Касс</Text>
          <Text style={styles.amountText}>99,999сая₮</Text>
        </View>
        <View style={{ width: "33%", alignItems: "center" }}>
          <Text style={{ color: "#22A06B", fontWeight: "bold" }}>
            Нийт үлдэгдэл
          </Text>
          <Text style={styles.amountText}>99,999сая₮</Text>
        </View>
      </View>
      {selectedCat == 1 ? (
        <View></View>
      ) : selectedCat == 2 ? (
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.mainContainer}
        >
          <View style={styles.middleContainer}>
            <Text style={styles.headerText}>
              Харилцах дансанд дахь үлдэгдэл
            </Text>
            <View style={styles.whiteRowBorder}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={khan}
                  resizeMode="contain"
                  style={{ width: 25, height: 25 }}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 14 }}>Хаан банк</Text>
                  <Text>5753382973 төг</Text>
                </View>
              </View>
              <Text style={{ fontWeight: "bold" }}>100,000.00 сая</Text>
            </View>
          </View>
          <View style={styles.middleContainer}>
            <Text style={styles.headerText}>Кассын үлдэгдэл</Text>
            <View style={styles.whiteRow}>
              <Text>Бэлэн</Text>
              <Text style={{ fontWeight: "bold" }}>100,000.00 сая</Text>
            </View>
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

export default ReportCassListDtl;

const styles = StyleSheet.create({
  headerLeftContainer: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeftText: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
    width: "100%",
  },
  eachCardMenu: {
    borderRadius: 6,
    height: 40,
    justifyContent: "center",
  },
  bottomContainer: {
    marginHorizontal: 10,
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
    marginBottom: 5,
  },
  amountText: {
    color: "#4E5969",
    fontWeight: "bold",
  },
  bottomMidContent: {
    borderLeftColor: "#E5E6EB",
    borderLeftWidth: 1,
    borderRightColor: "#E5E6EB",
    borderRightWidth: 1,
    width: "33%",
    alignItems: "center",
  },
  middleContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 10,
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
    padding: 10,
    marginHorizontal: 10,
  },
  whiteRowBorder: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
    borderBottomColor: "#E5E6EB",
    borderBottomWidth: 1,
  },
  whiteRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
  },
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  headerText: {
    color: "#272E3B",
    fontSize: 16,
    fontWeight: "bold",
  },
});
