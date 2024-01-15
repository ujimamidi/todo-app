import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <div className="mt-5 space-y-2">
      {todos.map((item, index) => (
        <Todo key={index} todoItem={item}/>
      ))}
    </div>
  )
}

export default TodoList;