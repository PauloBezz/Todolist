import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    arrowBackContainer: {
        position: 'absolute',
        top: 0,
        right: 35,
        left: 10,
        width: 50,
        padding: 25,
        zIndex: 5
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: 'center'
    },
    buttons: {
        marginTop: 25,
        alignItems: 'center',
        gap: 10
    },
    buttonOrange: {
        width: 250,
        padding: 15,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#c5c6f7',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        flexDirection: 'row',
        backgroundColor: '#FF8657'
    },
    text: {
        color: '#fff'
    },
    buttonBlue: {
        width: 250,
        padding: 15,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#c5c6f7',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        flexDirection: 'row',
        backgroundColor: '#318CE7'
    },
    buttonGray: {
        width: 250,
        padding: 15,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#c5c6f7',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        flexDirection: 'row',
        backgroundColor: '#D2D3D5'
    },
    buttonYellow: {
        width: 250,
        padding: 15,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#c5c6f7',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        flexDirection: 'row',
        backgroundColor: '#FBD474'
    }
})