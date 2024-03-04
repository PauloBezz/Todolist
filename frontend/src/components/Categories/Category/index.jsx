import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

import { PersonIcon } from "../../../../assets/svg/PersonIcon";
import { SuitCaseIcon } from "../../../../assets/svg/SuitCaseIcon";
import { GraduationCapIcon } from "../../../../assets/svg/GraduationCapIcon";
import { PeopleGroupIcon } from "../../../../assets/svg/PeopleGroupIcon";

export function Category({ name, navigation }) {

    // console.log(navigation.navigate("Personal"))
    function chooseIcon() {
        if (name === "Personal") {
            return <PersonIcon />
        } else if (name === "Professional") {
            return <SuitCaseIcon />
        } else if (name === "Academic") {
            return <GraduationCapIcon />
        } else if (name === "Social") {
            return <PeopleGroupIcon />
        }
    }

    function chooseStyle() {
        if (name === "Personal") {
            return ['#FF8657', '#D8734D']
        } else if (name === "Professional") {
            return ['#6AA9E9', '#318CE7']
        } else if (name === "Academic") {
            return ['#F2F3F5', '#D2D3D5']
        } else if (name === "Social") {
            return ['#FBD474', '#FFC433']
        }
    }

    return (
        <View style={styles.container} onTouchEnd={() => navigation.navigate(name)}>
            <LinearGradient
                colors={chooseStyle()}
                style={styles.container}
            >
                {
                    chooseIcon()
                }
                <Text style={styles.text}>{name}</Text>
            </LinearGradient>
        </View>
    )
}