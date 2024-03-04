import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: 40,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#fff',
        shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 0, height: -2 }, // Deslocamento horizontal e vertical
        shadowOpacity: 0.5, // Opacidade da sombra
        shadowRadius: 4, // Difusão da sombra
        elevation: 5, // Elevação para Android
    },
    addButton: {
        height: 70,
        width: 70,
        backgroundColor: '#6F51FF',
        borderRadius: 120,
        position: 'relative',
        top: -35,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: 'rgba(147, 134, 238, 0.2)'
    }
})