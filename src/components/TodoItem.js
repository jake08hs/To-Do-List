export default function TodoItem({ texto, concluida, onConcluir, onRemove }) {
  return (
    <div className="todo-item">
      <button className="check" onClick={onConcluir}>
        {concluida ? "✓" : ""}
      </button>
      <span className={concluida ? "done-text" : ""}>{texto}</span>
      <button className="remove" onClick={onRemove}>x</button>
    </div>
  );
}
