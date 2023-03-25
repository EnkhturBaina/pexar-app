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
} from "../../../constant";
import Base from "../../../../assets/Base.png";
import { ProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ReportChartSkeleton from "../../../Skeletons/ReportChartSkeleton";

const ReportChart = () => {
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
          <ReportChartSkeleton />
        ) : (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("ReportChartDtl")}
          >
            <View style={styles.cardHeader}>
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
            <View style={{ marginTop: 5 }}>
              <View style={styles.textContainer}>
                <Text style={styles.labelText}>Орлого</Text>
                <Text style={styles.valueText}>999,999,999,00₮</Text>
              </View>
              <ProgressBar
                progress={0.7}
                color={MAIN_COLOR}
                style={{ borderRadius: 8, marginTop: 5 }}
              />
            </View>
            <View style={{ marginTop: 5 }}>
              <View style={styles.textContainer}>
                <Text style={styles.labelText}>Зарлага</Text>
                <Text style={styles.valueText}>999,999,999,00₮</Text>
              </View>
              <ProgressBar
                progress={0.2}
                color="#E34935"
                style={{ borderRadius: 8, marginTop: 5 }}
              />
            </View>
            <View style={{ marginTop: 5 }}>
              <View style={styles.textContainer}>
                <Text style={styles.labelText}>Ашиг</Text>
                <Text style={styles.valueText}>999,999,999,00₮</Text>
              </View>
              <ProgressBar
                progress={0.3}
                color="#EC7A09"
                style={{ borderRadius: 8, marginTop: 5 }}
              />
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

export default ReportChart;

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
