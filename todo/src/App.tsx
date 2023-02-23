import "./App.scss";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState(Array<string>);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = () => {
    console.log('hahah');
    
  };

  return (
    <div className="todo-container">
      <div className="todo-header"> React Todo App </div>

      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Create a new task"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        ></input>
        <button onClick={addTodo}>Add</button>
      </div>

      <div>
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <span>{todo}</span>
            <button onClick={deleteTodo}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
