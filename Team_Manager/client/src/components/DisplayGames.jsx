import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

const DisplayGames = (props) => {
    const {game} = useParams()
    const {players} = props
    
    const handlePlayerStatus = (id, status) => {
        if(game === 'game1'){
            let game1 = status
            axios.put(`http://localhost:8000/api/player/${id}`, {game1})
                .then(res => {
                    console.log("updated")
                    props.setUpdated()
                })
                .catch(err => {
                    console.log(err)
                    })
        }
        if(game === 'game2'){
            let game2 = status
            axios.put(`http://localhost:8000/api/player/${id}`, {game2})
                .then(res => {
                    console.log("updated")
                    props.setUpdated()
                })
                .catch(err => {
                    console.log(err)
                    })
        }
        if(game === 'game3'){
            let game3 = status
            axios.put(`http://localhost:8000/api/player/${id}`, {game3})
                .then(res => {
                    console.log("updated")
                    props.setUpdated()
                })
                .catch(err => {
                    console.log(err)
                    })
        }

        }

    return (
        <div>
            <h1> <Link to="/players/list">Manage players </Link> |  Manage player status </h1>
            <h3> {game === "game1"? "Game 1 | " : <Link to="/status/games/game1"> Game 1 |</Link>}
                {game === "game2"? "Game 2 | " : <Link to="/status/games/game2"> Game 2 |</Link>}
                {game === "game3"? "Game 3 | " : <Link to="/status/games/game3"> Game 3 </Link>}
            </h3>
            <table>
                <thead>
                    <tr>
                        <td>Player Name: </td>
                        <td>Actions: </td>
                    </tr>
                </thead>
                <tbody></tbody>
            {   
                players&&
                    players.map((eachPlayer, i) => {
                    return (
                        <tr key={i}>
                            <td>{eachPlayer.name}</td>
                            <td><button onClick={()=>handlePlayerStatus(eachPlayer._id,2)} style={{backgroundColor: eachPlayer[game] === 2? "green":"white"}}>Playing</button></td>
                            <td><button onClick={()=>handlePlayerStatus(eachPlayer._id,1)} style={{backgroundColor: eachPlayer[game] === 1? "red":"white"}}>Not Playing</button></td>
                            <td><button onClick={()=>handlePlayerStatus(eachPlayer._id,0)} style={{backgroundColor: eachPlayer[game] === 0? "yellow":"white"}}>Undecided</button></td>                            
                        </tr>
                        
                    )
                    })
                }
            </table>
            </div>
    )
}

export default DisplayGames