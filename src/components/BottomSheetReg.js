import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { MAIN_COLOR, MAIN_COLOR_GRAY, TEXT_COLOR_GRAY } from "../constant";

const BottomSheetReg = ({
  sheetRef,
  bodyText, //sheet -н text
  sheetheight, //sheet -н өндөр
  setDataFunction, //Регистрийн дугаарын үсэг хадгалах FUNCTION
  dragDown, //sheet -г доош чирж хаах
  backClick, //sheet -н гадна дарж хаах
}) => {
  return (
    <RBSheet
      ref={sheetRef}
      height={sheetheight}
      closeOnDragDown={dragDown} //sheet -г доош чирж хаах
      closeOnPressMask={backClick} //sheet -н гадна дарж хаах
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
        <FlatList
          style={{ width: "100%", padding: 10 }}
          data={bodyText}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setDataFunction(item);
                sheetRef.current.close();
              }}
            >
              <Text style={styles.bottomSheetBodyReg}>{item}</Text>
            </TouchableOpacity>
          )}
          numColumns={6}
          keyExtractor={(item, index) => index}
        />
      </View>
    </RBSheet>
  );
};

export default BottomSheetReg;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  lookupcontainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    paddingBottom: 15,
    paddingTop: 10,
  },
  bottomSheetBody: {
    margin: 10,
    textAlign: "center",
    fontSize: 18,
  },
  bottomSheetBodyReg: {
    marginRight: 15,
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 4,
    borderColor: MAIN_COLOR_GRAY,
    padding: 5,
    textAlign: "center",
    alignItems: "center",
    width: 40,
    height: 30,
    color: TEXT_COLOR_GRAY,
  },
  bottomSheetBodyLookup: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
    color: TEXT_COLOR_GRAY,
  },
});
