import BottomSheet from "@gorhom/bottom-sheet";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { useContext, useRef, useMemo, useState, useEffect } from "react";

import { BottomSheetContext } from "../../contexts/createTask";
import { ArrowBackIcon } from "./../../../assets/svg/ArrowBackIcon/index";
import api from "../../service/api";

export function CreateTask() {
    const { isCreateTaskOpen, setIsCreateTaskOpen, category } =
        useContext(BottomSheetContext);
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["40%"], []);
    //   const openBottomSheet = () => bottomSheetRef.current?.expand();
    const handleCloseAction = () => {
        setTitle()
        setDescription()
        setDate()
        bottomSheetRef.current?.close();
        setTimeout(() => setIsCreateTaskOpen(false), 200);
    };
    const handleCreateTask = () => {
        if (!title  || !description || !category) // TIREI A CONDIÇÃO DO DATE ( NÃO CONSEGUIA CLICAKR NELE)
            console.log("vazio")
        else
            // Incluir a URL da requisição passando as propriedades title, date, description, category
            console.log("cheio")
        api.post("/tarefa", {
            "titulo": title,
            "dataPrevistaTermino": "2020-02-10 10:20:30",
            "descricao": description,
            "fk_categoriaNome": category
        })
            .then((res) => console.log(res.data))
            .catch((err) => ("Erro: ", err))
    }
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()

    return (
        <>
            {isCreateTaskOpen && (
                <BottomSheet index={0} ref={bottomSheetRef} snapPoints={snapPoints} style={styles.container}>
                    <View style={styles.arrowBackContainer} onTouchEnd={handleCloseAction}>
                        <ArrowBackIcon />
                    </View>

                    <View style={styles.inputTitle}>
                        <TextInput
                            placeholder="Title"
                            style={{
                                fontSize: 20, borderWidth: 0.2,
                                borderColor: '#000', textAlign: 'center',
                                paddingHorizontal: 5,
                                width: 150, borderRadius: 10
                            }}
                            onChangeText={(value) => setTitle(value)}
                        />
                    </View>

                    <View style={styles.description}>
                        <Text style={styles.descriptionText}>Description</Text>
                        <TextInput
                            placeholder="Lorem ipsum dolor sit amet conjectur..."
                            style={{
                                fontSize: 12, fontWeight: "500", borderWidth: 0.2,
                                borderRadius: 10,
                                borderColor: '#000', width: 350,
                                height: 105,
                                padding: 15, textAlignVertical: "top"
                            }}
                            onChangeText={(value) => setDescription(value)}
                        />
                    </View>

                    <View style={styles.containerCreate}>
                        <View style={styles.dateContainer}>
                            <Text style={styles.descriptionText}>Date</Text>
                            <TextInput
                                type="date"
                                placeholder="DD/MM/YY"
                                style={{
                                    fontSize: 12, fontWeight: "500", borderWidth: 0.2,
                                    borderRadius: 10,
                                    borderColor: '#000',
                                    padding: 5, width: 'auto'
                                }}
                                onChangeText={(value) => setDate(value)}
                            />
                        </View>

                        <View style={styles.button} onTouchEnd={handleCreateTask}>
                            <Text style={styles.buttonText}>Create Task</Text>
                        </View>
                    </View>
                </BottomSheet>
            )
            }
        </>
    );
}