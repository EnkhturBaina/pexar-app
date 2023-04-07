import { StyleSheet, View } from "react-native";
import React, { useContext, useEffect } from "react";
import TopFilter from "../TopFilter";
import MainContext from "../../../contexts/MainContext";
import MainReportOudt from "./OUDT/MainReportOudt";
import MainReportCass from "./CASS/MainReportCass";
import MainReportDebt from "./DEBT/MainReportDebt";

const Report = () => {
  const state = useContext(MainContext);
  useEffect(() => {
    var b_Ids = [];
    var years = [];
    var months = [];

    if (state.selectedReport.id == 1) {
      state.selectedMonths?.map((el) => {
        //Сонгогдсон жил, сар -г ARRAY болгох
        years.push(el.year);
        months.push(el.month);
      });
      state.userData.userData?.map((el) => {
        //Тухайн USER -н байгууллагуудын ID -г ARRAY болгох
        b_Ids.push(el.b_id);
      });
      state.getBalances(b_Ids, years, months);
    }
  }, []);

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
