import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
  progressMax,
} from "../../../../constant";
import Base from "../../../../../assets/Base.png";
import { ProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReportChartSkeleton from "../../../../Skeletons/ReportChartSkeleton";
import { useContext } from "react";
import MainContext from "../../../../contexts/MainContext";

const ReportCassChart = () => {
  const state = useContext(MainContext);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
        {state.isLoadingReport ? (
          <ReportChartSkeleton />
        ) : (
          <>
            {state.reportData?.map((el, index) => {
              return (
                <TouchableOpacity
                  style={styles.cardContainer}
                  onPress={() => navigation.navigate("ReportCassChartDtl")}
                  key={index}
                >
                  <View style={styles.cardHeader}>
                    <Image
                      source={Base}
                      style={{ width: 40, height: 40 }}
                      resizeMode="contain"
                    />
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                        marginLeft: 5,
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "#272E3B" }}>
                        {el.b_name}
                      </Text>
                      <Text style={{ fontSize: 12, color: "#4E5969" }}>
                        {el.b_register}
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 5 }}>
                    <View style={styles.textContainer}>
                      <Text style={styles.labelText}>Харилцах данс</Text>
                      <Text style={styles.valueText}>
                        {el.receivable
                          ? `${el.receivable
                              ?.toFixed(2)
                              .replace(/\d(?=(\d{3})+\.)/g, "$&,")} ₮`
                          : "-"}
                      </Text>
                    </View>
                    <ProgressBar
                      progress={el.receivable ? el.receivable / progressMax : 0}
                      color={MAIN_COLOR}
                      style={{ borderRadius: 8, marginTop: 5 }}
                    />
                  </View>
                  <View style={{ marginTop: 5 }}>
                    <View style={styles.textContainer}>
                      <Text style={styles.labelText}>Касс</Text>
                      <Text style={styles.valueText}>
                        {el.payable
                          ? `${el.payable
                              ?.toFixed(2)
                              .replace(/\d(?=(\d{3})+\.)/g, "$&,")} ₮`
                          : "-"}
                      </Text>
                    </View>
                    <ProgressBar
                      progress={el.payable ? el.payable / progressMax : 0}
                      color="#1F3F55"
                      style={{ borderRadius: 8, marginTop: 5 }}
                    />
                  </View>
                  <View style={{ marginTop: 5 }}>
                    <View style={styles.textContainer}>
                      <Text style={styles.labelText}>Нийт үлдэгдэл</Text>
                      <Text style={styles.valueText}>
                        {el.diff01
                          ? `${el.diff01
                              ?.toFixed(2)
                              .replace(/\d(?=(\d{3})+\.)/g, "$&,")} ₮`
                          : "-"}
                      </Text>
                    </View>
                    <ProgressBar
                      progress={el.diff01 ? el.diff01 / progressMax : 0}
                      color="#4B8CD9"
                      style={{ borderRadius: 8, marginTop: 5 }}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default ReportCassChart;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingHorizontal: 10,
    paddingTop: 10,
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
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelText: {
    color: "#22465E",
    fontWeight: "bold",
  },
  valueText: {
    color: "#86909C",
  },
});
