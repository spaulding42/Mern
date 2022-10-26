import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
export default (props) => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.post('http://localhost:8000/api/author/new', {name})
            .then(res => {
                navigate("/")
                
            })
            .catch(err => {
                console.log(err.response.data._message)
                setErrors(err.response.data._message)
            })
    
    }
    return(
        <div>
            <Link to="/">Home</Link>
            {
                errors&& <div>{errors}</div>
            }
            <form onSubmit = {handleSubmit}>
                <p>
                    <label>Author's Name: </label>
                    <input type = "text" onChange={e=>setName(e.target.value)} value={name}/>
                </p>
                
                <button type ="submit">Submit</button>
            </form>

        </div>
    )
}