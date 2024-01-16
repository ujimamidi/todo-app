import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function AddTodo() {
  const [todo, setToDo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
    setToDo("");  
  }

  const handleRemoveTodo = (removedTodo) => {

    setTodoList((prevTodoList) => prevTodoList.filter(todo => todo !== removedTodo));
  }

  // testing purposes only
  useEffect(() => {
    console.log("Updated Todo List:", todoList);
  }, [todoList]);

  return (
    <div className="mt-1">
      <form onSubmit={handleAddTodo}>
        <input 
          className="border-black border-2 rounded-lg w-80 px-1 py-0.5" 
          type="text"
          value={todo}
          placeholder="enter activity"
          onChange={(e) => setToDo(e.target.value)}
        />
        <button 
          type="submit"
          className="border-white bg-black border-2 rounded-lg mx-2 px-3 text-white"
          disabled={todo.trim() === ""}
        >
          ✚
        </button>
      </form>

      {/* Display todos */}
      <TodoList todos={todoList} onRemove={handleRemoveTodo}/>
    </div>
  )
}

export default AddTodo;