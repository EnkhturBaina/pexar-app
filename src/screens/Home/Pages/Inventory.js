import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import TopFilter from "../TopFilter";
import { Icon } from "@rneui/base";
import { MAIN_BACKGROUND_COLOR, MAIN_COLOR_GRAY } from "../../../constant";
import { TextInput } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import empty_img from "../../../../assets/empty_img.png";

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS == "ios" ? "padding" : ""}
      style={{
        flex: 1,
      }}
    >
      <TopFilter tabs={false} cats={false} />
      <View style={styles.headerContainer}>
        <View style={styles.sectionStyle}>
          <Icon
            name="search"
            type="feather"
            size={20}
            color={MAIN_COLOR_GRAY}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Хайх"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.generalInput}
            returnKeyType="done"
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log("A")}
          style={styles.filterContainer}
        >
          <Icon
            name="filter"
            type="feather"
            size={20}
            color={MAIN_COLOR_GRAY}
          />
        </TouchableOpacity>
      </View>
      <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.stack1}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={empty_img}
                style={{ width: 80, height: 80 }}
                resizeMode="contain"
              />
              <View style={styles.topMidContent}>
                <Text style={{ fontWeight: "bold" }}>Хар үзгэн бал</Text>
                <Text style={styles.lightText}>#1234 5678 9000</Text>
                <Text style={styles.lightText}>Хэмжих нэгж: Ширхэг</Text>
                <Text style={styles.lightText}>Тоо хэмжээ:100</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.greenBtn}>
                <Text style={[styles.lightText, { color: "#EC7A09" }]}>
                  Өртөг
                </Text>
                <Text style={[styles.boldText, { color: "#EC7A09" }]}>
                  2,000₮
                </Text>
              </View>
              <View style={styles.grayBtn}>
                <Text style={styles.lightText}>Зарах үнэ</Text>
                <Text style={styles.boldText}>2,200₮</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={{ width: "33%", alignItems: "center" }}>
              <Text style={styles.boldText}>Барааны төрөл</Text>
              <Text style={{ fontSize: 10 }}>Бичиг хэрэг</Text>
            </View>
            <View style={styles.bottomMidContent}>
              <Text style={styles.boldText}>Бүлэг</Text>
              <Text style={{ fontSize: 10 }}>Бичиг хэрэг</Text>
            </View>
            <View style={{ width: "33%", alignItems: "center" }}>
              <Text style={styles.boldText}>Брэнд</Text>
              <Text style={{ fontSize: 10 }}>BEst pen</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Inventory;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  greenBtn: {
    minWidth: 70,
    height: 36,
    backgroundColor: "#F7CC8B",
    borderRadius: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  grayBtn: {
    minWidth: 70,
    height: 36,
    backgroundColor: "#C9CDD4",
    borderRadius: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  stack1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
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
  topMidContent: {
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "space-around",
  },
  bottomMidContent: {
    borderLeftColor: MAIN_COLOR_GRAY,
    borderLeftWidth: 1,
    borderRightColor: MAIN_COLOR_GRAY,
    borderRightWidth: 1,
    width: "33%",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  sectionStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
    marginRight: 10,
    height: 48,
  },
  inputIcon: {
    marginLeft: 15,
    marginHorizontal: 10,
  },
  generalInput: {
    fontWeight: "bold",
    height: 48,
    width: "80%",
  },
  filterContainer: {
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
    width: 48,
    height: 48,
    justifyContent: "center",
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
    padding: 10,
    marginBottom: 10,
  },
});
