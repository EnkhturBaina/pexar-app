import { StyleSheet, Text, Platform, Image } from "react-native";
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreenStackNavigator,
  LoginStackNavigator,
  HRScreenStackNavigator,
  ProfileStackNavigator,
} from "./MainStackNavigation";
import MainContext from "../contexts/MainContext";
import { MAIN_COLOR, MAIN_COLOR_GRAY } from "../constant";
import SplashScreen from "../screens/SplashScreen";
import wallet from "../../assets/tabBarIcons/wallet.png";
import wallet_filled from "../../assets/tabBarIcons/wallet_filled.png";
import messages from "../../assets/tabBarIcons/messages.png";
import messages_filled from "../../assets/tabBarIcons/messages_filled.png";
import notification from "../../assets/tabBarIcons/notification.png";
import notification_filled from "../../assets/tabBarIcons/notification_filled.png";
import people from "../../assets/tabBarIcons/people.png";
import people_filled from "../../assets/tabBarIcons/people_filled.png";
import profile from "../../assets/tabBarIcons/profile.png";
import profile_filled from "../../assets/tabBarIcons/profile_filled.png";

const Tab = createBottomTabNavigator();
const HomeScreenTabNavigation = () => {
  const state = useContext(MainContext);
  if (state.isLoading) {
    // Апп ачааллах бүрт SplashScreen харуулах
    return <SplashScreen />;
  } else if (!state.isLoading && !state.isLoggedIn) {
    // Нэвтрээгүй үед
    return <LoginStackNavigator />;
  } else {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "below-icon",
          headerShown: false,
          tabBarStyle: {},
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeScreenStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => {
              return <Image source={focused ? wallet_filled : wallet} />;
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    color: focused ? MAIN_COLOR : MAIN_COLOR_GRAY,
                    fontWeight: focused ? "bold" : "normal",
                    fontSize: 12,
                  }}
                >
                  Санхүү
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="HRTab"
          component={HRScreenStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => {
              return <Image source={focused ? people_filled : people} />;
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    color: focused ? MAIN_COLOR : MAIN_COLOR_GRAY,
                    fontWeight: focused ? "bold" : "normal",
                    fontSize: 12,
                  }}
                >
                  Хүний нөөц
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="ChatTab"
          component={ProfileStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => {
              return <Image source={focused ? messages_filled : messages} />;
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    color: focused ? MAIN_COLOR : MAIN_COLOR_GRAY,
                    fontWeight: focused ? "bold" : "normal",
                    fontSize: 12,
                  }}
                >
                  Чат
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="NotifTab"
          component={ProfileStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image source={focused ? notification_filled : notification} />
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    color: focused ? MAIN_COLOR : MAIN_COLOR_GRAY,
                    fontWeight: focused ? "bold" : "normal",
                    fontSize: 12,
                  }}
                >
                  Мэдэгдэл
                </Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => {
              return <Image source={focused ? profile_filled : profile} />;
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    color: focused ? MAIN_COLOR : MAIN_COLOR_GRAY,
                    fontWeight: focused ? "bold" : "normal",
                    fontSize: 12,
                  }}
                >
                  Профайл
                </Text>
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
};

export default HomeScreenTabNavigation;

const styles = StyleSheet.create({});
