import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
  NativeModules,
} from "react-native";
import React, { useContext, useState } from "react";
import avatar from "../../assets/avatar.png";
import {
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR_GRAY,
  MAIN_COLOR_RED,
} from "../constant";
import { Icon } from "@rneui/base";
import { Divider } from "react-native-paper";
import CustomDialog from "../components/CustomDialog";
import MainContext from "../contexts/MainContext";
import { useNavigation } from "@react-navigation/native";
const { StatusBarManager } = NativeModules;
import logout from "../../assets/profileIcons/logout.png";
import privacy from "../../assets/profileIcons/privacy.png";
import settings from "../../assets/profileIcons/settings.png";
import user from "../../assets/profileIcons/user.png";

const ProfileScreen = (props) => {
  const state = useContext(MainContext);
  const navigation = useNavigation();
  const [visibleDialog, setVisibleDialog] = useState(false); //Dialog харуулах
  const [dialogType, setDialogType] = useState("warning"); //Dialog харуулах төрөл
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
      }}
    >
      <ScrollView contentContainerStyle={styles.mainContainer} bounces={false}>
        <StatusBar
          translucent
          barStyle={Platform.OS == "ios" ? "dark-content" : "default"}
        />
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Image
            source={avatar}
            resizeMode="contain"
            style={{ width: 140, height: 140, borderRadius: 280 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              marginTop: 10,
              color: MAIN_COLOR_GRAY,
            }}
          >
            М. Туул
          </Text>
          <Text
            style={{
              color: MAIN_COLOR_GRAY,
            }}
          >
            +(976) 8803 2985
          </Text>
        </View>
        <Divider
          style={{
            backgroundColor: "#A9AEB8",
            height: 1.5,
            marginVertical: 20,
          }}
        />
        <View style={styles.menuContainer}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.profileMenuContainer}
              onPress={() => props.navigation.navigate("EditUserDataScreen")}
            >
              <View style={styles.stack1}>
                <Image
                  source={user}
                  resizeMode="contain"
                  style={{ width: 30, height: 30 }}
                />
                <Text style={styles.cardText}>Профайл засах</Text>
              </View>
              <Icon
                name="keyboard-arrow-right"
                type="material-icons"
                color={MAIN_COLOR_GRAY}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileMenuContainer}
              onPress={() => props.navigation.navigate("PrivacyScreen")}
            >
              <View style={styles.stack1}>
                <Image
                  source={privacy}
                  resizeMode="contain"
                  style={{ width: 30, height: 30 }}
                />
                <Text style={styles.cardText}>Нууцлал</Text>
              </View>
              <Icon
                name="keyboard-arrow-right"
                type="material-icons"
                color={MAIN_COLOR_GRAY}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileMenuContainer}
              onPress={() => {}}
            >
              <View style={styles.stack1}>
                <Image
                  source={settings}
                  resizeMode="contain"
                  style={{ width: 30, height: 30 }}
                />
                <Text style={styles.cardText}>Хэл солих</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: MAIN_COLOR_GRAY }}>Монгол хэл (MN)</Text>
                <Icon
                  name="keyboard-arrow-right"
                  type="material-icons"
                  color={MAIN_COLOR_GRAY}
                />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.profileMenuContainer}
            onPress={() => state.logout()}
          >
            <View style={styles.stack1}>
              <Image
                source={logout}
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
              />
              <Text style={[styles.cardText, { color: MAIN_COLOR_RED }]}>
                Системээс гарах
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <CustomDialog
          visible={visibleDialog}
          confirmFunction={() => {
            setVisibleDialog(false);
            state.logout();
          }}
          declineFunction={() => {
            setVisibleDialog(false);
          }}
          text="Системээс гарах уу?"
          confirmBtnText="Гарах"
          DeclineBtnText="Хаах"
          type={dialogType}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingHorizontal: 20,
  },
  menuContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  profileMenuContainer: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  cardText: {
    fontWeight: "bold",
    marginLeft: 10,
    color: MAIN_COLOR_GRAY,
  },
  stack1: {
    flexDirection: "row",
    alignItems: "center",
  },
});
