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
  title,
  dialogColor,
}) {
  var imageType = null;
  if (type == "warning") {
    imageType = require("../../assets/warning.png");
  } else if (type == "error") {
    imageType = require("../../assets/error.png");
  } else if (type == "success") {
    imageType = require("../../assets/success.png");
  } else {
    imageType = null;
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
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 10,
          color: dialogColor,
        }}
      >
        {title}
      </Text>
      {imageType ? (
        <Image
          source={imageType}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        />
      ) : null}
      <Text
        style={{
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
            flexDirection: "row",
          }}
        >
          {DeclineBtnText != "" ? (
            <Dialog.Button
              title={DeclineBtnText}
              onPress={() => declineFunction()}
              containerStyle={styles.dialogDeclineBtn}
              radius={8}
              titleStyle={{
                fontWeight: "bold",
                color: "#000",
              }}
            />
          ) : null}
          <Dialog.Button
            title={confirmBtnText}
            onPress={() => confirmFunction()}
            containerStyle={[
              styles.dialogBtn,
              { backgroundColor: dialogColor },
            ]}
            radius={8}
            titleStyle={{
              fontWeight: "bold",
              color: "#fff",
            }}
          />
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
    width: "48%",
    height: 40,
    justifyContent: "center",
  },
  dialogDeclineBtn: {
    width: "48%",
    height: 40,
    justifyContent: "center",
  },
});
