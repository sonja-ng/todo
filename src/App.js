import './App.css';
import React from 'react';

function Todo({todo}){
  return(
    <div className="todo">
      {todo.text}
    </div>
  );
};

function TodoForm({addTodo}){
  const [ value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (value.length === 0) return;
    addTodo(value);
    setValue("");
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text"
       className="input"
       value={value}
       onChange={e=> setValue(e.target.value)}/>
      <button>Submit</button> 
    </form>
  )
};

function App() {
  const [todos, setTodos] = React.useState([
    { text: "learn react" },
    { text: "meet friend" },
    { text: "build really cool app" }
  ])

  const addTodo = (task) => {
    const newTodos = [...todos, { text: task }];
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
      {todos.map((todo, idx) => <Todo key={idx} index={idx} todo={todo}/>)}
        </div>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App;
