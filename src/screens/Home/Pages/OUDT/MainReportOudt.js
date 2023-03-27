import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import ReportDiagram from "./ReportDiagram";
import ReportChart from "./ReportChart";
import ReportList from "./ReportList";
import MainContext from "../../../../contexts/MainContext";

const MainReportOudt = () => {
  const state = useContext(MainContext);
  return (
    <View style={{ flex: 1 }}>
      {state.cardMenu == 1 && state.selectedHeader == 1 ? <ReportDiagram /> : null}
      {state.cardMenu == 2 && state.selectedHeader == 1 ? <ReportChart /> : null}
      {state.cardMenu == 3 && state.selectedHeader == 1 ? <ReportList /> : null}
    </View>
  );
};

export default MainReportOudt;

const styles = StyleSheet.create({});
