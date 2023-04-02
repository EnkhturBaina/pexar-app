import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MAIN_COLOR_GRAY } from "../constant";
import { Skeleton } from "@rneui/base";

const InventorySkeleton = () => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Skeleton
            animation="pulse"
            width={80}
            height={80}
            style={{ borderRadius: 12 }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-evenly",
              marginLeft: 10,
            }}
          >
            <Skeleton animation="pulse" width="70%" height={10} />
            <Skeleton animation="pulse" width="70%" height={10} />
            <Skeleton animation="pulse" width="70%" height={10} />
            <Skeleton animation="pulse" width="70%" height={10} />
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              width: 80,
            }}
          >
            <Skeleton
              animation="pulse"
              height={30}
              style={{ borderRadius: 12 }}
            />
            <Skeleton
              animation="pulse"
              height={30}
              style={{ borderRadius: 12 }}
            />
          </View>
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

export default InventorySkeleton;

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
    padding: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
});
