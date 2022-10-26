import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../static/style.css'

const CreatePirate = (props) => {
    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [treasure, setTreasure] = useState(0)
    const [catchphrase, setCatchPhrase] = useState()
    const [position, setPosition] = useState()
    const [pegleg, setPegleg] = useState(true)
    const [eyepatch, setEyePatch] = useState(true)
    const [hookhand, setHookHand] = useState(true)
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [captainAlready, setCaptainAlready] = useState(false)

    useEffect(()=>{
        for(const pirate of props.pirates){
            // console.log(pirate)
            if (pirate.position === "Captain"){
                setCaptainAlready(true)
                console.log(`found captain ${pirate.name}`)
            }
        }
    },[])
    

    

    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.post('http://localhost:8000/api/pirate', {name, image, treasure, catchphrase, position, pegleg, eyepatch, hookhand})
            .then(res => {
                props.handleUpdate()
                navigate("/")
                
            })
            .catch(err => {
                const errorMessages = err.response.data.err.errors
                const errorList = []
                for (const keys of Object.keys(errorMessages)){
                    errorList.push(errorMessages[keys].message)
                }
                setErrors(errorList)
            })
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className ="bg-brown d-flex justify-between">
                <div className="bg-brown color-brown">.</div>
                <h1>Add Pirate</h1>
                <Link to="/">Crew Board</Link>
            </div>
            
                <div className="bg-orange">

                
                    {
                        errors&& 
                        errors.map((err,i) =>{
                        return (
                            <div key={i} className="color-red">{err}</div>
                        )
                        })
                    }
                    <div className="bg-orange justify-around d-flex">
                        {/* left Column */}
                        <div className="padding">
                            <p>
                                <label>Pirate Name: </label>
                                <input type = "text" onChange={e=>setName(e.target.value)} value={name}/>
                            </p>
                            <p>
                                <label>Image URL: </label>
                                <input type = "text" onChange={e=>setImage(e.target.value)} value={image}/>
                            </p>
                            <p>
                                <label># of Treasure Chests: </label>
                                <input type = "number" onChange={e=>setTreasure(e.target.value)} value={treasure} style={{width: "30px"}}/>
                            </p>
                            <p>
                                <label>Catch Phrase: </label>
                                <input type = "text" onChange={e=>setCatchPhrase(e.target.value)} value={catchphrase}/>
                            </p>
                        </div>
                        {/* Right Column */}
                        <div className="padding">
                            <p>
                                <label>Crew Position: </label>
                                <select value={position} onChange={e=>setPosition(e.target.value)}>
                                    <option hidden>Select a Crew Position</option>
                                    {/* turnary to not display captain if there is one in the crew already */}
                                    <option value="Captain">Captain</option>
                                    <option value="First Mate">First Mate</option>
                                    <option value = "Quarter Master">Quarter Master</option>
                                    <option value="Boatswain">Boatswain</option>
                                    <option value="Powder Monkey">Powder Monkey</option>
                                </select>
                            </p>
                            <p>
                                <p><input type="checkbox" checked={pegleg} onChange={e=>setPegleg(e.target.checked)}/> Peg leg</p>
                                <p><input type="checkbox" checked={eyepatch} onChange={e=>setEyePatch(e.target.checked)}/> Eye Patch</p>
                                <p><input type="checkbox" checked={hookhand} onChange={e=>setHookHand(e.target.checked)}/> Hook Hand</p>
                            </p>
                            <button type="submit">Add Pirate</button>
                        </div>
                    </div>
                </div>
            
        </form>
    )
}

export default CreatePirate