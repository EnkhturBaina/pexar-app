import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { BUTTON_BORDER_RADIUS, MAIN_COLOR } from "../constant";
import { Dialog } from "@rneui/themed";

export default function ({
  visible, //Харуулах эсэх
  confirmFunction,
  declineFunction,
  text,
  confirmBtnText,
  DeclineBtnText,
  type, //Dialog харуулах төрөл ['success', 'warning', 'error']
}) {
  var imageType = null;
  if (type == "warning") {
    imageType = require("../../assets/warning.png");
  } else if (type == "error") {
    imageType = require("../../assets/error.png");
  } else {
    imageType = require("../../assets/success.png");
  }

  return (
    <Dialog
      isVisible={visible}
      overlayStyle={{
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: BUTTON_BORDER_RADIUS,
        alignItems: "center",
      }}
    >
      <Image
        source={imageType}
        style={{ width: 150, height: 150 }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        {text}
      </Text>
      <Dialog.Actions>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Dialog.Button
            title={confirmBtnText}
            onPress={() => confirmFunction()}
            containerStyle={styles.dialogBtn}
            radius={BUTTON_BORDER_RADIUS}
            titleStyle={{
              fontWeight: "bold",
              color: "#fff",
            }}
          />
          {DeclineBtnText != "" ? (
            <Dialog.Button
              title={DeclineBtnText}
              onPress={() => declineFunction()}
              containerStyle={styles.dialogDeclineBtn}
              radius={BUTTON_BORDER_RADIUS}
              titleStyle={{
                fontWeight: "bold",
                color: "#000",
              }}
            />
          ) : null}
        </View>
      </Dialog.Actions>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  dialogBtn: {
    marginBottom: 5,
    marginHorizontal: 20,
    backgroundColor: MAIN_COLOR,
  },
  dialogDeclineBtn: {
    marginHorizontal: 20,
  },
});
