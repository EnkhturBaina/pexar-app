import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import {
  BUTTON_BORDER_RADIUS,
  MAIN_COLOR,
  MAIN_BACKGROUND_COLOR,
  MAIN_DARK_LEVEL9,
  INPUT_BG_COLOR,
  DEV_URL,
  X_API_KEY,
} from "../constant";
import { useHeaderHeight } from "@react-navigation/elements";
import { Button, Icon } from "@rneui/base";
import CustomSnackbar from "../components/CustomSnackbar";
import CustomDialog from "../components/CustomDialog";
import MainContext from "../contexts/MainContext";
import axios from "axios";

const EditUserDataScreen = () => {
  const state = useContext(MainContext);
  const headerHeight = useHeaderHeight();
  const [editableData, setEditableData] = useState("");

  const regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const [visibleSnack, setVisibleSnack] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");
  //Snacbkbar харуулах
  const onToggleSnackBar = (msg) => {
    setVisibleSnack(!visibleSnack);
    setSnackBarMsg(msg);
  };

  //Snacbkbar хаах
  const onDismissSnackBar = () => setVisibleSnack(false);

  const [dialogText, setDialogText] = useState(""); //Dialog -н текст
  const [visibleDialog, setVisibleDialog] = useState(false); //Dialog харуулах
  const [dialogType, setDialogType] = useState("warning"); //Dialog харуулах төрөл

  const [loadingAction, setLoadingAction] = useState(false);

  useEffect(() => {
    setEditableData(state.userData?.user);
  }, []);

  const editUserData = async () => {
    if (editableData.LastUserName == "") {
      onToggleSnackBar("Овогоо оруулна уу.");
    } else if (editableData.UserName == "") {
      onToggleSnackBar("Нэрээ оруулна уу.");
    } else if (editableData.email == "") {
      onToggleSnackBar("И-мэйл оруулна уу.");
    } else if (!regex_email.test(editableData.email)) {
      onToggleSnackBar("И-мэйл хаягаа зөв оруулна уу.");
    } else if (editableData.mobile == "") {
      onToggleSnackBar("Утасны дугаараа оруулна уу.");
    } else {
      setLoadingAction(true);
      await axios({
        method: "patch",
        url: `${DEV_URL}user/${editableData.UserPkID}`,
        headers: {
          "X-API-KEY": X_API_KEY,
          Authorization: `Bearer ${state.accessToken}`,
        },
        data: {
          LastUserName: editableData.LastUserName,
          UserName: editableData.UserName,
          email: editableData.email,
          mobile: editableData.mobile,
        },
      })
        .then(async (response) => {
          // console.log("edit UserData", response.status);
          if (response.status == 200) {
            state.setUserData((prevState) => ({
              ...prevState,
              user: editableData,
            }));
            setDialogText("Мэдээлэл амжилттай засварлагдлаа");
            setDialogType("success");
            setVisibleDialog(true);
          }
          setLoadingAction(false);
        })
        .catch(function (error) {
          setLoadingAction(false);
          // console.log("err", error);
          // console.log("error get History", error.response);
          if (error?.response?.status == 401) {
            state.setLoginError("Холболт салсан байна дахин нэвтэрнэ үү.");
            state.logout();
          }
        });
    }
  };
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS == "ios" ? "padding" : ""}
      style={{
        flex: 1,
      }}
    >
      <CustomSnackbar
        visible={visibleSnack}
        dismiss={onDismissSnackBar}
        text={snackBarMsg}
        topPos={0}
      />
      <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
        <View style={styles.sectionStyle}>
          <Icon
            name="user"
            type="font-awesome"
            size={20}
            color={MAIN_DARK_LEVEL9}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Овог"
            value={editableData.LastUserName}
            onChangeText={(e) =>
              setEditableData((prevState) => ({
                ...prevState,
                LastUserName: e,
              }))
            }
            style={styles.generalInput}
          />
        </View>
        <View style={styles.sectionStyle}>
          <Icon
            name="user"
            type="font-awesome"
            size={20}
            color={MAIN_DARK_LEVEL9}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Нэр"
            value={editableData.UserName}
            onChangeText={(e) =>
              setEditableData((prevState) => ({
                ...prevState,
                UserName: e,
              }))
            }
            style={styles.generalInput}
          />
        </View>

        {/* <View style={styles.charContainer}>
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={styles.regCharOpacity}
          >
            <Text style={styles.onlyChar}>{regCharA}</Text>
            <BottomSheetReg
              sheetRef={refRBSheet}
              bodyText={REG_CHARS}
              sheetheight={300}
              setDataFunction={setRegCharA}
              dragDown={true}
              backClick={true}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => refRBSheet2.current.open()}
            style={styles.regCharOpacity}
          >
            <Text style={styles.onlyChar}>{regCharB}</Text>
            <BottomSheetReg
              sheetRef={refRBSheet2}
              bodyText={REG_CHARS}
              sheetheight={300}
              setDataFunction={setRegCharB}
              dragDown={true}
              backClick={true}
            />
          </TouchableOpacity>

          <TextInput
            placeholder="Регистр"
            value={regNumber}
            onChangeText={setRegNumber}
            keyboardType="number-pad"
            style={styles.onlyRegNum}
            returnKeyType="done"
            maxLength={8}
          />
        </View> */}
        <View style={styles.sectionStyle}>
          <Icon
            name="mail"
            type="entypo"
            size={20}
            color={MAIN_DARK_LEVEL9}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="И-мэйл"
            value={editableData.email}
            onChangeText={(e) =>
              setEditableData((prevState) => ({
                ...prevState,
                email: e,
              }))
            }
            keyboardType="email-address"
            style={styles.generalInput}
          />
        </View>
        {/* <CustomLookup
          value={userProfileData.region?.name}
          press={() => {
            setLookupData(testArr, "region", "name");
          }}
          placeholder="Улс"
          iconType="ion-icons"
          iconName="flag"
        /> */}
        <View style={styles.sectionStyle}>
          <Icon
            name="mobile"
            type="entypo"
            size={20}
            color={MAIN_DARK_LEVEL9}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Утасны дугаар"
            value={editableData.mobile}
            onChangeText={(e) =>
              setEditableData((prevState) => ({
                ...prevState,
                mobile: e,
              }))
            }
            keyboardType="number-pad"
            style={styles.generalInput}
            maxLength={8}
          />
        </View>
        {/* <CustomLookup
          value={userProfileData.gender?.name}
          press={() => {
            setLookupData(testArr, "gender", "name");
          }}
          placeholder="Хүйс"
          iconType="material-community"
          iconName="heart-multiple"
        /> */}
        <Button
          disabled={loadingAction}
          containerStyle={styles.btnContainer}
          title={
            <>
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Засварлах
              </Text>
              {loadingAction ? (
                <ActivityIndicator style={{ marginLeft: 5 }} color="#fff" />
              ) : null}
            </>
          }
          color={MAIN_COLOR}
          radius={BUTTON_BORDER_RADIUS}
          onPress={() => editUserData()}
          titleStyle={{
            fontWeight: "bold",
          }}
          buttonStyle={{ height: 45 }}
        />
        <CustomDialog
          visible={visibleDialog}
          confirmFunction={() => {
            setVisibleDialog(false);
          }}
          declineFunction={() => {}}
          text={dialogText}
          confirmBtnText="Хаах"
          DeclineBtnText=""
          type={dialogType}
          dialogColor={MAIN_COLOR}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditUserDataScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnContainer: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    width: "100%",
  },
  sectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: INPUT_BG_COLOR,
    height: 56,
    borderRadius: BUTTON_BORDER_RADIUS,
    margin: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
  },
  inputIcon: {
    marginLeft: 15,
    marginHorizontal: 10,
  },
  generalInput: {
    width: "100%",
    height: 50,
    color: MAIN_DARK_LEVEL9,
  },
  regCharOpacity: {
    height: 50,
    borderRadius: BUTTON_BORDER_RADIUS,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    marginRight: 10,
    backgroundColor: INPUT_BG_COLOR,
  },
  charContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    height: 50,
    marginVertical: 10,
  },
  onlyRegNum: {
    borderRadius: BUTTON_BORDER_RADIUS,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: INPUT_BG_COLOR,
  },
  onlyChar: {
    textAlign: "center",
    fontSize: 16,
  },
});
