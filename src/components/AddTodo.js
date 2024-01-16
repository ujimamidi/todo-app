import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function AddTodo() {
  const [todo, setToDo] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // Load todos from local storage on component mount
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodoList(savedTodos);
    }
  }, [])

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodoList((prevTodoList) => {
      const updatedTodoList = [...prevTodoList, todo];
      localStorage.setItem("todos", JSON.stringify(updatedTodoList));
      return updatedTodoList;
    });
    setToDo("");  
  }

  const handleRemoveTodo = (removedTodo) => {
    setTodoList((prevTodoList) => {
      const updatedTodoList = prevTodoList.filter(todo => todo !== removedTodo)
      localStorage.setItem("todos", JSON.stringify(updatedTodoList));
      return updatedTodoList;
    });
  }

  // testing purposes only
  useEffect(() => {
    console.log("Updated Todo List:", todoList);
  }, [todoList]);

  return (
    <div className="mt-1">
      <form onSubmit={handleAddTodo}>
        <input 
          className="border-black border-2 rounded-lg w-80 px-2 py-0.5" 
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