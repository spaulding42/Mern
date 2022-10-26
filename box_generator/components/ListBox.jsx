import React from 'react'
import './style.css';


function ListBox(props) {
    return (
    <div style = {{display: "flex"}}>
        {
            props.color.map((eachbox,i)=> {
                return(
                    <div 
                    key={i} 
                    className = "box1" 
                    style={{backgroundColor: eachbox}}
                    ></div>
                )
            })
        }
    </div>
    )
}

export default ListBox