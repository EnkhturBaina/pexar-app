import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import TopFilter from "../TopFilter";
import MainContext from "../../../contexts/MainContext";
import MainReportOudt from "./OUDT/MainReportOudt";
import MainReportCass from "./CASS/MainReportCass";
import MainReportDebt from "./DEBT/MainReportDebt";

const Report = () => {
  const state = useContext(MainContext);
  return (
    <View style={{ flex: 1 }}>
      <TopFilter tabs={true} cats={true} />
      {state.selectedHeader == 1 ? <MainReportOudt /> : null}
      {state.selectedHeader == 2 ? <MainReportCass /> : null}
      {state.selectedHeader == 3 ? <MainReportDebt /> : null}
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({});
