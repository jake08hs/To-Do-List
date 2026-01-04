import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoBox() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  // 1️⃣ Carrega tarefas do localStorage quando o componente monta
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
      setLista(JSON.parse(tarefasSalvas));
    }
  }, []);

  // 2️⃣ Salva a lista no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(lista));
  }, [lista]);

  function adicionarTarefa() {
    if (tarefa.trim() === "") return;

    setLista([
      ...lista,
      { texto: tarefa, concluida: false }
    ]);

    setTarefa("");
  }

  function removerTarefa(index) {
    setLista(lista.filter((_, i) => i !== index));
  }

  function concluirTarefa(index) {
    const novaLista = [...lista];
    novaLista[index].concluida = !novaLista[index].concluida;
    setLista(novaLista);
  }

  return (
    <div className="todo-box">
      <div className="input-area">
        <input
          type="text"
          placeholder="Digite sua tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>+</button>
      </div>

      <div className="todo-list">
        {lista.map((item, index) => (
          <TodoItem
            key={index}
            texto={item.texto}
            concluida={item.concluida}
            onConcluir={() => concluirTarefa(index)}
            onRemove={() => removerTarefa(index)}
          />
        ))}
      </div>
    </div>
  );
}
