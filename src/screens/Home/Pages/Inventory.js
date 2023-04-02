import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  FlatList,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import TopFilter from "../TopFilter";
import {
  BUTTON_BORDER_RADIUS,
  DEV_URL,
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
  X_API_KEY,
} from "../../../constant";
import { useHeaderHeight } from "@react-navigation/elements";
import empty_img from "../../../../assets/empty_img.png";
import { Modal, Portal, Provider } from "react-native-paper";
import { Icon, CheckBox, Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import InventorySkeleton from "../../../Skeletons/InventorySkeleton";
import axios from "axios";
import { useContext } from "react";
import MainContext from "../../../contexts/MainContext";

const Inventory = (props) => {
  const state = useContext(MainContext);
  const navigation = useNavigation();
  const [searchData, setSearchData] = useState(""); //Хайсан үг
  const [isEmpty, setIsEmpty] = useState(""); //Хайсан үг олдоогүй
  const [filteredData, setFilteredData] = useState([]); //Хайсан үгийг агуулсан дата хадгалах
  const [isLoadingData, setIsLoadingData] = useState(false); //Server -с дата татаж байх үед харагдах
  const [isListEnd, setIsListEnd] = useState(false); //Бүх дата харуулж дууссан үед харагдах
  const [serverData, setServerData] = useState([]); //Үндсэн дата

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const headerHeight = useHeaderHeight();

  const [visibleFilter, setVisibleFilter] = useState(false);

  const showModal = () => setVisibleFilter(true);
  const hideModal = () => setVisibleFilter(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getInventoryData();
  }, []);

  useEffect(() => {
    setFilteredData(filterByValue(serverData, searchData));
  }, [searchData]);

  const filterByValue = (arrayOfObject, term) => {
    //Бичсэн утгаар Array of Objects -с хайх
    var ans = {};
    ans = arrayOfObject.filter(function (v, i) {
      if (
        v.m_name?.toLowerCase().indexOf(term.toLowerCase()) >= 0 ||
        v.m_group?.toLowerCase().indexOf(term.toLowerCase()) >= 0 ||
        v.m_brand?.toLowerCase().indexOf(term.toLowerCase()) >= 0
      ) {
        return true;
      } else false;
    });
    if (serverData != "" && ans == "") {
      setIsEmpty("Үр дүн олдсонгүй.");
    } else {
      setIsEmpty("");
    }
    return ans;
  };

  const getInventoryData = async () => {
    setIsLoadingData(true);
    console.log("getInventory Data");
    await axios({
      method: "get",
      url: `${DEV_URL}material`,
      headers: {
        "X-API-KEY": X_API_KEY,
        Authorization: `Bearer ${state.accessToken}`,
      },
    })
      .then((response) => {
        // console.log("response dic", response.data);
        if (response.data.response == "") {
          setIsListEnd(true);
        }
        setServerData(response.data.response); //Хуучин байсан дата дээр нэмж хадгалах
        setIsLoadingData(false);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log("error dic", error);
        setIsLoadingData(false);
        setIsLoading(false);
        if (error.response) {
          // console.log("error saveWord", error.response.status);
          if (error.response.status == "401") {
            state.setIsLoggedIn(false);
          }
        }
      });
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigation.navigate("InventoryDtl")}
      >
        <View style={styles.stack1}>
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              flex: 1,
            }}
          >
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={styles.topMidContent}>
              <Text style={{ fontWeight: "bold", color: "#272E3B" }}>
                {item.m_name == "" || item.m_name == null ? "-" : item.m_name}
              </Text>
              <Text style={styles.lightText}>
                {item.barcode == "" || item.barcode == null
                  ? "-"
                  : item.barcode}
              </Text>
              <Text style={styles.lightText}>
                Хэмжих нэгж:
                {item.ratecode == "" || item.ratecode == null
                  ? "-"
                  : item.ratecode}
              </Text>
              <Text style={styles.lightText}>
                Тоо хэмжээ:
                {item.countC2 == "" || item.countC2 == null
                  ? "-"
                  : item.countC2}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.greenBtn}>
              <Text style={[styles.lightText, { color: "#EC7A09" }]}>
                Өртөг
              </Text>
              <Text style={[styles.boldText, { color: "#EC7A09" }]}>
                {item.m_cost} ₮
              </Text>
            </View>
            <View style={styles.grayBtn}>
              <Text style={styles.lightText}>Зарах үнэ</Text>
              <Text style={styles.boldText}>{item.price_low} ₮</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{ width: "33%", alignItems: "center" }}>
            <Text style={styles.boldText}>Барааны төрөл</Text>
            <Text style={{ fontSize: 10, color: "#4E5969" }}>
              {item.m_type == "" || item.m_type == null ? "-" : item.m_type}
            </Text>
          </View>
          <View style={styles.bottomMidContent}>
            <Text style={styles.boldText}>Бүлэг</Text>
            <Text style={{ fontSize: 10, color: "#4E5969" }}>
              {item.m_group == "" || item.m_group == null ? "-" : item.m_group}
            </Text>
          </View>
          <View style={{ width: "33%", alignItems: "center" }}>
            <Text style={styles.boldText}>Брэнд</Text>
            <Text style={{ fontSize: 10, color: "#4E5969" }}>
              {item.m_brand == "" || item.m_brand == null ? "-" : item.m_brand}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{}}>
        {/* SERVICE -с дата харуулах үед */}
        {isLoadingData && (
          <View>
            <TouchableOpacity activeOpacity={0.9}>
              <ActivityIndicator
                color={MAIN_COLOR}
                style={{ marginVertical: 10 }}
                size="large"
              />
            </TouchableOpacity>
          </View>
        )}
        {/* SERVICE -с дата харуулж дууссан үед */}
        {searchData == "" && isListEnd ? (
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            Бүгдийг харууллаа.
          </Text>
        ) : null}
        {isEmpty != "" ? (
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            {isEmpty}
          </Text>
        ) : null}
      </View>
    );
  };
  return (
    <Provider>
      <KeyboardAvoidingView
        keyboardVerticalOffset={headerHeight}
        behavior={Platform.OS == "ios" ? "padding" : ""}
        style={{
          flex: 1,
        }}
      >
        <TopFilter tabs={false} cats={false} />
        <View style={styles.headerContainer}>
          <View style={styles.sectionStyle}>
            <Icon
              name="search"
              type="feather"
              size={20}
              color={MAIN_COLOR_GRAY}
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="Хайх"
              value={searchData}
              onChangeText={setSearchData}
              style={styles.generalInput}
              returnKeyType="done"
            />
          </View>
          <TouchableOpacity onPress={showModal} style={styles.filterContainer}>
            <Icon
              name="filter"
              type="feather"
              size={20}
              color={MAIN_COLOR_GRAY}
            />
          </TouchableOpacity>
          <Portal>
            <Modal
              visible={visibleFilter}
              onDismiss={hideModal}
              contentContainerStyle={styles.modalContainerStyle}
            >
              <View style={{ flexDirection: "column" }}>
                <View>
                  <CheckBox
                    checked={check1}
                    checkedColor={MAIN_COLOR}
                    containerStyle={{
                      padding: 0,
                      backgroundColor: "transparent",
                    }}
                    onPress={() => setCheck1(!check1)}
                    size={25}
                    title="Барааны төрөл"
                    uncheckedColor={MAIN_COLOR}
                    uncheckedIcon="checkbox-blank-outline"
                    checkedIcon="checkbox-outline"
                    iconType="material-community"
                  />
                  <CheckBox
                    checked={check2}
                    checkedColor={MAIN_COLOR}
                    containerStyle={{
                      padding: 0,
                      backgroundColor: "transparent",
                    }}
                    onPress={() => setCheck2(!check2)}
                    size={25}
                    title="Барааны бүлэг"
                    uncheckedColor={MAIN_COLOR}
                    uncheckedIcon="checkbox-blank-outline"
                    checkedIcon="checkbox-outline"
                    iconType="material-community"
                  />
                  <CheckBox
                    checked={check3}
                    checkedColor={MAIN_COLOR}
                    containerStyle={{
                      padding: 0,
                      backgroundColor: "transparent",
                    }}
                    onPress={() => setCheck3(!check3)}
                    size={25}
                    title="Барааны брэнд"
                    uncheckedColor={MAIN_COLOR}
                    uncheckedIcon="checkbox-blank-outline"
                    checkedIcon="checkbox-outline"
                    iconType="material-community"
                  />
                  <View
                    style={{
                      width: "80%",
                      marginRight: "auto",
                      marginLeft: "auto",
                    }}
                  >
                    <Button
                      title="Болсон"
                      color={MAIN_COLOR}
                      radius={BUTTON_BORDER_RADIUS}
                      onPress={() => {
                        hideModal();
                      }}
                      titleStyle={{
                        fontWeight: "bold",
                      }}
                      buttonStyle={{ height: 40, marginVertical: 10 }}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </Portal>
        </View>
        <View style={styles.mainContainer}>
          {isLoading ? (
            <InventorySkeleton />
          ) : (
            <FlatList
              data={searchData == "" ? serverData : filteredData}
              style={{ width: "100%", marginTop: 0 }}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              ListFooterComponent={renderFooter} //List ны хамгийн доор харагдах
              onEndReached={state.getWords} //Scroll доошоо тулхад ажиллах
              onEndReachedThreshold={0.2}
              estimatedItemSize={100}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </Provider>
  );
};

export default Inventory;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  greenBtn: {
    minWidth: 70,
    height: 36,
    backgroundColor: "#F7CC8B",
    borderRadius: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  grayBtn: {
    minWidth: 70,
    height: 36,
    backgroundColor: "#C9CDD4",
    borderRadius: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  stack1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  boldText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4E5969",
  },
  lightText: {
    fontSize: 12,
    color: "#4E5969",
  },
  topMidContent: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "space-around",
  },
  bottomMidContent: {
    borderLeftColor: "#E5E6EB",
    borderLeftWidth: 1,
    borderRightColor: "#E5E6EB",
    borderRightWidth: 1,
    width: "33%",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  sectionStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    opacity: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 8,
    marginRight: 10,
    height: 48,
  },
  inputIcon: {
    marginLeft: 15,
    marginHorizontal: 10,
  },
  generalInput: {
    fontWeight: "bold",
    height: 48,
    width: "80%",
  },
  filterContainer: {
    borderColor: MAIN_COLOR_GRAY,
    backgroundColor: "#FFF",
    opacity: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 8,
    width: 48,
    height: 48,
    justifyContent: "center",
  },
  cardContainer: {
    borderColor: MAIN_COLOR_GRAY,
    backgroundColor: "#FFF",
    opacity: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 8,
    flexDirection: "column",
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  modalContainerStyle: {
    backgroundColor: "white",
    padding: 20,
    width: "60%",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 12,
    paddingBottom: 10,
    alignItems: "center",
  },
});
