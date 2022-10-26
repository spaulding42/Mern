import React, {useState} from 'react'
import './style.css'

function AddToDo(props) {
    const [newToDo, setToDo] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const addingToDo = {toDo: newToDo, done: false}
        props.newToDo(addingToDo)
        setToDo("")
    }
    return (
        <form onSubmit = {handleSubmit}>
            <h3>Add To Do:</h3>
            <input className = "padding"type = "text" value = {newToDo} onChange = {(e)=>setToDo(e.target.value)}/>
            <button className = "btn" type = "submit">Add To Do</button>
        </form>
    )
}

export default AddToDo