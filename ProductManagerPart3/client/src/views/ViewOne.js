import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ViewOne = () => {
  const {id} = useParams();
  const [oneProduct, setProduct] = useState()
  
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response=> setProduct(response.data))
        .catch(err=>console.log(err))
    
  },[])
  
  return (
    <div>
      <Link to={"/"}>Home</Link>  
      {
      oneProduct&&
        <div>
          <h1>{oneProduct.product.title}</h1>
          <p>Price: ${oneProduct.product.price}</p>
          <p>Description: {oneProduct.product.description}</p>
          <Link to={`/${id}/edit`}> Edit </Link> |
          <Link to={`/${id}/delete`}> Delete </Link>
        </div>
      }
    </div>
  )
}

export default ViewOne