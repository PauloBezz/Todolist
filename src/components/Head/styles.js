import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        width: 'auto'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    welcomeText: {
        fontSize: 15,
    },
    touchable: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
    },
    notifications: {
        position: 'relative'
    }
})