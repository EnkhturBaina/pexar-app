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

const ReportDebtListDtl = (props) => {
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
      <View style={styles.topCardContainer}>
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
      <View style={styles.bottomContainerCard}>
        <View style={{ width: "33%", alignItems: "center" }}>
          <Text style={{ color: "#EC7A09", fontWeight: "bold" }}>Авлага</Text>
          <Text style={styles.amountText}>99,999сая₮</Text>
        </View>
        <View style={styles.bottomMidContent}>
          <Text style={{ color: "#E34935", fontWeight: "bold" }}>Өглөг</Text>
          <Text style={styles.amountText}>99,999сая₮</Text>
        </View>
        <View style={{ width: "33%", alignItems: "center" }}>
          <Text style={{ color: "#22A06B", fontWeight: "bold" }}>Зөрүү</Text>
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
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flexDirection: "column", marginLeft: 5 }}>
                  <Text style={{ fontWeight: "bold", color: "#272E3B" }}>
                    "Смарт-Крафт" ХХК
                  </Text>
                  <Text style={{ fontSize: 12, color: "#4E5969" }}>
                    5506913
                  </Text>
                </View>
              </View>
              <Text style={styles.statusContainer}>Батлагдсан</Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={{ color: "#4E5969" }}>Хугацаа: 2023.06.01</Text>
              <Text style={styles.valText}>| РД9988 7766</Text>
            </View>

            <View style={styles.bottomContainer}>
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text style={styles.boldText}>Авлага</Text>
                <Text style={{ fontSize: 10, color: "#4E5969" }}>
                  99,999сая₮
                </Text>
              </View>
              <View style={styles.bottomMidContent}>
                <Text style={styles.boldText}>Өглөг</Text>
                <Text style={{ fontSize: 10, color: "#4E5969" }}>
                  99,999сая₮
                </Text>
              </View>
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text style={styles.boldText}>Зөрүү</Text>
                <Text style={{ fontSize: 10, color: "#4E5969" }}>
                  99,999сая₮
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

export default ReportDebtListDtl;

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
    marginHorizontal: 10,
    marginBottom: 10,
  },
  bottomContainer: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
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
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingHorizontal: 10,
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
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  statusContainer: {
    color: "#00904D",
    backgroundColor: "#99D3B8",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 10,
    overflow: "hidden",
    fontWeight: "bold",
  },
  topCardContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
