function Todo({ todoItem }) {
  return (
    <div className="mx-auto max-w-lg p-3 rounded-xl bg-black text-white w-full">
      <div className="flex flex-row justify-between">
        <h1>{todoItem}</h1>
        <div className="space-x-3">
          <button>✔️</button>
          <button>❌</button>
        </div>
      </div>
    </div>
  )
}

export default Todo;