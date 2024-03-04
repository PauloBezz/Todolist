import { View, Text } from "react-native";
import { styles } from "./styles";

import { Notifications } from './Notifications';
import { Menu } from './Menu';

export function Head() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Hi, Atila...</Text>
                <Text style={styles.welcomeText}>Welcome Back!</Text>
            </View>

            <View style={styles.touchable}>
                <View style={styles.notifications}>
                    <Notifications />
                </View>

                <Menu />
            </View>
        </View>
    )
}