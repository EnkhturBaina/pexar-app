import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useRef, useContext } from "react";
import {
  BUTTON_BORDER_RADIUS,
  MAIN_COLOR,
  MAIN_BACKGROUND_COLOR,
  REG_CHARS,
  MAIN_DARK_LEVEL9,
  INPUT_BG_COLOR,
} from "../constant";
import { useHeaderHeight } from "@react-navigation/elements";
import { Button, Icon } from "@rneui/base";
import BottomSheetReg from "../components/BottomSheetReg";
import CustomSnackbar from "../components/CustomSnackbar";
import CustomDialog from "../components/CustomDialog";
import MainContext from "../contexts/MainContext";
import CustomLookup from "../components/CustomLookup";
import BottomSheet from "../components/BottomSheet";

const EditUserDataScreen = () => {
  const state = useContext(MainContext);
  const headerHeight = useHeaderHeight();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [regCharA, setRegCharA] = useState("A");
  const [regCharB, setRegCharB] = useState("A");
  const [regNumber, setRegNumber] = useState("");

  const refRBSheet = useRef();
  const refRBSheet2 = useRef();
  const testArr = [
    { id: 1, name: "TEST1" },
    { id: 2, name: "TEST2" },
    { id: 3, name: "TEST3" },
  ];
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

  const [data, setData] = useState(""); //BottomSheet рүү дамжуулах Дата
  const [uselessParam, setUselessParam] = useState(false); //BottomSheet -г дуудаж байгааг мэдэх гэж ашиглаж байгамоо
  const [fieldName, setFieldName] = useState(""); //Context -н аль утгыг OBJECT -с update хийхийг хадгалах
  const [displayName, setDisplayName] = useState(""); //LOOKUP -д харагдах утга (display value)

  const [dialogText, setDialogText] = useState(""); //Dialog -н текст
  const [visibleDialog, setVisibleDialog] = useState(false); //Dialog харуулах
  const [dialogType, setDialogType] = useState("warning"); //Dialog харуулах төрөл

  const [loadingAction, setLoadingAction] = useState(false);

  const setLookupData = (data, field, display) => {
    // console.log("refRBSheet", refRBSheet);
    setData(data); //Lookup -д харагдах дата
    setFieldName(field); //Context -н object -н update хийх key
    setDisplayName(display); //Lookup -д харагдах датаны текст талбар
    setUselessParam(!uselessParam);
  };

  const [userProfileData, setUserProfileData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    region: "",
    phone: "",
    gender: "",
  });

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
        topPos={30}
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
            value={userProfileData.lastName}
            onChangeText={(e) =>
              setUserProfileData((prevState) => ({
                ...prevState,
                lastName: e,
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
            value={userProfileData.firstName}
            onChangeText={(e) =>
              setUserProfileData((prevState) => ({
                ...prevState,
                firstName: e,
              }))
            }
            style={styles.generalInput}
          />
        </View>

        <View style={styles.charContainer}>
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
        </View>
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
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.generalInput}
          />
        </View>
        <CustomLookup
          value={userProfileData.region?.name}
          press={() => {
            setLookupData(testArr, "region", "name");
          }}
          placeholder="Улс"
          iconType="ion-icons"
          iconName="flag"
        />
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
            value={phone}
            onChangeText={setPhone}
            keyboardType="number-pad"
            style={styles.generalInput}
            maxLength={8}
          />
        </View>
        <CustomLookup
          value={userProfileData.gender?.name}
          press={() => {
            setLookupData(testArr, "gender", "name");
          }}
          placeholder="Хүйс"
          iconType="material-community"
          iconName="heart-multiple"
        />
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
          onPress={() => {}}
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
        />
        <BottomSheet
          bodyText={data}
          dragDown={true}
          backClick={true}
          type="lookup"
          fieldName={fieldName}
          displayName={displayName}
          handle={uselessParam}
          action={(e) =>
            setUserProfileData((prevState) => ({
              ...prevState,
              [fieldName]: e,
            }))
          }
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
