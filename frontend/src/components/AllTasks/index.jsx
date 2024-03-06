import { ScrollView, Text, View } from "react-native";
import { Task } from "./Task";
import { styles } from "./styles";
import api from "../../service/api";
import { useState, useEffect } from "react";
import axios from "axios";

export function AllTasks() {
    const [tarefas, setTarefas] = useState([]);

    // Os dados abaixo são mocados. Para utilizá-los remova a linha acima: (Cont [tarefa, setTarefa] ...)
    // let tarefas;
    // tarefas = [
    //     {
    //       "id": 1,
    //       "titulo": "novaTarefa",
    //       "dias_semana": null,
    //       "descricao": "sim",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-02-29 03:56:51",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Personal"
    //     },
    //     {
    //       "id": 2,
    //       "titulo": "novaTarefa",
    //       "dias_semana": null,
    //       "descricao": "sim",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-02-29 03:57:14",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Personal"
    //     },
    //     {
    //       "id": 3,
    //       "titulo": "Tesre",
    //       "dias_semana": null,
    //       "descricao": "Tdhgt",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-02-29 04:26:15",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Personal"
    //     },
    //     {
    //       "id": 4,
    //       "titulo": "Tesre",
    //       "dias_semana": null,
    //       "descricao": "Tdhgt",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-02-29 04:26:17",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Personal"
    //     },
    //     {
    //       "id": 5,
    //       "titulo": "Tesre",
    //       "dias_semana": null,
    //       "descricao": "Tdhgt",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-02-29 04:26:18",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Personal"
    //     },
    //     {
    //       "id": 6,
    //       "titulo": "Tesre",
    //       "dias_semana": null,
    //       "descricao": "Tdhgt",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-02-29 04:26:18",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Personal"
    //     },
    //     {
    //       "id": 7,
    //       "titulo": "Tesre",
    //       "dias_semana": null,
    //       "descricao": "Tdhgt",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-02-29 04:26:20",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Personal"
    //     },
    //     {
    //       "id": 8,
    //       "titulo": "Aaaa",
    //       "dias_semana": null,
    //       "descricao": "Aaaaaa",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-02-29 04:44:26",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Professional"
    //     },
    //     {
    //       "id": 9,
    //       "titulo": "t tvbbyvyb",
    //       "dias_semana": null,
    //       "descricao": "8bugthj",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-03 17:53:42",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Professional"
    //     },
    //     {
    //       "id": 10,
    //       "titulo": "t tvbbyvyb",
    //       "dias_semana": null,
    //       "descricao": "8bugthj",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-03 17:53:43",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Professional"
    //     },
    //     {
    //       "id": 11,
    //       "titulo": "t tvbbyvyb",
    //       "dias_semana": null,
    //       "descricao": "8bugthj",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-03 17:53:43",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Professional"
    //     },
    //     {
    //       "id": 12,
    //       "titulo": "t tvbbyvyb",
    //       "dias_semana": null,
    //       "descricao": "8bugthj",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-03 17:53:43",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Professional"
    //     },
    //     {
    //       "id": 13,
    //       "titulo": "t tvbbyvyb",
    //       "dias_semana": null,
    //       "descricao": "8bugthj",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-03 17:53:44",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Professional"
    //     },
    //     {
    //       "id": 14,
    //       "titulo": "huhi",
    //       "dias_semana": null,
    //       "descricao": "FUncão delete",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-04 08:35:09",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Social"
    //     },
    //     {
    //       "id": 15,
    //       "titulo": "huhi",
    //       "dias_semana": null,
    //       "descricao": "FUncão delete",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-04 08:35:09",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Social"
    //     },
    //     {
    //       "id": 16,
    //       "titulo": "huhi",
    //       "dias_semana": null,
    //       "descricao": "FUncão delete",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-04 08:35:09",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Social"
    //     },
    //     {
    //       "id": 17,
    //       "titulo": "huhi",
    //       "dias_semana": null,
    //       "descricao": "FUncão delete",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-04 08:35:10",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Social"
    //     },
    //     {
    //       "id": 18,
    //       "titulo": "huhi",
    //       "dias_semana": null,
    //       "descricao": "FUncão delete",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-04 08:35:10",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Social"
    //     },
    //     {
    //       "id": 19,
    //       "titulo": "huhi",
    //       "dias_semana": null,
    //       "descricao": "FUncão delete",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-04 08:35:10",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Social"
    //     },
    //     {
    //       "id": 20,
    //       "titulo": "huhi",
    //       "dias_semana": null,
    //       "descricao": "FUncão delete",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-04 08:35:10",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Social"
    //     },
    //     {
    //       "id": 21,
    //       "titulo": "huhi",
    //       "dias_semana": null,
    //       "descricao": "FUncão delete",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-04 08:35:10",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Social"
    //     },
    //     {
    //       "id": 22,
    //       "titulo": "huhi",
    //       "dias_semana": null,
    //       "descricao": "FUncão delete",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-04 08:35:11",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Social"
    //     },
    //     {
    //       "id": 23,
    //       "titulo": "huhi",
    //       "dias_semana": null,
    //       "descricao": "FUncão delete",
    //       "concluido": null,
    //       "dataPrevistaTermino": 1581340830000,
    //       "dataCriacao": "2024-03-04 08:35:11",
    //       "dataArquivacao": null,
    //       "fk_categoriaNome": "Social"
    //     }
    //   ]

    useEffect(() => {
        // Função assíncrona para buscar tarefas da API
        const fetchTarefas = async () => {
            try {
                const response = await axios.get('http://172.16.1.159:5500/tarefa');
                setTarefas(); // Define as tarefas com os dados da API
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