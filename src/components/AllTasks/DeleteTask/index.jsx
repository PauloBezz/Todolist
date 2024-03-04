import { View, TouchableOpacity, StyleSheet,Image, Modal, Text} from "react-native";
import  { TrashIconBlue,
        TrashIconOrange,
        TrashIconYellow,
        TrashIconGray}  from "../../../../assets/svg/TrashIcon";
import icon from "../../../../assets/trashBlack.png"  
import { useState } from "react";
import { styles } from "./styles";

export function ModalDelOrange(){

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.container}>
        <Modal transparent visible={modalVisible}>
                <View style={styles.modal}>
                    <Image style={styles.icon} source={icon}/>
                    <Text style={styles.question}>Deseja excluir a tarefa?</Text>
                        <View style={styles.buttons}>
                        <TouchableOpacity style={styles.byes}><Text style={styles.text}>Sim</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.bcan} onPress={()=>setModalVisible(false)}><Text style={styles.text}>Cancelar</Text></TouchableOpacity>
                    </View>
                </View>
        </Modal>
            <View>
                <TouchableOpacity onPress={()=>setModalVisible(true)} >
                    <TrashIconOrange/>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export function ModalDelGray(){

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.container}>
        <Modal transparent visible={modalVisible}>
                <View style={styles.modal}>
                    <Image style={styles.icon} source={icon}/>
                    <Text style={styles.question}>Deseja excluir a tarefa?</Text>
                        <View style={styles.buttons}>
                        <TouchableOpacity style={styles.byes}><Text style={styles.text}>Sim</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.bcan} onPress={()=>setModalVisible(false)}><Text style={styles.text}>Cancelar</Text></TouchableOpacity>
                    </View>
                </View>
        </Modal>
            <View>
                <TouchableOpacity onPress={()=>setModalVisible(true)} >
                    <TrashIconGray/>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export function ModalDelBlue(){

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.container}>
        <Modal transparent visible={modalVisible}>
                <View style={styles.modal}>
                    <Image style={styles.icon} source={icon}/>
                    <Text style={styles.question}>Deseja excluir a tarefa?</Text>
                        <View style={styles.buttons}>
                        <TouchableOpacity style={styles.byes}><Text style={styles.text}>Sim</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.bcan} onPress={()=>setModalVisible(false)}><Text style={styles.text}>Cancelar</Text></TouchableOpacity>
                    </View>
                </View>
        </Modal>
            <View>
                <TouchableOpacity onPress={()=>setModalVisible(true)} >
                    <TrashIconBlue/>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export function ModalDelYellow(){

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.container}>
        <Modal transparent visible={modalVisible}>
                <View style={styles.modal}>
                    <Image style={styles.icon} source={icon}/>
                    <Text style={styles.question}>Deseja excluir a tarefa?</Text>
                        <View style={styles.buttons}>
                        <TouchableOpacity style={styles.byes}><Text style={styles.text}>Sim</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.bcan} onPress={()=>setModalVisible(false)}><Text style={styles.text}>Cancelar</Text></TouchableOpacity>
                    </View>
                </View>
        </Modal>
            <View>
                <TouchableOpacity onPress={()=>setModalVisible(true)} >
                    <TrashIconYellow/>
                </TouchableOpacity>
            </View>
        </View>
    )
}