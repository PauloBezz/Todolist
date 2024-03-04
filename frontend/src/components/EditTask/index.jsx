import {
    PenIconOrange,
    PenIconBlue,
    PenIconGray,
    PenIconYellow,
} from "../.././../assets/svg/PenIcon";
import { useRef, useCallBack, useMemo } from 'react'
import { styles } from "./styles";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, TouchableOpacity, Image, Modal, Text} from "react-native";
import BottomSheet from '@gorhom/bottom-sheet'


export function EditOrange(){
    const bottomSheetref = useRef(null);
    const snapPoints = useMemo(() => ["40%","80%"], [])

    const handleCloseAction = () => bottomSheetref.current?.close();
    const handleOpenPress = () => bottomSheetref.current?.expand();


    return(    
        <GestureHandlerRootView style={{flex:1}}>
            <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={handleOpenPress}>
                    <PenIconOrange/>
                </TouchableOpacity>
            </View>

        <BottomSheet 
        ref={bottomSheetref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{backgroundColor:"#000"}}>
            

        <View style={styles.contentContainer}>
            <View style={styles.modal}>
                <Text style={styles.question}>Deseja excluir a tarefa?</Text>
                    <View style={styles.buttons}>
                    <TouchableOpacity style={styles.byes}><Text style={styles.text}>Sim</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.bcan}><Text style={styles.text}>Cancelar</Text></TouchableOpacity>
            </View>
        </View>

        </View>
        </BottomSheet>




        </View>
      </GestureHandlerRootView>
    )
}

export function EditGray(){
    return(
        <TouchableOpacity>
        <PenIconGray/>
    </TouchableOpacity>
)
}

export function EditBlue(){
    return(
        <TouchableOpacity>
        <PenIconBlue/>
    </TouchableOpacity>
)
}

export function EditYellow(){
    return(
        <TouchableOpacity>
        <PenIconGray/>
    </TouchableOpacity>
)
}