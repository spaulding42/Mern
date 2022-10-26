import React, {useState} from "react";
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.post('http://localhost:8000/api/product/new', {title, price, description})
            .then(res =>console.log(`Response: ${res}`))
            .catch(err => console.log(err))
    }
    return(
        <form onSubmit = {handleSubmit}>
            <p>
                <label>Title</label>
                <input type = "text" onChange={e=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label>
                <input type = "text" onChange = {e=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label>
                <input type = "textarea" onChange = {e=>setDescription(e.target.value)}/>
            </p>
            <button type ="submit">Submit</button>
        </form>
    )
}