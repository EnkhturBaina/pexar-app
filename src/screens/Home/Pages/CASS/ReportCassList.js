import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../../../../constant";
import { CheckBox, Icon } from "@rneui/base";
import ReportListSkeleton from "../../../../Skeletons/ReportListSkeleton";
import Base from "../../../../../assets/Base.png";
import { useNavigation } from "@react-navigation/native";

const ReportCassList = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
        {isLoading ? (
          <ReportListSkeleton />
        ) : (
          <View>
            <View style={styles.bottomContainerCard}>
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text style={{ color: "#EC7A09", fontWeight: "bold" }}>
                  Орлого
                </Text>
                <Text style={styles.amountText}>99,999сая₮</Text>
              </View>
              <View style={styles.bottomMidContent}>
                <Text style={{ color: "#E34935", fontWeight: "bold" }}>
                  Зардал
                </Text>
                <Text style={styles.amountText}>99,999сая₮</Text>
              </View>
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text style={{ color: "#22A06B", fontWeight: "bold" }}>
                  Ашиг
                </Text>
                <Text style={styles.amountText}>99,999сая₮</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => navigation.navigate("ReportListDtl")}
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
                    <View style={{ flexDirection: "column", marginLeft: 5 }}>
                      <Text style={{ fontWeight: "bold", color: "#272E3B" }}>
                        "Смарт-Крафт" ХХК
                      </Text>
                      <Text style={{ fontSize: 12, color: "#4E5969" }}>
                        5506913
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => console.log("A")}
                  style={{ zIndex: 999, width: 40 }}
                >
                  <Icon name="eye" type="ionicon" size={25} color="#4E5969" />
                </TouchableOpacity>
              </View>
              <View style={styles.bottomContainer}>
                <View style={{ width: "33%", alignItems: "center" }}>
                  <Text style={{ color: "#22A06B", fontWeight: "bold" }}>
                    Ашиг
                  </Text>
                  <Text style={styles.amountText}>99,999сая₮</Text>
                </View>
                <View style={styles.bottomMidContent}>
                  <Text style={{ color: "#EC7A09", fontWeight: "bold" }}>
                    Орлого
                  </Text>
                  <Text style={styles.amountText}>99,999сая₮</Text>
                </View>
                <View style={{ width: "33%", alignItems: "center" }}>
                  <Text style={{ color: "#E34935", fontWeight: "bold" }}>
                    Зардал
                  </Text>
                  <Text style={styles.amountText}>99,999сая₮</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ReportCassList;

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
