import React, { useEffect, useState } from 'react'

import ProductForm from '../components/ProductForm';
import DisplayProducts from '../components/DisplayProducts';

export default () => {
    const [newProduct, setNewProduct] = useState()

    const updateProducts = (newestProduct) => {
        setNewProduct(newestProduct)
    }
    return (
        <div>
            <ProductForm newProduct={updateProducts}/>
            <DisplayProducts newProduct={newProduct}/>
                    
            
        </div>
    )
}