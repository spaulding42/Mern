import React from 'react'
import {Link} from 'react-router-dom'

const DisplayProductsTable = (props) => {
    return (
        <div>
            {
                props.products.products.map((eachProduct, i) => {
                return (
                    <div key={i}>
                        <Link to={`/display/${eachProduct._id}`}>{eachProduct.title}</Link>
                    </div>
                    
                )
                })
            }
        </div>
    )
}

export default DisplayProductsTable