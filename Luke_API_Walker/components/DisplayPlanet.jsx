import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function DisplayPlanet() {
    const { id } = useParams();
    const [planet, setPlanet] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response=> setPlanet(response.data))
            .catch(err=> setPlanet())
        },[id]
        )
    
    return (
        <div>
            {
            planet? 
            <div>
                <h1 className="underline bold">{planet.name}</h1>
                <div><span className="bold">Climate:</span> {planet.climate} </div>
                <div><span className="bold">Terrain:</span> {planet.terrain} </div>
                <div><span className="bold">Surface Water: </span>{planet.surface_water}% </div>
                <div><span className="bold">Population: </span>{planet.population} </div>
            </div>
                :<div>Loading...</div>
            }
        </div>
    )
}

export default DisplayPlanet