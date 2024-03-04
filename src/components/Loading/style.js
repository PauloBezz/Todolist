import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        gap: 20
    },
    title:{
        color: '#000',
        zIndex: 9,
        position: 'absolute',
        fontSize: 50,
        alignContent:'center',
        textShadowColor: 'rgba(0, 0, 0, 0.35)', // Cor da sombra
        textShadowOffset: { width: 3, height: 3 }, // Offset da sombra
        textShadowRadius: 5, // Raio da sombra
    },
    load:{
        alignSelf:'center',
        justifyContent: 'center',
    }
});