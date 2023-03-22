import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import TopFilter from "../TopFilter";
import { Icon } from "@rneui/base";
import { MAIN_BACKGROUND_COLOR, MAIN_COLOR_GRAY } from "../../../constant";
import { TextInput } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import empty_img from "../../../../assets/empty_img.png";

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS == "ios" ? "padding" : ""}
      style={{
        flex: 1,
      }}
    >
      <TopFilter tabs={false} cats={false} />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          padding: 10,
          justifyContent: "space-between",
        }}
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
      <ScrollView bounces={false} contentContainerStyle={styles.mainContainer}>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={empty_img}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "column" }}>
              <Text>Хар үзгэн бал</Text>
              <Text>#1234 5678 9000</Text>
              <Text>Хэмжих нэгж: Ширхэг</Text>
              <Text>Тоо хэмжээ:100</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Өртөг 2,000₮</Text>
              <Text>Зарах үнэ 2,200₮</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Барааны төрөл</Text>
            <Text>Бүлэг</Text>
            <Text>Брэнд</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
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
});
