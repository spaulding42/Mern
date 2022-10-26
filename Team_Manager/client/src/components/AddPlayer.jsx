import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default (props) => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.post('http://localhost:8000/api/player', {name, position})
            .then(res => {
                props.setUpdated()
                navigate("/players/list")
                
            })
            .catch(err => {
                const errorMessages = err.response.data.errors
                const errorList = []
                for (const keys of Object.keys(errorMessages)){
                    errorList.push(errorMessages[keys].message)
                }
                setErrors(errorList)
            })
    }
    return(
        <div>
            <Link to="/players/list">Back</Link>
            {
                errors&& 
                errors.map((err,i) =>{
                return (
                    <div key={i}>{err}</div>
                )
                })
            }
            <form onSubmit = {handleSubmit}>
                <p>
                    <label>Player Name: </label>
                    <input type = "text" onChange={e=>setName(e.target.value)} value={name}/>
                </p>
                <p>
                    <label>Preferred Position: </label>
                    <input type = "text" onChange={e=>setPosition(e.target.value)} value={position}/>
                </p>
                
                <button type ="submit">Submit</button>
            </form>

        </div>
    )
}