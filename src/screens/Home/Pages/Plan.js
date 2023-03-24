import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import React, { useCallback, useState } from "react";
import TopFilter from "../TopFilter";
import {
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../../../constant";
import Base from "../../../../assets/Base.png";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

const Plan = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [routes] = useState([
    {
      key: "first",
      title: "Орлого",
    },
    {
      key: "second",
      title: "Зарлага",
    },
    {
      key: "third",
      title: "Ашиг",
    },
  ]);
  const FirstRoute = useCallback(() => {
    return (
      <View style={{ backgroundColor: "red" }}>
        <Text>Орлого</Text>
      </View>
    );
  }, []);
  const SecondRoute = useCallback(() => {
    return (
      <View style={{}}>
        <Text>Зарлага</Text>
      </View>
    );
  }, []);
  const ThirdRoute = useCallback(() => {
    return (
      <View style={{}}>
        <Text>Ашиг</Text>
      </View>
    );
  }, []);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "transparent" }}
      tabStyle={{
        width: "auto",
        padding: 0,
        height: 30,
        borderWidth: 1,
        borderColor: "#E5E6EB",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginRight: 5,
        padding: 2,
        zIndex: 999,
      }}
      pressColor="transparent"
      style={{
        justifyContent: "center",
        backgroundColor: "#fff",
        elevation: 0,
        marginTop: 15,
      }}
      renderLabel={({ route, focused, color }) => (
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={{
            color: focused ? MAIN_COLOR : "#4E5969",
            fontWeight: focused ? "bold" : "normal",
            fontSize: 12,
            width: 60,
            height: 30,
            textAlign: "center",
          }}
        >
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <View style={{ flex: 1 }}>
      <TopFilter tabs={false} cats={false} />
      <View style={styles.mainContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.cardContainer}
          // onPress={() => navigation.navigate("PlanDtl")}
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
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            swipeEnabled={false}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Plan;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 60,
  },
  cardContainer: {
    height: 300,
    borderColor: MAIN_COLOR_GRAY,
    backgroundColor: "#fff",
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
  },
});
