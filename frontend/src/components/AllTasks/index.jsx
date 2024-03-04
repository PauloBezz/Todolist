import { ScrollView, Text, View } from "react-native";
import { Task } from "./Task";
import { styles } from "./styles";
import api from "../../service/api";
import { useState, useEffect } from "react";

export function AllTasks() {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        // Função assíncrona para buscar tarefas da API
        const fetchTarefas = async () => {
            try {
                const response = await api.get('/tarefa');
                setTarefas(response.data); // Define as tarefas com os dados da API
            } catch (error) {
                console.log(error);
            }
        };

        fetchTarefas(); // Chama a função de busca quando o componente é montado
    }, []); // O array vazio indica que este efeito só será executado uma vez, equivalente ao componentDidMount

    return (
        <View style={styles.container}>
            <Text style={styles.title}>All Activities</Text>

            <ScrollView style={styles.tasksContainer} showsVerticalScrollIndicator={false} contentContainerStyle={styles.tasks}>
                {
                    tarefas.map((element) => {
                        return <Task key={element.id} date={element.dataCriacao} title={element.titulo} category={element.fk_categoriaNome} />;
                    })
                }
            </ScrollView>
        </View>
    );
}