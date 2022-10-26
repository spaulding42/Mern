import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './style.css'

function DisplayPerson() {
    const { id } = useParams();
    const [person, setPerson] = useState()
    

    useEffect(()=>{
      axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=> setPerson(response.data))
        .catch(err=> setPerson())
    },[id]
    )
    
    return (
      <div>
        {
          person? 
          <div>
            <h1 className="underline bold">{person.name}</h1>
            <div><span className="bold">Height:</span> {person.height} </div>
            <div><span className="bold">Mass:</span> {person.mass} </div>
            <div><span className="bold">Hair Color: </span>{person.hair_color} </div>
            <div><span className="bold">Skin Color: </span>{person.skin_color} </div>
          </div>
            :<img src="https://www.meme-arsenal.com/memes/52577612a290566287f2273992fa918e.jpg" alt="this is not the img you are looking for"/>
        }
      </div>
    )
}

export default DisplayPerson