import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const EditOne = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneProduct, setProduct] = useState()

        // on load it will populate the fields
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(response=> {
                setProduct(response.data.product)
                setTitle(response.data.product.title)
                setPrice(response.data.product.price)
                setDescription(response.data.product.description)
                console.log(response.data.product)
            })
            .catch(err=>console.log(err))
        
        },[])

        // on submit it will save then redirect to view one (of its id)
    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`, {title, price, description})
            .then(res => {
                navigate(`/display/${id}`)
            })
            .catch(err => console.log(err))
    }

    

    
    return(
        <div>
            <button onClick={()=>navigate("/")}>Home</button>
            {
                oneProduct&&
                    <form onSubmit = {handleSubmit}>
                        <p>
                            <label>Title</label>
                            <input type = "text" onChange={e=>setTitle(e.target.value)} value={title}/>
                        </p>
                        <p>
                            <label>Price</label>
                            <input type = "text" onChange = {e=>setPrice(e.target.value)} value={price}/>
                        </p>
                        <p>
                            <label>Description</label>
                            <textarea onChange = {e=>setDescription(e.target.value)} value={description} rows="10" cols="20"/>
                        </p>
                        <button type ="submit">Submit</button>
                        
                    </form>
            }
        </div>
        
    )
}

export default EditOne