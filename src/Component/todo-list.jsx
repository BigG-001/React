import { useState } from "react";


function MyTodo(){
  const [todo, setTodo] = useState("");
  const [myTodoList, setMytodoList] = useState([]);
    // {id: 1, text: "Learn React", completed: false},
    // {id: 2, text: "Javascript", completed: true},
    // {id: 3, text: "Build project", completed: false}
  
  // Lets start by adding a new todo
  const addTodo = () => {
    if(todo.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false
    };
    //Rewriting the 
    setMytodoList([...myTodoList, newTodo]);
    // Clear input after adding Todo
    setTodo("");
  }
  // Deleting todo
  const deleteTodo = (id) => {
    setMytodoList(myTodoList.filter((item) => item.id !== id));
  };
   // Allow Enter key to add todo
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      {/* Todo Container */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Todo App
        </h1>

        {/* Input Section */}
        <div className="flex gap-2 mb-6">
          
          <input
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter todo........"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>

        </div>

        {/* Todo List */}
        <div className="space-y-3">

          {myTodoList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 p-3 rounded-lg"
            >

              {/* Checkbox + Todo Text */}
              <div className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTodo(item.id)}
                  className="w-5 h-5 cursor-pointer"
                />

                <span
                  className={
                    item.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }
                >
                  {item.text}
                </span>

              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteTodo(item.id)}
                className="text-red-500 hover:text-red-700 font-medium transition"
              >
                Delete
              </button>

            </div>
          ))}

        </div>

        {/* Task Count */}
        <div className="mt-6 text-sm text-gray-500">
          {myTodoList.length} {myTodoList.length === 1 ? "task" : "tasks"}
        </div>

      </div>
    </div>
  );
}
export default MyTodo;