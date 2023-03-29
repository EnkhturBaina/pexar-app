import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useCallback, useState } from "react";
import TopFilter from "../TopFilter";
import {
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../../../constant";
import Base from "../../../../assets/Base.png";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
  Tooltip,
} from "react-native-responsive-linechart";
import { Icon } from "@rneui/base";
import { useLayoutEffect } from "react";

const PlanDtl = (props) => {
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
      <View>
        <Chart
          style={{ height: 200, width: 400 }}
          data={[
            { x: 1, y: 7 },
            { x: 2, y: 6 },
            { x: 3, y: 8 },
            { x: 4, y: 10 },
            { x: 5, y: 8 },
            { x: 6, y: 12 },
            { x: 7, y: 14 },
            { x: 8, y: 12 },
            { x: 9, y: 13.5 },
            { x: 10, y: 18 },
            { x: 11, y: 15 },
            { x: 12, y: 10 },
          ]}
          padding={{ left: 15, bottom: 30, right: 60, top: 10 }}
          xDomain={{ min: 1, max: 12 }}
          yDomain={{ min: 0, max: 20 }}
        >
          <HorizontalAxis
            tickCount={12}
            theme={{ labels: { formatter: (v) => v } }}
          />
          <VerticalAxis
            tickCount={5}
            theme={{ labels: { formatter: (v) => null } }}
          />
          <Area
            theme={{
              gradient: {
                from: { color: "#ffa502" },
                to: { color: "#ffa502", opacity: 0.4 },
              },
            }}
          />
          <Line
            tooltipComponent={<Tooltip />}
            theme={{
              stroke: { color: "#ffa502", width: 5 },
              scatter: { default: { width: 4, height: 4, rx: 2 } },
            }}
          />
        </Chart>
      </View>
    );
  }, []);
  const SecondRoute = useCallback(() => {
    return (
      <View>
        <Chart
          style={{ height: 200, width: 400 }}
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 2 },
            { x: 5, y: 4 },
            { x: 6, y: 10 },
            { x: 7, y: 14 },
            { x: 8, y: 12 },
            { x: 9, y: 11.5 },
            { x: 10, y: 8 },
            { x: 11, y: 7 },
            { x: 12, y: 6 },
          ]}
          padding={{ left: 15, bottom: 30, right: 60, top: 10 }}
          xDomain={{ min: 1, max: 12 }}
          yDomain={{ min: 0, max: 20 }}
        >
          <HorizontalAxis
            tickCount={12}
            theme={{ labels: { formatter: (v) => v } }}
          />
          <VerticalAxis
            tickCount={5}
            theme={{ labels: { formatter: (v) => null } }}
          />
          <Area
            theme={{
              gradient: {
                from: { color: "#ffa502" },
                to: { color: "#ffa502", opacity: 0.4 },
              },
            }}
          />
          <Line
            tooltipComponent={<Tooltip />}
            theme={{
              stroke: { color: "#ffa502", width: 5 },
              scatter: { default: { width: 4, height: 4, rx: 2 } },
            }}
          />
        </Chart>
      </View>
    );
  }, []);
  const ThirdRoute = useCallback(() => {
    return (
      <View>
        <Chart
          style={{ height: 200, width: 400 }}
          data={[
            { x: 1, y: 11 },
            { x: 2, y: 12 },
            { x: 3, y: 13 },
            { x: 4, y: 10 },
            { x: 5, y: 8 },
            { x: 6, y: 12 },
            { x: 7, y: 11 },
            { x: 8, y: 7 },
            { x: 9, y: 13.5 },
            { x: 10, y: 8 },
            { x: 11, y: 15 },
            { x: 12, y: 13 },
          ]}
          padding={{ left: 15, bottom: 30, right: 60, top: 10 }}
          xDomain={{ min: 1, max: 12 }}
          yDomain={{ min: 0, max: 20 }}
        >
          <HorizontalAxis
            tickCount={12}
            theme={{ labels: { formatter: (v) => v } }}
          />
          <VerticalAxis
            tickCount={5}
            theme={{ labels: { formatter: (v) => null } }}
          />
          <Area
            theme={{
              gradient: {
                from: { color: "#ffa502" },
                to: { color: "#ffa502", opacity: 0.4 },
              },
            }}
          />
          <Line
            tooltipComponent={<Tooltip />}
            theme={{
              stroke: { color: "#ffa502", width: 5 },
              scatter: { default: { width: 4, height: 4, rx: 2 } },
            }}
          />
        </Chart>
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
      tabStyle={styles.tabBarStyle}
      pressColor="transparent"
      style={styles.tabsStyle}
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
    <View style={{ flex: 1 }}>
      <TopFilter tabs={false} cats={false} />
      <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
        <View activeOpacity={0.8} style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderTitle}>
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
            <Icon name="chevron-right" type="feather" size={25} />
          </View>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            swipeEnabled={false}
          />
        </View>
        <View style={styles.middleContainer}>
          <Text style={{ color: "#272E3B", fontSize: 16, fontWeight: "bold" }}>
            2023 он
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ width: "20%" }}></Text>
            <Text style={{ width: "30%" }}>Төлөвлөгөөт</Text>
            <Text style={{ width: "30%" }}>Норматив</Text>
            <Text style={{ width: "20%" }}>Гүйцэтгэл</Text>
          </View>
          <View style={styles.whiteRow}>
            <Text style={styles.firstCol}>Орлого</Text>
            <Text style={styles.secondCol}>90,0₮ | 53,5%</Text>
            <Text style={styles.thirdCol}>90,0₮ | 53,5%</Text>
            <Text style={styles.col4}>90,0₮</Text>
          </View>
          <View style={styles.grayRow}>
            <Text style={styles.firstCol}>Зардал</Text>
            <Text style={styles.secondCol}>90,0₮ | 53,5%</Text>
            <Text style={styles.thirdCol}>90,0₮ | 53,5%</Text>
            <Text style={styles.col4}>90,0₮</Text>
          </View>
          <View style={styles.whiteRow}>
            <Text style={styles.firstCol}>Ашиг</Text>
            <Text style={styles.secondCol}>90,0₮ | 53,5%</Text>
            <Text style={styles.thirdCol}>90,0₮ | 53,5%</Text>
            <Text style={styles.col4}>90,0₮</Text>
          </View>
          <View style={styles.grayRow}>
            <Text style={styles.firstCol}>Дутуу</Text>
            <Text style={styles.secondCol}>90,0₮ | 53,5%</Text>
            <Text style={styles.thirdCol}>90,0₮ | 53,5%</Text>
            <Text style={styles.col4}>-- --</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PlanDtl;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingHorizontal: 10,
    paddingTop: 10,
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
    justifyContent: "space-between",
  },
  cardHeaderTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
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
  middleContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
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
    borderRadius: 8,
  },
  whiteRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  grayRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F2F3F5",
    padding: 5,
  },
  firstCol: {
    width: "20%",
    color: "#4E5969",
  },
  secondCol: {
    width: "30%",
    color: "#4E5969",
    fontWeight: "500",
  },
  thirdCol: {
    width: "30%",
    color: "#4E5969",
    fontWeight: "500",
  },
  col4: {
    width: "20%",
    color: "#4E5969",
    fontWeight: "500",
  },
  tabsStyle: {
    justifyContent: "center",
    backgroundColor: "transparent",
    elevation: 0,
    marginTop: 15,
  },
  tabBarStyle: {
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
  },
});
