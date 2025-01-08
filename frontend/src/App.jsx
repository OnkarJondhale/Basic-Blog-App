import { useState, useEffect } from 'react';
import './App.css';
import Todo from "./components/Todo.jsx";
import { IoMdClose } from "react-icons/io";

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [todo, setTodo] = useState(null);
  const [create, setCreate] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getTodo();
  }, []);

  async function getTodo() {
    try {
      const response = await fetch(`${apiUrl}/getTodo`);
      const value = await response.json();
      setTodo(value.data);
    } catch (error) {
      console.error("Error fetching todos:", error.message);
    }
  }

  async function updateTodo(id, data) {
    try {
      await fetch(`${apiUrl}/updateTodo/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      getTodo();
    } catch (error) {
      console.error("Error updating todo:", error.message);
    }
  }

  async function deleteTodo(id) {
    try {
      await fetch(`${apiUrl}/deleteTodo/${id}`, {
        method: 'DELETE',
      });
      getTodo();
    } catch (error) {
      console.error("Error deleting todo:", error.message);
    }
  }

  async function createTodo(data) {
    try {
      await fetch(`${apiUrl}/createTodo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      getTodo();
    } catch (error) {
      console.error("Error creating todo:", error.message);
    }
  }

  function toggleCreateForm() {
    setCreate(!create);
  }

  return (
    <div className="min-h-screen w-full bg-blue-100">
      <h1 className="h-20 w-full bg-violet-600 text-white text-4xl text-center content-center font-bold">TODO APP</h1>
      <div className="flex justify-end p-2">
        {create ? (
          <IoMdClose className="text-3xl cursor-pointer hover:bg-red-400 p-1 rounded-full btn" onClick={toggleCreateForm} />
        ) : (
          <button className="bg-red-400 rounded-xl hover:bg-red-900 px-2 py-1 btn" onClick={toggleCreateForm}>Create a Todo</button>
        )}
      </div>
      {create && (
        <div className="absolute right-2 flex flex-col gap-2 fade-in">
          <input 
            placeholder="Enter the title for todo" 
            className="text-black outline-none p-1 rounded-xl" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
          <textarea 
            placeholder="Enter the description for todo" 
            className="text-black outline-none p-1 rounded-xl min-h-32" 
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
          />
          <button className="bg-red-400 rounded-xl hover:bg-red-900 px-2 py-1 btn" onClick={() => { createTodo({ title, description }); toggleCreateForm(); }}>Create</button>
        </div>
      )}
      <div className="flex flex-wrap justify-start gap-4 p-4">
        {todo ? 
          todo.map((it, index) => (
            <Todo key={index} todo={it} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          )) : 
          <p>No todo's Found</p>
        }
      </div>
    </div>
  );
}

export default App;

