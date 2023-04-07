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
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import TopFilter from "../TopFilter";
import {
  DEV_URL,
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
  X_API_KEY,
} from "../../../constant";
import { useHeaderHeight } from "@react-navigation/elements";
import empty_img from "../../../../assets/empty_img.png";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import InventorySkeleton from "../../../Skeletons/InventorySkeleton";
import axios from "axios";
import { useContext } from "react";
import MainContext from "../../../contexts/MainContext";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef } from "react";

const Inventory = (props) => {
  const state = useContext(MainContext);
  const navigation = useNavigation();
  const [searchData, setSearchData] = useState(""); //Хайсан үг
  const [isEmpty, setIsEmpty] = useState(""); //Хайсан үг олдоогүй
  const [filteredData, setFilteredData] = useState([]); //Хайсан үгийг агуулсан дата хадгалах
  const [isLoadingData, setIsLoadingData] = useState(false); //Server -с дата татаж байх үед харагдах
  const [isListEnd, setIsListEnd] = useState(false); //Бүх дата харуулж дууссан үед харагдах
  const [serverData, setServerData] = useState([]); //Үндсэн дата

  const [selectedCompany, setSelectedCompany] = useState(null);
  const sheetRef = useRef(); //Bottomsheet

  const headerHeight = useHeaderHeight();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    selectedCompany != null && getInventoryData();
  }, [selectedCompany]);

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
    console.log("selectedCompany", selectedCompany);
    setServerData([]);
    setIsLoadingData(true);
    await axios({
      method: "get",
      url: `${DEV_URL}material/all`,
      headers: {
        "X-API-KEY": X_API_KEY,
        Authorization: `Bearer ${state.userData?.accessToken}`,
      },
      params: {
        b_id: selectedCompany.b_id,
      },
    })
      .then((response) => {
        console.log(
          "response dic",
          JSON.stringify(response.data.response.data)
        );
        if (response.data.response.data == "") {
          setIsListEnd(true);
        }
        setServerData(response.data.response.data); //Хуучин байсан дата дээр нэмж хадгалах
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
    console.log("ITEM", item);
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
        <TouchableOpacity
          onPress={() => sheetRef.current.open()}
          style={styles.filterContainer}
        >
          <Icon
            name="filter"
            type="feather"
            size={20}
            color={MAIN_COLOR_GRAY}
          />
        </TouchableOpacity>
      </View>
      {selectedCompany ? (
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
              // onEndReached={getInventoryData} //Scroll доошоо тулхад ажиллах
              onEndReachedThreshold={0.2}
              estimatedItemSize={100}
            />
          )}
        </View>
      ) : null}
      <RBSheet
        ref={sheetRef}
        height={300}
        closeOnDragDown={true} //sheet -г доош чирж хаах
        closeOnPressMask={true} //sheet -н гадна дарж хаах
        customStyles={{
          container: {
            backgroundColor: "#fff",
            flexDirection: "column",
            borderTopEndRadius: 16,
            borderTopStartRadius: 16,
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <View style={styles.bottomSheetContainer}>
          <View style={styles.lookupcontainer}>
            {selectedCompany ? (
              <Text
                style={{
                  padding: 5,
                  borderRadius: 12,
                  backgroundColor: MAIN_COLOR,
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 5,
                }}
              >
                {selectedCompany.b_name}
              </Text>
            ) : null}
            <ScrollView
              contentContainerStyle={{
                backgroundColor: "#fff",
              }}
            >
              {state.userData?.userData?.length > 1 ? (
                state.userData?.userData?.map((el, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setSelectedCompany(el);
                        sheetRef.current.close();
                      }}
                    >
                      <Text style={styles.bottomSheetBodyLookup}>
                        {el.b_id} - {el.b_name}
                      </Text>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedCompany(state.userData?.userData[0]);
                    sheetRef.current.close();
                  }}
                >
                  <Text style={styles.bottomSheetBodyLookup}>
                    {state.userData?.userData[0]?.b_name}
                  </Text>
                </TouchableOpacity>
              )}
            </ScrollView>
          </View>
        </View>
      </RBSheet>
    </KeyboardAvoidingView>
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
  bottomSheetContainer: {
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  lookupcontainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    paddingBottom: Platform.OS == "ios" ? 30 : 25,
  },
  bottomSheetBodyLookup: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
});
