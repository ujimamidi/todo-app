function Todo({ todoItem, onRemove }) {
  return (
    <div className="mx-auto max-w-md p-3 rounded-xl bg-black text-white w-full">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row space-x-2">
          <h1>⋆ {todoItem}</h1>
          <button></button>
        </div>
        <div className="space-x-3">
          <button onClick={onRemove}>✔️</button>
        </div>
      </div>
    </div>
  )
}

export default Todo;