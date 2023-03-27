import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { Icon } from "@rneui/base";
import Base from "../../../../../assets/Base.png";
import TopFilter from "../../TopFilter";

const ReportDebtChartDtl = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.headerLeftContainer}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Icon name="arrow-left" type="feather" size={25} color="#FFF" />
          <Image
            source={Base}
            style={{ width: 30, height: 30, marginLeft: 5 }}
            resizeMode="contain"
          />
          <Text style={[styles.headerLeftText, { color: "#FFF" }]}>
            Төлөвлөгөө
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [props.navigation]);
  return (
    <View>
      <TopFilter tabs={true} cats={true} />
      <View>
        <Text>AAA</Text>
      </View>
    </View>
  );
};

export default ReportDebtChartDtl;

const styles = StyleSheet.create({
  headerLeftContainer: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeftText: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
    width: "100%",
  },
});
