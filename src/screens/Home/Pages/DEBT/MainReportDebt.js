import { StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import MainContext from "../../../../contexts/MainContext";
import ReportDebtDiagram from "./ReportDebtDiagram";
import ReportDebtChart from "./ReportDebtChart";
import ReportDebtList from "./ReportDebtList";

const MainReportDebt = () => {
  const state = useContext(MainContext);
  return (
    <View style={{ flex: 1 }}>
    {state.cardMenu == 1 && state.selectedHeader == 3 ? <ReportDebtDiagram /> : null}
    {state.cardMenu == 2 && state.selectedHeader == 3 ? <ReportDebtChart /> : null}
    {state.cardMenu == 3 && state.selectedHeader == 3 ? <ReportDebtList /> : null}
    </View>
  );
};

export default MainReportDebt;

const styles = StyleSheet.create({});
