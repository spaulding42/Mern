import React, {useState, useEffect} from 'react';
import Main from './views/Main';
import DisplayPlayers from './components/DisplayPlayers';
import DisplayGames from './components/DisplayGames';
import AddPlayer from './components/AddPlayer';
import axios from 'axios'
import {Link, Routes, Route, useNavigate} from "react-router-dom";


function App() {
    const [players, setPlayers] = useState([])
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/player`)
            .then(response=> {
                setPlayers(response.data.players)
                console.log(response.data)
            })
            .catch(err=>console.log(err))
        
    },[updated])

    const handleDelete = async(id,name) =>{
        
        if(window.confirm(`Press OK to confirm deletion of ${name}`)){
            axios.delete(`http://localhost:8000/api/player/${id}`)
                .then(res => {
                    const filteredPlayers = [...players]
                    setPlayers(filteredPlayers.filter(player=>player._id != id))
                    setUpdated(!updated)
                    // navigate("/players/list")
                })
                .catch(err=>console.log(err))
        }
    }
    const handleUpdate = () =>{ setUpdated(!updated)}

    return (
        <div className="App">
        <Routes>
            <Route path = "/" element = {<Main />}/>
            <Route path = "/status/games/:game" element = {<DisplayGames players={players} setUpdated={handleUpdate}/>}/>
            <Route path = "/players/list" element = {<DisplayPlayers players={players} handleDelete={handleDelete}/>}/>
            <Route path = "/players/addplayer" element = {<AddPlayer setUpdated={handleUpdate}/>}/>
        </Routes>
        </div>
    );
}
export default App;