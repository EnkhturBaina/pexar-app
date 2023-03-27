import { StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import ReportCassDiagram from "./ReportCassDiagram";
import ReportCassChart from "./ReportCassChart";
import ReportCassList from "./ReportCassList";
import MainContext from "../../../../contexts/MainContext";

const MainReportCass = () => {
  const state = useContext(MainContext);
  return (
    <View style={{ flex: 1 }}>
      {state.cardMenu == 1 && state.selectedHeader == 2 ? <ReportCassDiagram /> : null}
      {state.cardMenu == 2 && state.selectedHeader == 2 ? <ReportCassChart /> : null}
      {state.cardMenu == 3 && state.selectedHeader == 2 ? <ReportCassList /> : null}
    </View>
  );
};

export default MainReportCass;

const styles = StyleSheet.create({});
