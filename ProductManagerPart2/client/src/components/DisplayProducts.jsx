import React, {useState,useEffect} from 'react'
import axios from 'axios';
import DisplayProductsTable from './DisplayProductsTable';

const DisplayProducts = (props) => {
  const [products, setProducts] = useState();

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/product`)
        .then(response=> setProducts(response.data))
        .catch(err=>console.log(err))
    
  },[props.newProduct])

  return (
    <div>
        <h1>All Products:</h1>
        {
          products?
            <DisplayProductsTable products={products}/>:
            <h3>Loadingl</h3>
        }
    </div>
  )
}

export default DisplayProducts