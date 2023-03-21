import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { MAIN_COLOR, MAIN_COLOR_B1, MAIN_COLOR_GRAY } from "../../constant";
import { Icon } from "@rneui/base";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import MainContext from "../../contexts/MainContext";

const TopFilter = ({ tabs }) => {
  console.log("tabs", tabs);
  const state = useContext(MainContext);
  const [menu, setMenu] = useState(1);
  const [visibleReport, setVisibleReport] = useState(false);

  const showModal = () => setVisibleReport(true);
  const hideModal = () => setVisibleReport(false);
  const reports = [
    {
      id: 0,
      name: "Жагсаалт",
      iconType: "ionicon",
      iconName: "document-text-outline",
      key: "List",
    },
    {
      id: 1,
      name: "Тайлан",
      iconType: "ionicon",
      iconName: "document-text-outline",
      key: "Report",
    },
    {
      id: 2,
      name: "Төлөвлөгөө",
      iconType: "ionicon",
      iconName: "calculator-outline",
      key: "Plan",
    },
    {
      id: 3,
      name: "Бараа материал",
      iconType: "simple-line-icon",
      iconName: "handbag",
      key: "Inventory",
    },
    {
      id: 4,
      name: "Гүйлгээ",
      iconType: "font-awesome",
      iconName: "credit-card",
      key: "Transaction",
    },
    {
      id: 5,
      name: "Борлуулалт",
      iconType: "font-awesome",
      iconName: "credit-card",
      key: "Sales",
    },
  ];
  return (
    <View style={styles.topFilterContainer}>
      <View style={styles.firstRowContainer}>
        <TouchableOpacity style={styles.filterContainer} onPress={showModal}>
          <Text style={{ color: "#fff" }}>{state.selectedReport?.name}</Text>
          <Icon
            name="keyboard-arrow-down"
            type="material-icons"
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
        <Portal>
          <Modal
            visible={visibleReport}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContainerStyle}
          >
            <View style={{ flexDirection: "column" }}>
              {reports?.map((el, index) => {
                return (
                  <TouchableOpacity
                    style={styles.eachReport}
                    key={index}
                    onPress={() => {
                      state.setSelectedReport(el);
                      hideModal();
                    }}
                  >
                    <Icon
                      name={el.iconName}
                      type={el.iconType}
                      size={20}
                      color={MAIN_COLOR}
                    />
                    <Text style={styles.reportText}>{el.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </Modal>
        </Portal>
        <TouchableOpacity style={styles.filterContainer}>
          <Text style={{ color: "#fff" }}>1,2,4 -р сар</Text>
          <Icon name="sliders" type="font-awesome" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      {tabs ? (
        <View style={styles.secondRowContainer}>
          <TouchableOpacity
            style={[
              styles.eachMenu,
              menu == 1
                ? {
                    backgroundColor: MAIN_COLOR,
                    borderRadius: 8,
                  }
                : null,
            ]}
            onPress={() => setMenu(1)}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: menu == 1 ? "bold" : "normal",
                textAlign: "center",
              }}
            >
              ОҮДТ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.eachMenu,
              menu == 2
                ? {
                    backgroundColor: MAIN_COLOR,
                    borderRadius: 8,
                  }
                : null,
            ]}
            onPress={() => setMenu(2)}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: menu == 2 ? "bold" : "normal",
                textAlign: "center",
              }}
            >
              Харилцах/Касс
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.eachMenu,
              menu == 3
                ? {
                    backgroundColor: MAIN_COLOR,
                    borderRadius: 8,
                  }
                : null,
            ]}
            onPress={() => setMenu(3)}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: menu == 3 ? "bold" : "normal",
                textAlign: "center",
              }}
            >
              Авлага/Өглөг
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default TopFilter;

const styles = StyleSheet.create({
  topFilterContainer: {
    padding: 10,
    backgroundColor: MAIN_COLOR,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  firstRowContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  filterContainer: {
    flexDirection: "row",
    backgroundColor: MAIN_COLOR_B1,
    alignItems: "center",
    width: "48%",
    height: 35,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  secondRowContainer: {
    backgroundColor: MAIN_COLOR_B1,
    width: "100%",
    flexDirection: "row",
    height: 47,
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  eachMenu: {
    width: "33%",
    justifyContent: "center",
    height: 39,
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
  modalContainerStyle: {
    backgroundColor: "white",
    padding: 20,
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 12,
    paddingBottom: 10,
  },
});
