import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/base";
import { MAIN_COLOR_GRAY } from "../constant";

const ReportDiagramSkeleton = () => {
  return (
    <View>
      <View style={styles.topPieContainerSkeleton}>
        <Skeleton
          animation="pulse"
          width={180}
          height={180}
          circle
          style={{ borderRadius: 180, alignSelf: "center" }}
        />
        <View
          style={{
            flexDirection: "column",
            width: "30%",
            justifyContent: "space-around",
          }}
        >
          <Skeleton
            animation="pulse"
            width={90}
            height={90}
            circle
            style={{ alignSelf: "center" }}
          />
          <Skeleton
            animation="pulse"
            width={90}
            height={90}
            circle
            style={{ alignSelf: "center" }}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Skeleton animation="pulse" width="25%" height={30} />
        <Skeleton animation="pulse" width="25%" height={30} />
        <Skeleton animation="pulse" width="25%" height={30} />
      </View>
    </View>
  );
};

export default ReportDiagramSkeleton;

const styles = StyleSheet.create({
  topPieContainerSkeleton: {
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
    justifyContent: "space-around",
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
});
