import "./App.css";
import TodoBox from "./components/TodoBox";

function App() {
  return (
    <div className="page">
      <div className="app-container">
        
        <div className="logo">
          <span className="icon">✔</span>
          <h1>ToDo List</h1>
        </div>

        <TodoBox />

      </div>
    </div>
  );
}

export default App;
