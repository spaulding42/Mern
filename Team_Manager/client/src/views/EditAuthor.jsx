import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState('')

    // load author from DB with given ID
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            setName(res.data.author.name)
            console.log(res.data.author.name)
        })
        .catch(err=>setErrors(err.response.data.errors.name.message))
    },[])

    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/${id}`, {name})
            .then(res => {
                navigate("/")
            })
            .catch(err => {
                console.log(err.response.data.errors.name.message)
                setErrors(err.response.data.errors.name.message)})
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