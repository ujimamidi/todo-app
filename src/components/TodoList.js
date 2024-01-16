import Todo from "./Todo";

function TodoList({ todos }) {
  // newest todo is displayed at the top
  const reversedTodos = [...todos].reverse();

  return (
    <div className="mt-5 space-y-2">
      {reversedTodos.map((item, index) => (
        <Todo key={index} todoItem={item} className="mb-2"/>
      ))}
    </div>
  )
}

export default TodoList;