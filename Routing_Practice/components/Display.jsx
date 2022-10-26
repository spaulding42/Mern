import React from 'react'
import {useParams} from 'react-router'

function Display() {
    const { first,color,bgcolor } = useParams(); 
    if (color !== null && bgcolor !== null){
        return (
            <h1 style={{backgroundColor:bgcolor, color:color}}>The { isNaN(+first)? "word ":"number " } is {first}!</h1>
        )
    }else{
        return (
            <h1>The { isNaN(+first)? "word ":"number " } is {first}!</h1>
        );
    }
}

export default Display


