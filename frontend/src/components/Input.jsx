import { useState } from 'react';

function Input(props) {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);

    function handleUpdate() {
        let status = false;
        props.updateclickhandler();
        props.update({ title, description, status });
    }

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    return (
        <div className="h-fit w-fit p-2 flex flex-col gap-2 bg-transparent input-container">
            <input 
                placeholder={`${props.title}`} 
                className="sm:w-96 text-black rounded-xl p-1 outline-none" 
                value={title}
                onChange={handleTitleChange} 
            />
            <textarea 
                placeholder={`${props.description}`} 
                className="sm:w-96 text-wrap text-black rounded-xl p-1 outline-none" 
                value={description}
                onChange={handleDescriptionChange} 
            /> 
            <button className="bg-red-400 rounded-xl hover:bg-red-900 p-2 input-btn" onClick={handleUpdate}> Update </button>
        </div>
    );
}

export default Input;
