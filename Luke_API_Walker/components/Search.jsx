import React, {useState} from 'react'
import './style.css'
import {useNavigate} from 'react-router-dom'

function Search() {
    const [searchType, setSearchType] = useState("")
    const [id, setID] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate(`/${searchType}/${id}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            Search for:
            <select className="margin-LR" value = {searchType} onChange ={e=>setSearchType(e.target.value)}>
                <option hidden> Choose a category</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            ID:
            <input type = "number"  className="margin-LR" value={id} onChange ={e=>setID(e.target.value)}/>
            <button type = "submit" className="margin-LR btn">Search</button>
        </form>
    )
}

export default Search