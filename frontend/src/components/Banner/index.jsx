import { View, Text } from "react-native";
import { LargePersonIcon } from "../../../assets/svg/PersonIcon";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { LargeSuitCaseIcon } from "../../../assets/svg/SuitCaseIcon";
import { LargeGraduationCapIcon } from "../../../assets/svg/GraduationCapIcon";
import { LargePeopleGroupIcon } from "../../../assets/svg/PeopleGroupIcon";

export function Banner({ name, navigation }) {
  function chooseStyle() {
    if (name === "Personal") {
      return ["#FF8657", "#D8734D"];
    } else if (name === "Professional") {
      return ["#6AA9E9", "#318CE7"];
    } else if (name === "Academic") {
      return ["#F2F3F5", "#D2D3D5"];
    } else if (name === "Social") {
      return ["#FBD474", "#FFC433"];
    }
  }

  function chooseBanner() {
    if (name === "Personal") {
      return <LargePersonIcon />;
    } else if (name === "Professional") {
      return <LargeSuitCaseIcon />;
    } else if (name === "Academic") {
      return <LargeGraduationCapIcon />;
    } else if (name === "Social") {
      return <LargePeopleGroupIcon />;
    }
  }

  return (
    <View style={styles.container} onTouchEnd={() => navigation.navigate(name)}>
      <LinearGradient colors={chooseStyle()} style={styles.container}>
        <Text style={styles.title}>{name}</Text>

        {chooseBanner()}
      </LinearGradient>
    </View>
  );
}
