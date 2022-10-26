import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import '../static/style.css'
const ViewPirate = (props) => {
    const {id} = useParams()
    const [pirate, setPirate] = useState()
    const [updated, setUpdated] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirate/${id}`)
        .then(res => {
            setPirate(res.data.pirate)
            console.log(res.data.pirate)
        })
        .catch(err=>console.log(err))
    },[updated])

    const handlePirateAccessories = (acc) =>{
        if(acc === "pegleg"){
            const updatedPegLeg = !pirate.pegleg
            axios.put(`http://localhost:8000/api/pirate/${id}`, {pegleg:updatedPegLeg})
            .then(res => {
                console.log("done")
                setUpdated(!updated)
            })
            .catch(err => console.log(err))
        }
        if(acc === "eyepatch"){
            const updatedEyePatch = !pirate.eyepatch
            axios.put(`http://localhost:8000/api/pirate/${id}`, {eyepatch:updatedEyePatch})
            .then(res => {
                console.log("done")
                setUpdated(!updated)
            })
            .catch(err => console.log(err))
        }
        if(acc === "hookhand"){
            const updatedHookHand = !pirate.hookhand
            axios.put(`http://localhost:8000/api/pirate/${id}`, {hookhand:updatedHookHand})
            .then(res => {
                console.log("done")
                setUpdated(!updated)
            })
            .catch(err => console.log(err))
        }
    }

  return (
    <div>
        {
            pirate&&
                <div>
                    <h1><span>{pirate.name}</span> <Link to="/">Crew Board</Link></h1>
                    <div className="d-flex">
                        {/* left column */}
                        <div>
                            <img src={pirate.image} alt={`${pirate.name} image`} className="img-view1-size"/>
                            <h3>"{pirate.catchphrase}"</h3>
                        </div>
                        {/* right column */}
                        <div>
                            <h3>About</h3>
                            <p>Position: {pirate.position}</p>
                            <p>Treasures: {pirate.treasure}</p>
                            <p>Peg Leg: {pirate.pegleg} <button onClick ={()=>{handlePirateAccessories("pegleg")}} style={{backgroundColor: pirate.pegleg?"green":"red"}}>{pirate.pegleg?"Yes":"No"}</button></p>
                            <p>Eye Patch: {pirate.eyepatch} <button onClick ={()=>{handlePirateAccessories("eyepatch")}} style={{backgroundColor: pirate.eyepatch?"green":"red"}}>{pirate.eyepatch?"Yes":"No"}</button></p>
                            <p>Hook Hand: {pirate.hookhand} <button onClick ={()=>{handlePirateAccessories("hookhand")}} style={{backgroundColor: pirate.hookhand?"green":"red"}}>{pirate.hookhand?"Yes":"No"}</button></p>
                        </div>
                    </div>
                </div>

        }
    </div>
  )
}

export default ViewPirate