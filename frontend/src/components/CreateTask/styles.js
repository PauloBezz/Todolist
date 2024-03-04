import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center'
    },
    arrowBackContainer: {
        position: 'absolute',
        top: -20,
        left: 0,
        width: 50,
        padding: 25,
        borderRadius: 10,
        zIndex: 5
    },
    inputTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "900",
    },
    description: {
        margin: "auto",
        gap: 15,
        marginTop: 20
    },
    descriptionText: {
        fontSize: 12,
        fontWeight: "500",
        opacity: 0.4
    },
    button: {
        paddingHorizontal: 40,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    containerCreate: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    dateContainer: {
        gap: 15
    }

})