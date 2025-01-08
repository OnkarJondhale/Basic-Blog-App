import { useState } from 'react';
import { IoMdCreate, IoMdClose } from "react-icons/io";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

import Input from './Input';

function Todo(props) {
    const [title, setTitle] = useState(props.todo.title);
    const [description, setDescription] = useState(props.todo.description);
    const [status, setStatus] = useState(props.todo.status);
    const [showInput, setShowInput] = useState(false);

    function handleDelete() {
        props.deleteTodo(props.todo._id);
    }

    function handleUpdate(data) {
        props.updateTodo(props.todo._id, data);
    }

    function toggleUpdateForm() {
        setShowInput(!showInput);
    }

    function toggleStatus() {
        const newStatus = !status;
        setStatus(newStatus);
        props.updateTodo(props.todo._id, { title, description, status: newStatus });
    }

    return (
        <div className="min-h-32 min-w-32 bg-blue-600 text-white rounded-xl p-2 px-4 mt-4 todo-container fade-in">
            <div className="flex flex-col gap-2">
                <p className="text-2xl font-mono underline">{props.todo.title}</p>
                <p className="text-lg">{props.todo.description}</p>
                <p className="text-sm">{props.todo.createAt}</p>
            </div>
            <div className="h-fit w-fit p-4 flex justify-between gap-4 items-center">
                {showInput ? (
                    <IoMdClose className="text-3xl cursor-pointer hover:bg-red-400 p-1 rounded-full btn" onClick={toggleUpdateForm} />
                ) : (
                    <IoMdCreate className="text-3xl cursor-pointer hover:bg-red-400 p-1 rounded-full btn" onClick={toggleUpdateForm} />
                )}
                <IoCheckmarkDoneCircleSharp 
                    className={`text-3xl cursor-pointer hover:bg-red-400 p-1 rounded-full btn ${status ? 'bg-green-400' : 'bg-transparent'}`} 
                    onClick={toggleStatus} 
                />
                <RiDeleteBin5Line className="text-3xl cursor-pointer hover:bg-red-400 p-1 rounded-full btn" onClick={handleDelete} />
            </div>
            {showInput && (
                <Input 
                    title={title} 
                    description={description} 
                    updateclickhandler={toggleUpdateForm} 
                    update={handleUpdate} 
                />
            )}
        </div>
    );
}

export default Todo;
