import BottomSheet from "@gorhom/bottom-sheet";
import { View, Text } from "react-native";
import { styles } from "./styles";

import { useContext, useRef, useMemo } from "react";

import { BottomSheetContext } from "../../contexts/createTask";
import { SmallPersonIcon } from "../../../assets/svg/PersonIcon"
import { ArrowBackIcon } from "./../../../assets/svg/ArrowBackIcon/index";
import { SmallSuitCaseIcon } from "../../../assets/svg/SuitCaseIcon";
import { SmallGraduationCapIcon } from "../../../assets/svg/GraduationCapIcon";
import { SmallPeopleGroupIcon } from "../../../assets/svg/PeopleGroupIcon";

export function ChooseCategory() {
  const { isBottomSheetOpen, setIsBottomSheetOpen, setIsCreateTaskOpen, setCategory } =
    useContext(BottomSheetContext);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["40%"], []);
  //   const openBottomSheet = () => bottomSheetRef.current?.expand();
  const handleCloseAction = () => {
    bottomSheetRef.current?.close();
    setTimeout(() => setIsBottomSheetOpen(false), 200);
  };

  // Personal, Professional, Academic, Social, Completed, Archived, Deleted

  return (
    <>
      {isBottomSheetOpen && (
        <BottomSheet index={0} ref={bottomSheetRef} snapPoints={snapPoints} style={styles.container}>
          <View style={styles.arrowBackContainer} onTouchEnd={handleCloseAction}>
            <ArrowBackIcon />
          </View>

          <Text style={styles.title}>Choose a Category</Text>

          <View style={styles.buttons}>
            <View style={styles.buttonOrange} onTouchEnd={() => {setIsCreateTaskOpen(true); setCategory("Personal")}}>
              <SmallPersonIcon />
              <Text style={styles.text}>Personal</Text>
            </View>

            <View style={styles.buttonBlue} onTouchEnd={() => {setIsCreateTaskOpen(true); setCategory("Professional")}}>
              <SmallSuitCaseIcon />
              <Text style={styles.text}>Professional</Text>
            </View>

            <View style={styles.buttonGray} onTouchEnd={() => {setIsCreateTaskOpen(true); setCategory("Academic")}}>
              <SmallGraduationCapIcon />
              <Text style={styles.text}>Academic</Text>
            </View>

            <View style={styles.buttonYellow} onTouchEnd={() => {setIsCreateTaskOpen(true); setCategory("Social")}}>
              <SmallPeopleGroupIcon />
              <Text style={styles.text}>Social</Text>
            </View>
          </View>
        </BottomSheet >
      )
      }
    </>
  );
}