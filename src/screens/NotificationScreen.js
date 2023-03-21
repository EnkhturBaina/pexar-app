import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  NativeModules,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import {
  BUTTON_BORDER_RADIUS,
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../constant";
import { Icon } from "@rneui/base";
const { StatusBarManager } = NativeModules;
import gift from "../../assets/gift.png";
import up_arrow from "../../assets/up_arrow.png";
import { Modal, Portal, Provider } from "react-native-paper";

const NotificationScreen = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [filterValue, setFilterValue] = useState({ id: 0, name: "Бүгд" });

  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

  const filters = [
    { id: 0, name: "Бүгд" },
    { id: 1, name: "Уншсан" },
    { id: 2, name: "Шинэ" },
  ];

  return (
    <Provider>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
          backgroundColor: MAIN_BACKGROUND_COLOR,
          justifyContent: "space-between",
        }}
      >
        <View style={styles.filterContainer}>
          <Text style={{ fontWeight: "bold", marginRight: 10 }}>Мэдэгдэл</Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={showModal}
          >
            <Text>{filterValue.name}</Text>
            <Icon
              name="keyboard-arrow-down"
              type="material-icons"
              size={20}
              color={MAIN_COLOR_GRAY}
            />
          </TouchableOpacity>
          <Portal>
            <Modal
              visible={visibleModal}
              onDismiss={hideModal}
              contentContainerStyle={styles.modalContainerStyle}
            >
              <View style={{ flexDirection: "column" }}>
                {filters?.map((el, index) => {
                  return (
                    <TouchableOpacity
                      style={styles.eachReport}
                      key={index}
                      onPress={() => {
                        setFilterValue(el);
                        hideModal();
                      }}
                    >
                      <Text style={styles.reportText}>{el.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </Modal>
          </Portal>
        </View>
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.notifContainer}
        >
          <TouchableOpacity style={styles.eachContainer}>
            <View style={styles.greenDot}></View>
            <View style={styles.topContainer}>
              <Image source={gift} style={styles.icon} resizeMode="contain" />
              <Text style={{ fontWeight: "bold", marginLeft: 5, width: "90%" }}>
                "Смарт-Крафт" ХХК 29,000сая өр үүслээ.
              </Text>
            </View>
            <Text style={styles.bottomContainer}>Өчигдөр 9:42 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.eachContainer}>
            <View style={styles.greenDot}></View>
            <View style={styles.topContainer}>
              <Image
                source={up_arrow}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 5,
                  width: "90%",
                }}
              >
                Танд Адъяадоржоос +200 лояалти оноо бэлгэлээ
              </Text>
            </View>
            <Text style={styles.bottomContainer}>Өчигдөр 9:42 AM</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  notifContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingTop: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  filterContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 15,
  },
  eachContainer: {
    backgroundColor: "#E8F2ED",
    borderRadius: BUTTON_BORDER_RADIUS,
    flexDirection: "column",
    marginBottom: 10,
    padding: 15,
    width: "100%",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomContainer: {
    marginLeft: 40,
    marginTop: 20,
  },
  icon: {
    height: 30,
    width: 30,
  },
  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: MAIN_COLOR,
    position: "absolute",
    left: 8,
    top: 8,
  },
  modalContainerStyle: {
    backgroundColor: "white",
    padding: 20,
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 12,
    paddingBottom: 10,
  },
  eachReport: {
    flexDirection: "row",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    justifyContent: "center",
    marginBottom: 8,
    paddingVertical: 8,
    alignItems: "center",
  },
  reportText: {
    color: MAIN_COLOR,
    fontSize: 16,
    marginLeft: 5,
  },
});
