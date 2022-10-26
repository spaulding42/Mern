import React, {useState} from 'react'
import BoxInput from './BoxInput'
import ListBox from './ListBox'

function BoxCreator() {
    const [colorInput, setColorBox] = useState([])
    

    const makeBox = (color) => {
        setColorBox([...colorInput, color])
    }
    return (
    <div>
        <BoxInput newBox={makeBox} />
        <ListBox color={colorInput}/>

    </div>
    ) 
}

export default BoxCreator