import React, {useState} from 'react'
import'./style.css';

function DisplayToDo(props) {
    const handleDelete = (index) =>{
        props.deleteTodo(index)
    }
    const handleCheckbox = (e,index) =>{
        const listCopy = [...props.toDoList]
        listCopy[index].done = e.target.checked
        props.updateList(listCopy)
    }
    
    return (
        <ol>
            {
                props.toDoList.map((eachToDo, i) =>{
                    return (
                        <li>
                            <span className = "bigfont" style={eachToDo.done?{textDecoration: "line-through"}:{textDecoration: "none"}}>{eachToDo.toDo}</span>   
                            <span> <input type="checkbox" checked={eachToDo.done} onChange={(e)=>handleCheckbox(e,i)}/></span>   
                            <span><button className = "btn" onClick = {() => handleDelete(i)}>Delete</button></span>
                        </li>
                    )
                })
            }
        </ol>
    )
}

export default DisplayToDo