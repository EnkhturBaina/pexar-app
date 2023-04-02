import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MAIN_BACKGROUND_COLOR, MAIN_COLOR_GRAY } from "../../../../constant";
import { Icon } from "@rneui/base";
import ReportListSkeleton from "../../../../Skeletons/ReportListSkeleton";
import Base from "../../../../../assets/Base.png";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import MainContext from "../../../../contexts/MainContext";

const ReportList = () => {
  const state = useContext(MainContext);
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState([]);

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
  const calcSum = (data) => {
    let sum = state.reportData.reduce(function (prev, current) {
      return prev + +current[data];
    }, 0);
    return sum;
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
        {state.isLoadingReport ? (
          <ReportListSkeleton />
        ) : (
          <View>
            <View style={styles.bottomContainerCard}>
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text style={{ color: "#EC7A09", fontWeight: "bold" }}>
                  Орлого
                </Text>
                <Text style={styles.amountText}>{calcSum("sale")}₮</Text>
              </View>
              <View style={styles.bottomMidContent}>
                <Text style={{ color: "#E34935", fontWeight: "bold" }}>
                  Зардал
                </Text>
                <Text style={styles.amountText}>{calcSum("cost")}₮</Text>
              </View>
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text style={{ color: "#22A06B", fontWeight: "bold" }}>
                  Ашиг
                </Text>
                <Text style={styles.amountText}>{calcSum("amount")}₮</Text>
              </View>
            </View>

            {state.reportData?.map((el, index) => {
              return (
                <TouchableOpacity
                  style={styles.cardContainer}
                  onPress={() => navigation.navigate("ReportListDtl")}
                  key={index}
                >
                  <View style={styles.cardHeader}>
                    <View style={styles.topContainer}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={Base}
                          style={{ width: 40, height: 40 }}
                          resizeMode="contain"
                        />
                        <View
                          style={{ flexDirection: "column", marginLeft: 5 }}
                        >
                          <Text
                            style={{ fontWeight: "bold", color: "#272E3B" }}
                          >
                            {el.b_name}
                          </Text>
                          <Text style={{ fontSize: 12, color: "#4E5969" }}>
                            {el.b_register}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => onChange(el.b_id)}
                      style={{ zIndex: 999, width: 40 }}
                    >
                      <Icon
                        name={
                          selectedIndex?.includes(el.b_id) ? "eye" : "eye-off"
                        }
                        type="ionicon"
                        size={25}
                        color="#4E5969"
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bottomContainer}>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <Text style={{ color: "#22A06B", fontWeight: "bold" }}>
                        Ашиг
                      </Text>
                      <Text style={styles.amountText}>
                        {selectedIndex?.includes(el.b_id)
                          ? el.amount
                            ? `${el.amount
                                ?.toFixed(2)
                                .replace(/\d(?=(\d{3})+\.)/g, "$&,")} ₮`
                            : "-"
                          : "******"}
                      </Text>
                    </View>
                    <View style={styles.bottomMidContent}>
                      <Text style={{ color: "#EC7A09", fontWeight: "bold" }}>
                        Орлого
                      </Text>
                      <Text style={styles.amountText}>
                        {selectedIndex?.includes(el.b_id)
                          ? el.sale
                            ? `${el.sale
                                ?.toFixed(2)
                                .replace(/\d(?=(\d{3})+\.)/g, "$&,")} ₮`
                            : "-"
                          : "******"}
                      </Text>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <Text style={{ color: "#E34935", fontWeight: "bold" }}>
                        Зардал
                      </Text>
                      <Text style={styles.amountText}>
                        {selectedIndex?.includes(el.b_id)
                          ? el.cost
                            ? `${el.cost
                                ?.toFixed(2)
                                .replace(/\d(?=(\d{3})+\.)/g, "$&,")} ₮`
                            : "-"
                          : "******"}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ReportList;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomContainerCard: {
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
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
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
    fontSize: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContainer: {
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
    flexDirection: "column",
    padding: 20,
    marginTop: 10,
  },
});
