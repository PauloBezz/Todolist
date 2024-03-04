import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal:{
        alignSelf:'center',
        width: '70%',
        minHeight:'20%',
        height: '16%',
        backgroundColor:'#fff',
        justifyContent:'center',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor:'#000',
        shadowOffset:{
            width: 0,
            height: 5
        },
        elevation: 5

    },
    icon:{
        alignSelf:'center',
        marginBottom:'5%'
    }
    ,
    question:{
        fontSize: 22,
        marginBottom:"5%",
        textAlign:'center'
    },
    byes:{
        backgroundColor:"#60B2FE",
        width:'40%',
        height: 35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
    },
    bcan:{
        backgroundColor:"#F66E6E",
        width:'40%',
        height: 35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
    },

    text:{
        fontSize: 22,
        color:'#fff'
    },

    buttons:{
        flexDirection:'row',
        justifyContent:"space-around",
    }
})