import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const DeleteAuthor = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                navigate("/")
            })
            .catch(err=>console.log(err))
    },[])
    return (
    <div>Deleting Author...</div>
    )
}

export default DeleteAuthor