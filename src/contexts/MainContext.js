import React, { useEffect, useState, useContext, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { DEV_URL, X_API_KEY } from "../constant";

const MainContext = React.createContext();

export const UserStore = (props) => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState("dorjoffice@gmail.com");
  const [expoPushToken, setExpoPushToken] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  const [loginMsg, setLoginMsg] = useState("");
  const [token, setToken] = useState("");
  const [rememberUserName, setRememberUserName] = useState(false);

  const [lookUpType, setLookUpType] = useState("");

  const [selectedReport, setSelectedReport] = useState({
    id: 0,
    name: "Жагсаалт",
    iconType: "ionicon",
    iconName: "document-text-outline",
    key: "List",
  });
  const [selectedHeader, setSelectedHeader] = useState(1);
  const [cardMenu, setCardMenu] = useState(1);

  useEffect(() => {
    getLocalUserData();
  }, []);

  const login = async (userName, password, rememberEmail) => {
    //***** Нэвтрэх
    setIsLoading(true);
    await axios({
      method: "post",
      url: `${DEV_URL}authentication/login`,
      headers: {
        "X-API-KEY": X_API_KEY,
      },
      data: {
        email: userName,
        password,
      },
    })
      .then(async (response) => {
        if (rememberEmail) {
          //Нэвтрэх нэр сануулах CHECK хийсэн үед тухайн утсан дээр EMAIL хагалах
          await AsyncStorage.setItem("login_email", userName);
        } else {
          //Нэвтрэх нэр сануулах UNCHECK хийсэн үед тухайн утсан дээрээс EMAIL устгах
          await AsyncStorage.removeItem("login_email");
        }
        // console.log("responee login", response.data.response);
        if (response.status == 200) {
          //*** access token хадгалах
          AsyncStorage.setItem(
            "accessToken",
            response.data.response.accessToken
          );
          //*** refresh token хадгалах
          AsyncStorage.setItem(
            "refreshToken",
            response.data.response.refreshToken
          );
          setAccessToken(response.data.response.accessToken);
          setRefreshToken(response.data.response.refreshToken);
          setIsLoggedIn(true);
          setIsLoading(false);
        }
      })
      .catch(function (error) {
        setIsLoggedIn(false);
        setIsLoading(false);
        console.log("error login", error);
      });
  };

  const getLocalUserData = () => {
    //*** LocalStorage -с мэдээлэл уншиж авах
    try {
      //*** access token уншиж авах
      AsyncStorage.getItem("accessToken")
        .then((accessToken_local) => {
          setAccessToken(accessToken_local);
        })
        .then(() => {
          //*** refresh token уншиж авах
          AsyncStorage.getItem("refreshToken")
            .then((refreshToken_local) => {
              setRefreshToken(refreshToken_local);
              refreshToken_local ? setIsLoggedIn(true) : setIsLoggedIn(false);
            })
            .then(() => {
              setIsLoading(false);
            });
        });
    } catch (error) {
      console.log("error");
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };
  const logout = () => {
    AsyncStorage.removeItem("accessToken");
    AsyncStorage.removeItem("refreshToken");
    AsyncStorage.removeItem("userData");
    setIsLoggedIn(false);
  };
  return (
    <MainContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
        loginMsg,
        setLoginMsg,
        token,
        expoPushToken,
        logout,
        rememberUserName,
        setRememberUserName,
        userName,
        setUserName,
        lookUpType,
        setLookUpType,
        selectedReport,
        setSelectedReport,
        cardMenu,
        setCardMenu,
        selectedHeader,
        setSelectedHeader,
        login,
        accessToken,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
