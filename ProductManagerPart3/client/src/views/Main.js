import React, { useEffect, useState } from 'react'

import ProductForm from '../components/ProductForm';
import DisplayProducts from '../components/DisplayProducts';

export default () => {
    const [newProduct, setNewProduct] = useState(false)

    const updateProducts = () => {
        setNewProduct(!newProduct)
        console.log("new product added")
    }
    return (
        <div>
            <ProductForm newProduct={updateProducts}/>
            <DisplayProducts newProduct={newProduct}/>
                    
            
        </div>
    )
}