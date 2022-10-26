import React from "react";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";

import DisplayPerson from "./components/DisplayPerson";
import DisplayPlanet from "./components/DisplayPlanet";
import Search from "./components/Search";

const Home = () =>{
  return(
    <h1>Welcome! Please select a category and an ID to perform a search </h1>
  )
}

const ErrorPage = () =>{
  return(
    <img src="https://www.meme-arsenal.com/memes/52577612a290566287f2273992fa918e.jpg" alt="this is not the img you are looking for"/>
  )
}

function App() {
  return (
    <div>
      <Link to="/">Go Home</Link>
      <Search />
      <Routes>
        <Route path = "/people/:id" element={<DisplayPerson />}/>
        <Route path = "/planets/:id" element={<DisplayPlanet />}/>
        <Route path = "/" element = {<Home />} />
        <Route path = "*" element = {<ErrorPage />}/>
      </Routes>
    </div>
  );
}
    
export default App