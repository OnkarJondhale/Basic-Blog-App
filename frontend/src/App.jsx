import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

import Todo from "./components/Todo.jsx";

import { IoMdClose } from "react-icons/io";

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [todo,setTodo] = useState(null);
  const [create,setCreate]= useState(false);
  const [title,setTitle] = useState(null);
  const [description,setDescription] = useState(null);

  useEffect(()=>{
    getTodo();
  },[])

  async function getTodo()
    {
      try 
      {
        const response = await fetch(`${apiUrl}/getTodo`);
        const value = await response.json();
        setTodo(value.data);
      }
      catch(error)
      {
        console.log(error.message)
      }
    }


  async function updateTodo(id,data)
    {
      try 
      {
        const response = await fetch(`${apiUrl}/updateTodo/${id}`,
          {
            method : 'PUT',
            headers : 
            {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          }
        );
        const value = await response.json();
        console.log(value);
        getTodo();
      }
      catch(error)
      {
        console.log(error.message)
      }
    }

    async function deleteTodo(id)
    {
      try 
      {
        const response = await fetch(`${apiUrl}/deleteTodo/${id}`,
          {
            method : 'DELETE'
          }
        );
        getTodo();
      }
      catch(error)
      {
        console.log(error.message)
      }
    }

    async function createTodo(data)
    {
      try 
      {
        const response = await fetch(`${apiUrl}/createTodo`,{
          method : 'POST',
          headers : {
            'content-type' : 'application/json',
          },
          body : JSON.stringify(data)
        });
        getTodo()
      }
      catch(error)
      {
        console.log(error.message)
      }
    }

    function createtodohandler()
    {
      setCreate(!create);
    }

    function titlehandler(e)
    {
      setTitle(e.target.value);
    }

    function descriptionhandler(e)
    {
      setDescription(e.target.value);
    }
    
    function createhandler()
    {
      createTodo({title : title,description : description});
      createtodohandler();
    }

  return (
    <>
      <div className='min-h-screen w-full bg-blue-100'>
        <h1 className='h-20 w-full bg-violet-600 text-white text-4xl text-center content-center font-bold '> TODO APP </h1>
        <div className='flex justify-end p-2'>
          {
            create==false ? 
            <button className='bg-red-400 rounded-xl hover:bg-red-900 px-2 py-1' onClick={createtodohandler}> Create a Todo</button> 
              :
            <IoMdClose className='bg-red-400 text-3xl cursor-pointer rounded-xl hover:bg-red-900 px-2 py-1' onClick={createtodohandler}/>
          }
        </div>
        {
          (create==true ? 
            <div className='absolute right-2 flex flex-col gap-2'>
              <input placeholder='Enter the title for todo' className='text-black outline-none p-1 rounded-xl' onChange={titlehandler}/>
              <textarea placeholder='Enter the description for todo' className='text-black outline-none p-1 rounded-xl min-h-32' onChange={descriptionhandler}/>
              <button className='bg-red-400 rounded-xl hover:bg-red-900 px-2 py-1' onClick={createhandler}> Create </button>
            </div> 
          : null)
        }
        
       <div className='flex flex-wrap justify-start gap-4 p-4'>
        {
            todo ? 
            todo.map((it,index)=>{
              return <Todo key={index} todo={it} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            })
            : <p> No todo's Found </p>
          }
       </div>

      </div>
    </>
  )
}

export default App
