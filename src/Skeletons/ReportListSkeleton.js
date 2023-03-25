import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MAIN_COLOR_GRAY } from "../constant";
import { Skeleton } from "@rneui/base";

const ReportListSkeleton = () => {
  return (
    <View>
      <View style={styles.bottomContainer}>
        <Skeleton animation="pulse" width="25%" height={30} />
        <Skeleton animation="pulse" width="25%" height={30} />
        <Skeleton animation="pulse" width="25%" height={30} />
      </View>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Skeleton animation="pulse" width="30%" height={30} />
          <Skeleton animation="pulse" width="30%" height={30} />
          <Skeleton animation="pulse" width="30%" height={30} />
        </View>
      </View>
    </View>
  );
};

export default ReportListSkeleton;

const styles = StyleSheet.create({
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
