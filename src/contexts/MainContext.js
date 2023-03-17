import React, { useEffect, useState, useContext, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const MainContext = React.createContext();

export const UserStore = (props) => {
  const navigation = useNavigation();

  const [expoPushToken, setExpoPushToken] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [loginMsg, setLoginMsg] = useState("");
  const [token, setToken] = useState("");

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
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
