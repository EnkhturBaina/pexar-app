import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { MAIN_BACKGROUND_COLOR, MAIN_COLOR_GRAY } from "../../../constant";
import { useHeaderHeight } from "@react-navigation/elements";
import empty_full from "../../../../assets/empty_full.png";

const InventoryDtl = () => {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
      <View>
        <Image
          source={empty_full}
          style={{ width: "100%", height: 180 }}
          resizeMode="contain"
        />
        <Text style={styles.shadowText} numberOfLines={2}>
          Хар үзгэн бал
        </Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={{ color: "#86909C", fontSize: 16 }}>#1234 5678 9000</Text>
        <Text style={styles.badgeContainer}>Хэмжих нэгж: Ширхэг</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ width: "33%", alignItems: "center" }}>
          <Text style={styles.boldText}>Харилцах данс</Text>
          <Text style={styles.amountText}>99,999сая₮</Text>
        </View>
        <View style={styles.bottomMidContent}>
          <Text style={styles.boldText}>Касс</Text>
          <Text style={styles.amountText}>99,999сая₮</Text>
        </View>
        <View style={{ width: "33%", alignItems: "center" }}>
          <Text style={styles.boldText}>Нийт үлдэгдэл</Text>
          <Text style={styles.amountText}>99,999сая₮</Text>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <Text style={{ color: "#272E3B", fontSize: 16 }}>Тоо хэмжээ: 100</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#4E5969" }}>Салбар 1</Text>
          <Text style={{ color: "#4E5969", fontWeight: "bold" }}>20</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.greenBtn}>
          <Text style={{ color: "#EC7A09" }}>Өртөг</Text>
          <Text style={{ color: "#EC7A09", fontWeight: "bold" }}>2,000₮</Text>
        </View>
        <View style={styles.grayBtn}>
          <Text style={{ color: "#4E5969" }}>Зарах үнэ</Text>
          <Text style={{ color: "#4E5969", fontWeight: "bold" }}>2,000₮</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default InventoryDtl;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  shadowText: {
    position: "absolute",
    color: "#fff",
    width: "100%",
    bottom: 0,
    left: 0,
    padding: 5,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    shadowOpacity: 0.5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: "hidden",
    fontSize: 12,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
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
    marginBottom: 10,
  },
  bottomContainer: {
    flexDirection: "row",
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
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  boldText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4E5969",
  },
  lightText: {
    fontSize: 12,
    color: "#4E5969",
  },
  bottomMidContent: {
    borderLeftColor: "#E5E6EB",
    borderLeftWidth: 1,
    borderRightColor: "#E5E6EB",
    borderRightWidth: 1,
    width: "33%",
    alignItems: "center",
  },
  greenBtn: {
    width: "48%",
    height: 50,
    backgroundColor: "#F7CC8B",
    borderRadius: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  grayBtn: {
    width: "48%",
    height: 50,
    backgroundColor: "#C9CDD4",
    borderRadius: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  amountText: {
    fontSize: 10,
    color: "#4E5969",
  },
  badgeContainer: {
    backgroundColor: "#91A3AF",
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
    color: "#22465E",
    fontSize: 12,
    overflow: "hidden",
  },
});
