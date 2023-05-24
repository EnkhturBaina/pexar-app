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
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Button, CheckBox } from "@rneui/themed";
import {
  BUTTON_BORDER_RADIUS,
  INPUT_BG_COLOR,
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../constant";
import { Icon } from "@rneui/base";
import MainContext from "../contexts/MainContext";
import logo_black from "../../assets/logo_black.png";
import { useHeaderHeight } from "@react-navigation/elements";
import CustomSnackbar from "../components/CustomSnackbar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = (props) => {
  const state = useContext(MainContext);
  const headerHeight = useHeaderHeight();

  const [password, setPassword] = useState("dlVvhG");
  const [hidePassword, setHidePassword] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [selectedInput, setSelectedInput] = useState("");

  const [visibleSnack, setVisibleSnack] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  //Snacbkbar харуулах
  const onToggleSnackBar = (msg) => {
    setVisibleSnack(!visibleSnack);
    setSnackBarMsg(msg);
  };

  //Snacbkbar хаах
  const onDismissSnackBar = () => setVisibleSnack(false);

  const hideShowPassword = () => {
    setHidePassword(!hidePassword);
  };

  const login = () => {
    // if (state.userName == "") {
    //   onToggleSnackBar("И-мэйл оруулна уу.");
    // } else if (password == "") {
    //   onToggleSnackBar("Нууц үг оруулна уу.");
    // } else {
    //   state.login(state.userName, password, state.rememberUserName);
    // }
    // state.setIsLoggedIn(true);
    state.login(state.userName, password, state.rememberUserName);
  };
  const onFocus = (type) => {
    setSelectedInput(type == "userName" ? "userName" : "password");
    setBackgroundColor("#ECF5FF");
    setBorderColor(MAIN_COLOR);
  };
  const onBlur = (type) => {
    setSelectedInput("");
    setBackgroundColor("#fff");
    setBorderColor(MAIN_COLOR_GRAY);
  };

  useEffect(() => {
    AsyncStorage.getItem("login_email").then((res) => {
      if (res != null) {
        state.setUserName(res);
        state.setRememberUserName(true);
      }
    });
  }, []);

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
        <CustomSnackbar
          visible={visibleSnack}
          dismiss={onDismissSnackBar}
          text={snackBarMsg}
          topPos={30}
        />
        <Image source={logo_black} style={styles.logo} />
        <Text style={{ fontSize: 36 }}>Нэвтрэх хэсэг</Text>
        {state.loginError != "" ? (
          <Text
            style={{
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {state.loginError}
          </Text>
        ) : null}
        <View
          style={[
            styles.sectionStyle,
            {
              backgroundColor:
                selectedInput == "userName" ? backgroundColor : INPUT_BG_COLOR,
              borderColor:
                selectedInput == "userName" ? borderColor : MAIN_COLOR_GRAY,
            },
          ]}
        >
          <Icon
            name="user"
            type="font-awesome"
            size={20}
            color={selectedInput == "userName" ? MAIN_COLOR : MAIN_COLOR_GRAY}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Нэвтрэх нэр"
            value={state.userName}
            onChangeText={state.setUserName}
            style={styles.generalInput}
            onFocus={() => onFocus("userName")}
            onBlur={() => onBlur("userName")}
          />
        </View>
        <View
          style={[
            styles.sectionStyle,
            {
              backgroundColor:
                selectedInput == "password" ? backgroundColor : INPUT_BG_COLOR,
              borderColor:
                selectedInput == "password" ? borderColor : MAIN_COLOR_GRAY,
            },
          ]}
        >
          <Icon
            name="locked"
            type="fontisto"
            size={20}
            color={selectedInput == "password" ? MAIN_COLOR : MAIN_COLOR_GRAY}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Нууц үг"
            value={password}
            onChangeText={setPassword}
            style={styles.generalInput}
            returnKeyType="done"
            secureTextEntry={hidePassword}
            onFocus={() => onFocus("password")}
            onBlur={() => onBlur("password")}
          />
          <TouchableOpacity
            style={styles.imageStyle}
            onPress={() => hideShowPassword()}
          >
            <Icon
              name={hidePassword ? "eye" : "eye-closed"}
              type="octicon"
              color={selectedInput == "password" ? MAIN_COLOR : MAIN_COLOR_GRAY}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.stackView}>
          <CheckBox
            title="Сануулах"
            checked={state.rememberUserName}
            onPress={() => state.setRememberUserName(!state.rememberUserName)}
            containerStyle={styles.checkbox}
            uncheckedIcon="checkbox-blank-outline"
            checkedIcon="checkbox-outline"
            iconType="material-community"
            checkedColor={MAIN_COLOR}
            textStyle={{
              fontWeight: "bold",
              fontWeight: "normal",
            }}
          />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("ResetPasswordScreen");
            }}
          >
            <Text style={{ color: MAIN_COLOR }}>Нууц үг мартсан</Text>
          </TouchableOpacity>
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
            onPress={login}
            titleStyle={{
              fontWeight: "bold",
            }}
            buttonStyle={{ height: 45 }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 230,
    height: 60,
    marginBottom: 20,
  },
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
  },
  loginError: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
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
  stackView: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    // backgroundColor: "red",
    marginRight: "auto",
    marginLeft: "auto",
  },
  checkbox: {
    marginLeft: 0,
    paddingLeft: 0,
    // paddingTop: 0,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  imageStyle: {
    position: "absolute",
    zIndex: 999,
    right: "5%",
  },
  headerLeftContainer: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  dividerContainer: {
    width: "80%",
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: MAIN_COLOR_GRAY,
  },
  socialContainer: {
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialIconContainer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: BUTTON_BORDER_RADIUS,
    borderWidth: 1,
    borderColor: MAIN_COLOR_GRAY,
  },
  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
