import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  BUTTON_BORDER_RADIUS,
  INPUT_BG_COLOR,
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
  MAIN_COLOR_RED,
} from "../../constant";
import enterNewPassword from "../../../assets/enterNewPassword.png";
import { Button, Icon } from "@rneui/base";
import { useHeaderHeight } from "@react-navigation/elements";
import CustomDialog from "../../components/CustomDialog";

const NewPasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setHideRepeatPassword] = useState(true);

  const [dialogText, setDialogText] = useState(""); //Dialog -н текст
  const [visibleDialog, setVisibleDialog] = useState(false); //Dialog харуулах
  const [dialogType, setDialogType] = useState("success"); //Dialog харуулах төрөл

  const headerHeight = useHeaderHeight();

  const hideShowPassword = () => {
    setHidePassword(!hidePassword);
  };
  const hideShowRepeatPassword = () => {
    setHideRepeatPassword(!hideRepeatPassword);
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS == "ios" ? "padding" : ""}
      style={{
        flex: 1,
      }}
    >
      <StatusBar
        translucent
        barStyle={Platform.OS == "ios" ? "dark-content" : "default"}
      />
      <ScrollView bounces={false} contentContainerStyle={styles.loginContainer}>
        <Image
          source={enterNewPassword}
          style={{ width: "80%", height: 300 }}
          resizeMode="contain"
        />
        <Text>Шинэ нууц үгээ оруулна уу.</Text>
        <View style={styles.sectionStyle}>
          <Icon
            name="locked"
            type="fontisto"
            size={20}
            color={MAIN_COLOR_GRAY}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Нууц үг"
            value={password}
            onChangeText={setPassword}
            style={styles.generalInput}
            returnKeyType="done"
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity
            style={styles.imageStyle}
            onPress={() => hideShowPassword()}
          >
            <Icon
              name={hidePassword ? "eye" : "eye-closed"}
              type="octicon"
              color={MAIN_COLOR_GRAY}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionStyle}>
          <Icon
            name="locked"
            type="fontisto"
            size={20}
            color={MAIN_COLOR_GRAY}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Нууц үг давтах"
            value={repeatPassword}
            onChangeText={setRepeatPassword}
            style={styles.generalInput}
            returnKeyType="done"
            secureTextEntry={hideRepeatPassword}
          />
          <TouchableOpacity
            style={styles.imageStyle}
            onPress={() => hideShowRepeatPassword()}
          >
            <Icon
              name={hideRepeatPassword ? "eye" : "eye-closed"}
              type="octicon"
              color={MAIN_COLOR_GRAY}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: 20,
          }}
        >
          <Button
            title="Баталгаажуулах"
            color={MAIN_COLOR}
            radius={BUTTON_BORDER_RADIUS}
            onPress={() => {
              setVisibleDialog(true);
            }}
            titleStyle={{
              fontWeight: "bold",
            }}
            buttonStyle={{ height: 45 }}
          />
        </View>
        <CustomDialog
          visible={visibleDialog}
          confirmFunction={() => {
            setVisibleDialog(false);
          }}
          declineFunction={() => {
            setVisibleDialog(false);
          }}
          text="Та нууц үгээ амжилттай солилоо."
          confirmBtnText="Гарах"
          DeclineBtnText=""
          type={dialogType}
          title=""
          dialogColor={dialogType == "success" ? MAIN_COLOR : MAIN_COLOR_RED}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 50,
    borderRadius: BUTTON_BORDER_RADIUS,
    margin: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "80%",
    backgroundColor: INPUT_BG_COLOR,
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
  imageStyle: {
    position: "absolute",
    zIndex: 999,
    right: "5%",
  },
  loginContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingVertical: 20,
    alignItems: "center",
  },
});
