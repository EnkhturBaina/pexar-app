import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import TopFilter from "../TopFilter";
import {
  BUTTON_BORDER_RADIUS,
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../../../constant";
import { useHeaderHeight } from "@react-navigation/elements";
import empty_img from "../../../../assets/empty_img.png";
import { Modal, Portal, Provider } from "react-native-paper";
import { Icon, CheckBox, Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const Inventory = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const headerHeight = useHeaderHeight();

  const [visibleFilter, setVisibleFilter] = useState(false);

  const showModal = () => setVisibleFilter(true);
  const hideModal = () => setVisibleFilter(false);
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
              value={searchQuery}
              onChangeText={setSearchQuery}
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
                      backgroundColor:"transparent"
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
                      backgroundColor:"transparent"
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
                      backgroundColor:"transparent"
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
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.mainContainer}
        >
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("InventoryDtl")}
          >
            <View style={styles.stack1}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={empty_img}
                  style={{ width: 80, height: 80 }}
                  resizeMode="contain"
                />
                <View style={styles.topMidContent}>
                  <Text style={{ fontWeight: "bold", color: "#272E3B" }}>
                    Хар үзгэн бал
                  </Text>
                  <Text style={styles.lightText}>#1234 5678 9000</Text>
                  <Text style={styles.lightText}>Хэмжих нэгж: Ширхэг</Text>
                  <Text style={styles.lightText}>Тоо хэмжээ:100</Text>
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
                    2,000₮
                  </Text>
                </View>
                <View style={styles.grayBtn}>
                  <Text style={styles.lightText}>Зарах үнэ</Text>
                  <Text style={styles.boldText}>2,200₮</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text style={styles.boldText}>Барааны төрөл</Text>
                <Text style={{ fontSize: 10, color: "#4E5969" }}>
                  Бичиг хэрэг
                </Text>
              </View>
              <View style={styles.bottomMidContent}>
                <Text style={styles.boldText}>Бүлэг</Text>
                <Text style={{ fontSize: 10, color: "#4E5969" }}>
                  Бичиг хэрэг
                </Text>
              </View>
              <View style={{ width: "33%", alignItems: "center" }}>
                <Text style={styles.boldText}>Брэнд</Text>
                <Text style={{ fontSize: 10, color: "#4E5969" }}>BEst pen</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </Provider>
  );
};

export default Inventory;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingHorizontal: 10,
    paddingBottom: 10,
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
