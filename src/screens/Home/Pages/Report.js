import { StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import TopFilter from "../TopFilter";
import { MAIN_BACKGROUND_COLOR, MAIN_COLOR_GRAY } from "../../../constant";
import ReportDiagram from "./ReportDiagram";
import MainContext from "../../../contexts/MainContext";
import ReportChart from "./ReportChart";
import ReportList from "./ReportList";

const Report = () => {
  const state = useContext(MainContext);
  return (
    <View style={{ flex: 1 }}>
      <TopFilter tabs={true} cats={true} />
      {state.cardMenu == 1 ? <ReportDiagram /> : null}
      {state.cardMenu == 2 ? <ReportChart /> : null}
      {state.cardMenu == 3 ? <ReportList /> : null}
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({});
