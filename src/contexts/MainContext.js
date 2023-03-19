import React, { useEffect, useState, useContext, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const MainContext = React.createContext();

export const UserStore = (props) => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState("");
  const [expoPushToken, setExpoPushToken] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [loginMsg, setLoginMsg] = useState("");
  const [token, setToken] = useState("");
  const [rememberUserName, setRememberUserName] = useState(false);

  const [lookUpType, setLookUpType] = useState("");

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
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
