import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { MAIN_BACKGROUND_COLOR, MAIN_COLOR_GRAY } from "../../../constant";
import { Icon } from "@rneui/themed";
import empty_full from "../../../../assets/empty_full.png";
import Base from "../../../../assets/Base.png";
import exl_folder from "../../../../assets/exl_folder.png";
import png_folder from "../../../../assets/png_folder.png";
import pdf_folder from "../../../../assets/pdf_folder.png";

const ListDtl = () => {
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
      <View style={styles.dtlContainer}>
        <View style={styles.cardHeader}>
          <Image
            source={Base}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
          <View style={{ flexDirection: "column", marginLeft: 5 }}>
            <Text style={{ fontWeight: "bold", color: "#272E3B" }}>
              "Смарт-Крафт" ХХК
            </Text>
            <Text style={{ fontSize: 12, color: "#4E5969" }}>5506913</Text>
          </View>
        </View>
        <Image
          source={empty_full}
          style={{ width: "100%", height: 180 }}
          resizeMode="contain"
        />
        <View style={styles.mobileContainer}>
          <Icon
            name="mobile"
            type="font-awesome-5"
            size={20}
            color="#272E3B"
            style={styles.inputIcon}
          />
          <Text style={{ flex: 1 }}>(+976) 9988-7766 7011-7755</Text>
        </View>
        <View style={styles.maiLContainer}>
          <Icon
            name="mail"
            type="ionicons"
            size={20}
            color="#272E3B"
            style={styles.inputIcon}
          />
          <Text style={{ flex: 1 }}>info@smartcraft.mn</Text>
        </View>
        <View style={styles.webContainer}>
          <Icon
            name="web"
            type="material-community"
            size={20}
            color="#272E3B"
            style={styles.inputIcon}
          />
          <Text style={{ flex: 1 }}>www.smart-craft.mn</Text>
        </View>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <Icon
            name="location-sharp"
            type="ionicon"
            size={20}
            color="#272E3B"
            style={styles.inputIcon}
          />
          <Text style={{ flex: 1 }}>
            City төв 10 давхар 1001 тоот, Б Алтангэрэлийн гудамж5, Сүхбаатар
            дүүрэг, Улаанбаатар хот, Монгол Улс
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Icon
            name="user"
            type="font-awesome"
            size={20}
            color="#272E3B"
            style={styles.inputIcon}
          />
          <View style={styles.rowDtl}>
            <Text style={{ fontSize: 12 }}>Б.Батболд</Text>
            <Text style={{ fontSize: 12 }}>/Захирал/</Text>
            <Text style={{ fontSize: 12 }}>Утас: 9999-8888</Text>
          </View>
        </View>
      </View>
      <View style={styles.filesContainer}>
        <TouchableOpacity style={styles.folderContainer}>
          <Image
            source={pdf_folder}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.folderContainer}>
          <Image
            source={exl_folder}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.folderContainer}>
          <Image
            source={png_folder}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ListDtl;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  dtlContainer: {
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
    marginVertical: 10,
  },
  inputIcon: {
    marginRight: 15,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  mobileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginLeft: 5,
  },
  maiLContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  webContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  folderContainer: {
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
    padding: 15,
    marginBottom: 10,
  },
  filesContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  rowContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  rowDtl: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
