import React, { useEffect, useState, useContext, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const UserContext = React.createContext();

export const UserStore = (props) => {
  const navigation = useNavigation();

  const [expoPushToken, setExpoPushToken] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [loginMsg, setLoginMsg] = useState("");
  const [token, setToken] = useState("");

  return (
    <UserContext.Provider
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
    </UserContext.Provider>
  );
};

export default UserContext;
