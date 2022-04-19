import './App.css';
import React from 'react';

function Todo({todo}){
  return(
    <div className="todo">
      {todo.text}
    </div>
  );
};

function App() {
  const [todos, setTodos] = React.useState([
    { text: "learn react" },
    { text: "meet friend" },
    { text: "build really cool app" }
  ])

  return (
    <div className="app">
      <div className="todo-list">
      {todos.map((todo, idx) => <Todo key={idx} index={idx} todo={todo}/>)}
        </div>
    </div>
  )
}

export default App;
