import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 66,
        marginTop: 32,
        flexDirection: 'row',
        justifyContent:"space-between",
        borderRadius: 12,
        position: 'absolute'
    },
    modal:{
        flex: 1,
        alignItems:'flex-end',
    },
    sidebar:{
        width: '60%',
        minHeight: '100%',
        backgroundColor:'#fff',
        marginRight: 2,
        borderRadius: 15,
        elevation: 5
    },
    topo:{
        width:'100%',
        height: '24%',
        display:'flex',
        borderRadius: 15,
        backgroundColor:"#7360F5",
        flexDirection:'column',
    },
    exit:{
        width: 50,
        height: 50,
        marginTop: 22,
        marginBottom: 10,
        marginHorizontal: 20,
        alignSelf:'flex-end',
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    frase:{
        width: '88%',
        fontSize: 14,
        alignSelf:'center',
        alignContent:'center',
        color:'#fff'
    },
    autor:{
        fontSize: 14,
        alignSelf:'flex-end',
        marginRight: 15,
        color:'#fff'
    },
    lista:{
        marginTop: 20,
        width:'100%',
        justifyContent:'center',

    },
    listAll:{
        fontSize: 14,
        marginHorizontal: 20,
        marginBottom: 10

    },
    list:{
        fontSize: 14,
        marginHorizontal: 20,
        marginBottom: 20
    },
    guide:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    recOne:{
        width:40,
        height:20,
        backgroundColor: "#FF8657",
        opacity: 0.5,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    },
    recTwo:{
        width:40,
        height:20,
        backgroundColor: "#318CE7",
        opacity: 0.5,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    },
    recThree:{
        width:40,
        height:20,
        backgroundColor: "#D2D3D5",

        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    },
    recFour:{
        width:40,
        height:20,
        backgroundColor: "#FBD474",
        opacity: 0.5,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    },
    dado:{
        fontSize: 12,
        color: "#000",
        opacity: 0.6,
    },
    data:{
        fontSize: 12,
        color: "#000",
        opacity: 0.6,
        marginHorizontal: 35
    },
    line:{
        alignSelf: 'center',
        width: '80%', 
        height: 1, // Altura da linha
        backgroundColor: '#7360F5', // Cor da linha  
        marginBottom: 20

    },
    text:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons:{
        flexDirection: 'row',
        height: 66,
        alignItems:'center',
        gap: 30,
        marginHorizontal: 35
    },
    menu:{
        width: 50,
        height: 50,
    },
    bell:{
        width: 26,
        height: 30
    },
    title:{
        fontSize: 25,
        fontWeight:'bold',
        marginHorizontal: 35
    },
    well:{
        fontSize: 15,
        marginHorizontal: 35
    }
}
)