import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Empty = ({ text, type, subtext }) => {
  var imageType = type;
  if (type == "warning") {
    imageType = require("../../assets/warning.png");
  } else if (type == "error") {
    imageType = require("../../assets/warning.png");
  } else if (type == "empty") {
    imageType = require("../../assets/warning.png");
  } else {
    imageType = require("../../assets/success.png");
  }
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {type ? (
        <Image
          source={imageType}
          style={{ width: "60%", height: "60%" }}
          resizeMode="contain"
        />
      ) : null}
      <Text style={styles.emptyText}>{text}</Text>
      {subtext ? <Text style={styles.emptySubText}>{subtext}</Text> : null}
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  emptyText: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  emptySubText: {
    textAlign: "center",
    marginTop: 10,
  },
});
