import { styles } from './styles'
import React, { useState } from "react";
import {
    Text,
    Image,
    View,
    SafeAreaView,
    TouchableOpacity,
    Modal,
} from 'react-native';
import { ArrowBackIcon } from '../../../assets/svg/ArrowBackIcon';
import { CloseIcon } from '../../../assets/svg/CloseIcon';
import { BellICon } from '../../../assets/svg/BellIcon';
// import menu from '../src/image/menu.png'
// import  from '../src/image/bell.png'
// import exit from '../src/image/exit.png'

export function Sidebar(props) {

    let modalVisible = props.isOpen

    if (modalVisible) {
        return (

            <SafeAreaView style={styles.container}>
                <Modal transparent visible={modalVisible}>
                    <SafeAreaView style={styles.modal}>
                        <View style={styles.sidebar}>
                            <View style={styles.topo}>
                                <TouchableOpacity style={styles.exit} onPress={() => props.setIsOpen(false)}>
                                    <CloseIcon />
                                </TouchableOpacity>
                                <Text style={styles.frase}>Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.</Text>
                                <Text style={styles.autor}>Paulo Freire</Text>
                            </View>

                            <View style={styles.lista}>
                                <TouchableOpacity style={styles.guide}>
                                    <Text style={styles.listAll}>All</Text>
                                    <View><Text style={styles.data}>40</Text></View>
                                </TouchableOpacity>

                                <View style={styles.line} />

                                <TouchableOpacity style={styles.guide}>
                                    <Text style={styles.list}>Personal</Text>
                                    <View style={styles.recOne}><Text style={styles.dado}>11</Text></View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.guide}>
                                    <Text  style={styles.list}>Professional</Text>
                                    <View style={styles.recTwo}><Text style={styles.dado}>8</Text></View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.guide}>
                                    <Text style={styles.list}>Academic</Text>
                                    <View style={styles.recThree}><Text style={styles.dado}>5</Text></View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.guide}>
                                    <Text style={styles.list}>Social</Text>
                                    <View style={styles.recFour}><Text style={styles.dado}>16</Text></View>
                                </TouchableOpacity>

                                <View style={styles.line} />

                                <TouchableOpacity style={styles.guide}>
                                    <Text style={styles.list}>Completed</Text>
                                    <View><Text style={styles.data}>0</Text></View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.guide}>
                                    <Text style={styles.list}>Deleted</Text>
                                    <View><Text style={styles.data}>0</Text></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </Modal>
            </SafeAreaView>
        );
    }
}