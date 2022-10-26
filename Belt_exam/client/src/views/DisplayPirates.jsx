import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'
import '../static/style.css'

const DisplayPirate = (props) => {
    const {pirates} = props

    

    return (
        <div>
            <div className="d-flex justify-between bg-brown">
                <div className="bg-brown color-brown">.</div>
                <h1>Pirate Crew</h1>
                <Link className= "btn bg-blue height-20 margin-20" to="/pirate/new">Add Pirate</Link>

            </div>
            <div className="bg-orange padding">
                {   
                pirates&&
                    pirates.map((eachPirate, i) => {
                    return (
                        <div key={i} className="d-flex crewDiv">
                            <img src={eachPirate.image} alt={`${eachPirate.name} image`} className="img-size padding"/>
                            <div>
                                <h3>{eachPirate.name}</h3>
                                <div><Link className="btn bg-blue margin-20" to={`/pirate/${eachPirate._id}`}> View Pirate</Link>  <button className = "btn bg-red margin-20" onClick={()=>props.handleDelete(eachPirate._id, eachPirate.name)}>Walk the Plank</button></div>
                            </div>
                        
                        </div>
                    )
                    })
                }

            </div>
            
        </div>
    )
}

export default DisplayPirate