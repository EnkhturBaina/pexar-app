import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainContext from "../contexts/MainContext";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HRScreen from "../screens/HRScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import { Icon } from "@rneui/base";
import { MAIN_BACKGROUND_COLOR } from "../constant";
import EditUserDataScreen from "../screens/EditUserDataScreen";
import { useNavigation } from "@react-navigation/native";
import PrivacyScreen from "../screens/PrivacyScreen";

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  const navigation = useNavigation();
  const state = useContext(MainContext);
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: MAIN_BACKGROUND_COLOR,
        },
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "",
          headerTitleStyle: {},
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{
          title: "",
          headerTitleStyle: {},
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerLeftContainer}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="arrow-left" type="feather" size={25} />
              <Text style={styles.headerLeftText}>Нууц үг мартсан</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const HomeScreenStackNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "",
          headerTitleStyle: {},
          headerLeft: () => <></>,
        }}
      />
    </Stack.Navigator>
  );
};

const HRScreenStackNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="HRScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Stack.Screen
        name="HRScreen"
        component={HRScreen}
        options={{
          title: "",
          headerTitleStyle: {},
          headerLeft: () => <></>,
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: MAIN_BACKGROUND_COLOR,
        },
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "",
          headerShown: false,
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="EditUserDataScreen"
        component={EditUserDataScreen}
        options={{
          title: "",
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerLeftContainer}
              onPress={() => {
                props.navigation.navigate("ProfileScreen");
              }}
            >
              <Icon name="arrow-left" type="feather" size={25} />
              <Text style={styles.headerLeftText}>Профайл</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="PrivacyScreen"
        component={PrivacyScreen}
        options={{
          title: "",
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerLeftContainer}
              onPress={() => {
                props.navigation.navigate("ProfileScreen");
              }}
            >
              <Icon name="arrow-left" type="feather" size={25} />
              <Text style={styles.headerLeftText}>Нууцлал</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export {
  LoginStackNavigator,
  HomeScreenStackNavigator,
  HRScreenStackNavigator,
  ProfileStackNavigator,
};

const styles = StyleSheet.create({
  headerLeftContainer: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeftText: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 20,
    width: "100%",
  },
});
