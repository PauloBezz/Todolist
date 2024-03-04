import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        padding: 85,
        borderRadius: 10,
        gap: 15
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    }
})