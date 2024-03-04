import { View, Text } from "react-native";
import { styles } from "./styles";
import { EditBlue,
         EditGray,
         EditOrange,
         EditYellow } from "../../EditTask"; 

import { ModalDelBlue,
         ModalDelFGray,
         ModalDelOrange,
         ModalDelYellow } from "../DeleteTask";

export function Task({ category, date, title }) {
  function chooseStyle() {
    if (category === "Personal") {
      return styles.containerPersonal;
    } else if (category === "Professional") {
      return styles.containerProfessional;
    } else if (category === "Academic") {
      return styles.containerAcademic;
    } else if (category === "Social") {
      return styles.containerSocial;
    }
  }

  function chooseIcon() {
    if (category === "Personal") {
      return (
        <>
          <EditOrange /><ModalDelOrange/>
        </>
      );
    } else if (category === "Professional") {
      return (
        <>
          <EditBlue /><ModalDelBlue/>
        </>
      );
    } else if (category === "Academic") {
      return (
        <>
          <EditGray/><ModalDelFGray />
        </>
      );
    } else if (category === "Social") {
      return (
        <>
          <EditYellow/><ModalDelYellow />
        </>
      );
    }
  }

  return (
    <View style={chooseStyle()}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <View style={styles.actions}>{chooseIcon()}</View>
    </View>
  );
}
