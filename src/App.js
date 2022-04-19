import './App.css';
import React from 'react';

function Todo({todo, completeTodos, index, deleteTodo}){
  return(
    <div className="todo">
      <div style={{textDecoration: todo.isCompleted ? "line-through": ""}}>
      {todo.text}
      </div>
      <button onClick={()=> completeTodos(index)}>Completed</button>
      <button onClick={()=> deleteTodo(index)}>X</button>
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
    { text: "learn react", 
      isCompleted: false },
    { text: "meet friend",
      isCompleted: false },
    { text: "build really cool app",
      isCompleted: false }
  ])

  const addTodo = (task) => {
    const newTodos = [...todos, { text: task }];
    setTodos(newTodos);
  }

  const completeTodos = idx => {
    const newTodos = [...todos];
    newTodos[idx].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = idx => {
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  }
 
  return (
    <div className="app">
      <div className="todo-list">
      {todos.map((todo, idx) => <Todo 
        key={idx} 
        index={idx} 
        todo={todo} 
        deleteTodo={deleteTodo} 
        completeTodos={completeTodos}/>)}
        </div>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App;
