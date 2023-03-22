import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import TopFilter from "../TopFilter";
import { MAIN_BACKGROUND_COLOR, MAIN_COLOR_GRAY } from "../../../constant";
import Base from "../../../../assets/Base.png";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const List = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TopFilter tabs={false} cats={false} />
      <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate("ListDtl")}
        >
          <View style={styles.cardHeader}>
            <Image
              source={Base}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column", marginLeft: 5 }}>
              <Text style={{ fontWeight: "bold" }}>"Смарт-Крафт" ХХК</Text>
              <Text style={{ fontSize: 12, color: "#4E5969" }}>5506913</Text>
            </View>
          </View>
          <View style={styles.mobileContainer}>
            <Icon
              name="mobile"
              type="font-awesome-5"
              size={20}
              color="#272E3B"
              style={styles.inputIcon}
            />
            <Text style={{ flex: 1 }}>(+976) 9988-7766 7011-7755</Text>
          </View>
          <View style={styles.maiLContainer}>
            <Icon
              name="mail"
              type="ionicons"
              size={20}
              color="#272E3B"
              style={styles.inputIcon}
            />
            <Text style={{ flex: 1 }}>info@smartcraft.mn</Text>
          </View>
          <View style={styles.webContainer}>
            <Icon
              name="web"
              type="material-community"
              size={20}
              color="#272E3B"
              style={styles.inputIcon}
            />
            <Text style={{ flex: 1 }}>www.smart-craft.mn</Text>
          </View>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Icon
              name="location-sharp"
              type="ionicon"
              size={20}
              color="#272E3B"
              style={styles.inputIcon}
            />
            <Text style={{ flex: 1 }}>
              City төв 10 давхар 1001 тоот, Б Алтангэрэлийн гудамж5, Сүхбаатар
              дүүрэг, Улаанбаатар хот, Монгол Улс
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default List;

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
  inputIcon: {
    marginRight: 15,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  mobileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginLeft: 5,
  },
  maiLContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  webContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
