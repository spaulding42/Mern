import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const DeleteProduct = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                navigate("/")
            })
            .catch(err=>console.log(err))
    },[])
  return (
    <div>Deleting Product</div>
  )
}

export default DeleteProduct