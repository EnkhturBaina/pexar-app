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

  const [userData, setUserData] = useState(null);
  const [userCompanies, setUserCompanies] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [loginMsg, setLoginMsg] = useState("");
  const [rememberUserName, setRememberUserName] = useState(false);

  const [isLoadingReport, setIsLoadingReport] = useState(true);
  const [reportData, setReportData] = useState(null);

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

  const current_date = new Date();
  const [currentYear, setCurrentYear] = useState(current_date.getFullYear());
  const [selectedMonths, setSelectedMonths] = useState([
    {
      value: "2023-3",
      label: "2023-3",
      year: 2023,
      month: 3,
    },
  ]);

  useEffect(() => {
    userData == null && getLocalUserData();
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
          setUserData(response.data.response);
          await AsyncStorage.setItem(
            "userLocalData",
            JSON.stringify(response.data.response)
          ).then(() => {
            setIsLoggedIn(true);
            setIsLoading(false);
          });
        }
      })
      .catch(function (error) {
        setIsLoggedIn(false);
        setIsLoading(false);
        console.log("error login", error);
      });
  };

  const getLocalUserData = () => {
    console.log("get LocalUserData");
    //*** LocalStorage -с мэдээлэл уншиж авах
    try {
      //*** access token уншиж авах
      AsyncStorage.getItem("userLocalData")
        .then((user_local_data) => {
          // console.log("user_local_data", user_local_data);
          if (user_local_data != null) {
            setUserData(JSON.parse(user_local_data));
            setIsLoggedIn(true);
          }
        })
        .then(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log("error");
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  const calcSum = (key) => {
    let sum = reportData?.reduce(function (prev, current) {
      return prev + +current[key];
    }, 0);
    return sum ? sum?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") : 0;
  };

  const getBalances = async (b_Ids, years, months) => {
    // Жилийн давхардал арилгах
    var axios_years = [...new Set(years)];
    // console.log("b_Ids", b_Ids?.toString());
    // console.log("years", axios_years?.toString());
    // console.log("months", months?.toString());

    setIsLoadingReport(true);
    await axios({
      method: "get",
      url: `${DEV_URL}client/amountBalances`,
      headers: {
        "X-API-KEY": X_API_KEY,
        Authorization: `Bearer ${userData.accessToken}`,
      },
      params: {
        b_id: b_Ids?.toString(),
        ryear: axios_years?.toString(),
        rmonth: months?.toString(),
      },
    })
      .then((response) => {
        // console.log("response.data.response", response.data.response);
        setReportData(response.data.response);
        setIsLoadingReport(false);
      })
      .catch(function (error) {
        console.log("error dic", error);
        setIsLoadingReport(false);
        if (error.response) {
          // console.log("error saveWord", error.response.status);
          if (error.response.status == "401") {
            setIsLoggedIn(false);
          }
        }
      });
  };

  const logout = () => {
    AsyncStorage.removeItem("userLocalData");
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
        reportData,
        isLoadingReport,
        getBalances,
        userData,
        userCompanies,
        currentYear,
        selectedMonths,
        setCurrentYear,
        setSelectedMonths,
        calcSum,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
