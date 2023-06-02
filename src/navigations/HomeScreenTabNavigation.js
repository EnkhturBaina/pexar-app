import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreenStackNavigator,
  LoginStackNavigator,
  HRScreenStackNavigator,
  ProfileStackNavigator,
  NotifScreenStackNavigator,
  ChatScreenStackNavigator,
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
import updateImg from "../../assets/updateImg.png";
import { Button } from "@rneui/themed";

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
      <>
        {state.isUpdate ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <Image
              source={updateImg}
              style={{ width: "60%", height: "40%" }}
              resizeMode="contain"
            />
            <Text
              style={{
                width: "80%",
                textAlign: "center",
                marginVertical: 40,
              }}
            >
              Аппын шинэ хувилбар гарсан байна. Шинэчилнэ үү
            </Text>
            <Button
              containerStyle={{
                width: "80%",
                marginTop: 10,
                marginRight: "auto",
                marginLeft: "auto",
              }}
              buttonStyle={{
                backgroundColor: MAIN_COLOR,
                borderRadius: 12,
                paddingVertical: 10,
              }}
              title="Шинэчлэх"
              titleStyle={{
                fontSize: 16,
              }}
              onPress={() => {
                state.doUpdate();
              }}
            />
          </View>
        ) : (
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
                        fontSize: 12,
                      }}
                    >
                      Санхүү
                    </Text>
                  );
                },
              }}
            />
            {/* <Tab.Screen
          name="HRTab"
          component={HRScreenStackNavigator}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
            },
          }}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={focused ? people_filled : people}
                  style={{ opacity: 0.5 }}
                />
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    color: focused ? MAIN_COLOR : MAIN_COLOR_GRAY,
                    fontSize: 12,
                    opacity: 0.5,
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
          component={ChatScreenStackNavigator}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
            },
          }}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={focused ? messages_filled : messages}
                  style={{ opacity: 0.5 }}
                />
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    color: focused ? MAIN_COLOR : MAIN_COLOR_GRAY,
                    fontSize: 12,
                    opacity: 0.5,
                  }}
                >
                  Чат
                </Text>
              );
            },
          }}
        /> */}
            <Tab.Screen
              name="NotifTab"
              component={NotifScreenStackNavigator}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image
                      source={focused ? notification_filled : notification}
                    />
                  );
                },
                tabBarLabel: ({ focused }) => {
                  return (
                    <Text
                      style={{
                        color: focused ? MAIN_COLOR : MAIN_COLOR_GRAY,
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
        )}
      </>
    );
  }
};

export default HomeScreenTabNavigation;

const styles = StyleSheet.create({});
