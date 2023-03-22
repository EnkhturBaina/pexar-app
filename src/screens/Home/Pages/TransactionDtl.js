import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { MAIN_BACKGROUND_COLOR, MAIN_COLOR_GRAY } from "../../../constant";
import Base from "../../../../assets/Base.png";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

//Гүйлгээ
const TransactionDtl = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={Base}
                style={{ width: 40, height: 40 }}
                resizeMode="contain"
              />
              <View style={{ flexDirection: "column", marginLeft: 5 }}>
                <Text style={{ fontWeight: "bold", color: "#272E3B" }}>
                  "Смарт-Крафт" ХХК
                </Text>
                <Text style={{ fontSize: 12, color: "#4E5969" }}>5506913</Text>
              </View>
            </View>
            <Text
              style={{
                color: "#00904D",
                backgroundColor: "#99D3B8",
                borderRadius: 12,
                paddingVertical: 6,
                paddingHorizontal: 12,
                fontSize: 10,
                overflow: "hidden",
                fontWeight: "bold",
              }}
            >
              Батлагдсан
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              paddingVertical: 3,
            }}
          >
            <Text style={{ color: "#4E5969", fontSize: 12 }}>Ирсэн огноо:</Text>
            <Text
              style={{ color: "#4E5969", fontWeight: "bold", paddingLeft: 5 }}
            >
              2023/02/02
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              paddingVertical: 3,
            }}
          >
            <Text style={{ color: "#4E5969", fontSize: 12 }}>Харилцагч:</Text>
            <Text
              style={{ color: "#4E5969", fontWeight: "bold", paddingLeft: 5 }}
            >
              Б.Өлзийтогтох
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              paddingVertical: 3,
            }}
          >
            <Text style={{ color: "#4E5969", fontSize: 12 }}>
              Журналын төрөл:
            </Text>
            <Text
              style={{ color: "#4E5969", fontWeight: "bold", paddingLeft: 5 }}
            >
              Барааны орлого
            </Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={{ width: "33%", alignItems: "center" }}>
              <Text style={styles.boldText}>Дүн</Text>
              <Text style={{ fontSize: 10, color: "#4E5969" }}>99,999сая₮</Text>
            </View>
            <View style={styles.bottomMidContent}>
              <Text style={styles.boldText}>НӨАТ</Text>
              <Text style={{ fontSize: 10, color: "#4E5969" }}>99,999сая₮</Text>
            </View>
            <View style={{ width: "33%", alignItems: "center" }}>
              <Text style={styles.boldText}>Бүгд дүн</Text>
              <Text style={{ fontSize: 10, color: "#4E5969" }}>99,999сая₮</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TransactionDtl;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 60,
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
  bottomMidContent: {
    borderLeftColor: "#E5E6EB",
    borderLeftWidth: 1,
    borderRightColor: "#E5E6EB",
    borderRightWidth: 1,
    width: "33%",
    alignItems: "center",
  },
});
