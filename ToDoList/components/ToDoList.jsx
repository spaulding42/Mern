import React, {useState} from 'react'
import AddToDo from './AddToDo'
import DisplayToDo from './DisplayToDo'

function ToDoList() {
  const [toDoList, setToDoList] = useState([])

  const addToDo = (newToDo) => {
    setToDoList([...toDoList,newToDo])
  }
  const filterToDo = (index) => {
    const filteredList = toDoList.filter((eachToDo,i) => i !==index)
    setToDoList(filteredList)
  }
  const updateList = (updatedTodos) =>{
        setToDoList(updatedTodos)
  }
  return (
    <div>
        <AddToDo newToDo={addToDo}/>
        <DisplayToDo toDoList = {toDoList} deleteTodo = {filterToDo} updateList={updateList}/>
        
    </div>
  )
}

export default ToDoList