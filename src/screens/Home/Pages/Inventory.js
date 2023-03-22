import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import TopFilter from "../TopFilter";
import { Searchbar } from "react-native-paper";
import { Icon } from "@rneui/base";
import {
  BUTTON_BORDER_RADIUS,
  MAIN_BACKGROUND_COLOR,
  MAIN_COLOR_GRAY,
} from "../../../constant";
import { TextInput } from "react-native";
const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={{ flex: 1, backgroundColor: MAIN_BACKGROUND_COLOR }}>
      <TopFilter tabs={false} cats={false} />
      <View
        style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
      >
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
        <TouchableOpacity
          onPress={() => console.log("A")}
          style={{ width: "20%" }}
        >
          <Icon
            name="filter"
            type="feather"
            size={20}
            color={MAIN_COLOR_GRAY}
          />
        </TouchableOpacity>
      </View>
      <Text>Inventory</Text>
    </View>
  );
};

export default Inventory;

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: BUTTON_BORDER_RADIUS,
    margin: 10,
    marginRight: "auto",
    marginLeft: "auto",
    width: "80%",
  },
  inputIcon: {
    marginLeft: 15,
    marginHorizontal: 10,
  },
  generalInput: {
    width: "80%",
    fontWeight: "bold",
  },
});
