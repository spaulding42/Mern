import React, {useState} from 'react'


function BoxInput(props) {
    const [color, setColor] = useState("")

    const handleSubmit= (e) => {
        e.preventDefault()
        props.newBox(color)
        setColor("")
    }

    return (
    <form onSubmit={handleSubmit}>
        
        <p>Color</p>
        <input type = "text" name ="color" onChange = {(e)=>{setColor(e.target.value)}} value={color}></input>
        <input type="submit" value="Submit"></input>
        
    </form>
    )
}

export default BoxInput