import { ScrollView } from "react-native";
import { Task } from "../Task";
import { styles } from "./styles";
import { useState, useEffect } from "react";
import api from "../../../service/api";
export function PersonalTasks() {

  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
      // Função assíncrona para buscar tarefas da API
      const fetchTarefas = async () => {
          try {
              const response = await api.get('/tarefa/categoria?categoria=Personal');
              setTarefas(response.data); // Define as tarefas com os dados da API
          } catch (error) {
              console.log(error);
          }
      };

      fetchTarefas(); // Chama a função de busca quando o componente é montado
  }, []); // O array vazio indica que este efeito só será executado uma vez, equivalente ao componentDidMount

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {
        tarefas.map((element) => {
          return <Task key={element.id} date={element.dataCriacao} title={element.titulo} category={element.fk_categoriaNome} />
        })
      }
    </ScrollView>
  );
}