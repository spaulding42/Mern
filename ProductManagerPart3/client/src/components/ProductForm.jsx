import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
export default (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.post('http://localhost:8000/api/product/new', {title, price, description})
            .then(res => {
                console.log(`Response: ${res}`)
                setTitle('')
                setPrice('')
                setDescription('')
                navigate("/")
                props.newProduct();
                
            })
            .catch(err => console.log(err))
    
    }
    return(
        <form onSubmit = {handleSubmit}>
            <p>
                <label>Title</label>
                <input type = "text" onChange={e=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label>
                <input type = "text" onChange = {e=>setPrice(e.target.value) } value={price}/>
            </p>
            <p>
                <label>Description</label>
                <textarea onChange = {e=>setDescription(e.target.value)} value={description} rows="10" cols="20"/>
            </p>
            <button type ="submit">Submit</button>
        </form>
    )
}