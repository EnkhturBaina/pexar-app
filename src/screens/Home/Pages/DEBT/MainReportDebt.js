import { StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import MainContext from "../../../../contexts/MainContext";
// import ReportDiagram from "./OUDT/ReportDiagram";
// import ReportChart from "./OUDT/ReportChart";
// import ReportList from "./OUDT/ReportList";

const MainReportDebt = () => {
  const state = useContext(MainContext);
  return (
    <View style={{ flex: 1 }}>
      {/* {state.cardMenu == 1 ? <ReportDiagram /> : null}
      {state.cardMenu == 2 ? <ReportChart /> : null}
      {state.cardMenu == 3 ? <ReportList /> : null} */}
    </View>
  );
};

export default MainReportDebt;

const styles = StyleSheet.create({});
