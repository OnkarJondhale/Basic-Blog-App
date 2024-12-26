import { useState } from 'react';

function Input(props)
{
    const [title,setTitle] = useState(props.title);
    const [description,setDescription] = useState(props.description);

    function updatehandler()
    {
        let status = false;
        props.updateclickhandler();
        props.update({title,description,status});
    }

    function titlehandler(e)
    {
        setTitle(e.target.value)
    }

    function descriptionhandler(e)
    {
        setDescription(e.target.value);
    }

    return(
    <>
        <div className="h-fit w-fit p-2 flex flex-col gap-2 bg-transparent">
            <input placeholder={`${props.title}`} className="sm:w-96 text-black rounded-xl p-1 outline-none" onChange={titlehandler}/>
            <textarea placeholder={`${props.description}`} className="sm:w-96 text-wrap text-black rounded-xl p-1 outline-none" onChange={descriptionhandler}/> 
            <button className="bg-red-400 rounded-xl hover:bg-red-900" onClick={updatehandler}> Update </button>
        </div>
    </>
    );
}

export default Input;