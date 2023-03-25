import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/base";
import { MAIN_COLOR_GRAY } from "../constant";

const ReportChartSkeleton = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Skeleton animation="pulse" circle width={40} height={40} />
        <Skeleton
          animation="pulse"
          width="30%"
          height={30}
          style={{ marginLeft: 10 }}
        />
      </View>
      <Skeleton
        animation="pulse"
        width="100%"
        height={10}
        style={{ marginTop: 20 }}
      />
      <Skeleton
        animation="pulse"
        width="100%"
        height={10}
        style={{ marginTop: 20 }}
      />
      <Skeleton
        animation="pulse"
        width="100%"
        height={10}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default ReportChartSkeleton;

const styles = StyleSheet.create({
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
});
