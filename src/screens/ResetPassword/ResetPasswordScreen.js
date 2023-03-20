import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  NativeModules,
  SafeAreaView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
const { StatusBarManager } = NativeModules;
import reset_pass from "../../../assets/reset_pass.png";
import {
  BUTTON_BORDER_RADIUS,
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../../constant";
import { Icon, Button } from "@rneui/base";
import { useHeaderHeight } from "@react-navigation/elements";

const ResetPasswordScreen = (props) => {
  const [email, setEmail] = useState("");
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS == "ios" ? "padding" : ""}
      style={{
        flex: 1,
      }}
    >
      <ScrollView bounces={false} contentContainerStyle={styles.loginContainer}>
        <Image
          source={reset_pass}
          style={{ width: "80%" }}
          resizeMode="contain"
        />
        <Text>Бүртгэлтэй И-Мэйл хаягаа оруулна уу.</Text>
        <View style={styles.sectionStyle}>
          <Icon
            name="mail"
            type="ion-icons"
            size={20}
            color={MAIN_COLOR_GRAY}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="И-Мэйл"
            value={email}
            onChangeText={setEmail}
            style={styles.generalInput}
          />
        </View>
        <View
          style={{
            width: "80%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Button
            title="Нэвтрэх"
            color={MAIN_COLOR}
            radius={BUTTON_BORDER_RADIUS}
            onPress={() => props.navigation.navigate("ConfirmOTPScreen")}
            titleStyle={{
              fontWeight: "bold",
            }}
            buttonStyle={{ height: 45, marginVertical: 10 }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    alignItems: "center",
  },
  sectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F5",
    height: 50,
    borderRadius: BUTTON_BORDER_RADIUS,
    margin: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "80%",
  },
  inputIcon: {
    marginLeft: 15,
    marginHorizontal: 10,
  },
  generalInput: {
    width: "80%",
    height: 50,
    fontWeight: "bold",
  },
});
