import React, {useState, useEffect} from 'react';
import DisplayPirates from './views/DisplayPirates';
import ViewPirate from './views/ViewPirate';
import CreatePirate from './views/CreatePirate';
import axios from 'axios'
import {Link, Routes, Route } from "react-router-dom";


function App() {
  const [pirates, setPirates] = useState([]);
    
    const [updated, setUpdated] = useState(false)
    
    

     useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirate`)
            .then(response=> {
                console.log(response.data.pirates)
                const list = response.data.pirates
                list.sort((a,b) => a.name > b.name ? 1:-1);
                console.log(list)
                setPirates(list)
                
                
            })
            .catch(err=>console.log(err))
        
    },[updated])
    const handleDelete = async(id,name) =>{
        
      if(window.confirm(`Press OK to confirm deletion of ${name}`)){
          axios.delete(`http://localhost:8000/api/pirate/${id}`)
              .then(res => {
                  const filteredPirates = [...pirates]
                  setPirates(filteredPirates.filter(pirate=>pirate._id != id))
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
        <Route path = "/" element = {<DisplayPirates pirates={pirates} handleDelete={handleDelete}/>}/>
        <Route path = "/pirate/new" element = {<CreatePirate handleUpdate={handleUpdate} pirates={pirates}/>}/>
        <Route path = "/pirate/:id" element = {<ViewPirate/>}/>
        
      </Routes>
    </div>
  );
}
export default App;