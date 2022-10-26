import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const DisplayPlayers = (props) => {
   
    const {players} = props
    

    
    return (
        <div>
            <h1> Manage players | <Link to="/status/games/game1"> Manage player status </Link></h1>
            <h2>List Players | <Link to="/players/addplayer">Add Player</Link></h2>
            <table>
                <thead>
                    <tr>
                        <td>Player Name: </td>
                        <td>Preferred Position: </td>
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
                            <td>{eachPlayer.position? eachPlayer.position: "None"}</td>
                            <td><button onClick={()=>props.handleDelete(eachPlayer._id, eachPlayer.name)}>Delete</button></td>
                        </tr>
                        
                    )
                    })
                }
            </table>
        </div>
    )
}

export default DisplayPlayers