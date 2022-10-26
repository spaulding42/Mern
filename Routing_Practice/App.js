import React from "react";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import Display from "./components/Display";

const Home = () =>{
  return(
    <h1>Welcome!</h1>
  )
}

function App() {
  return (
    <div>
      <Link to={"/home"}>Go Home</Link>|
      <Link to={"/4"}>Go to 4</Link>|
      <Link to={"/cars"}>Go to Cars</Link>|
      <Link to={"/cars/blue"}>Go to Blue Cars</Link>|
      <Link to={"/cars/blue/red"}>Go to Blue Cars with Red Background</Link>
      <Routes>
        <Route path="/:first" element={<Display />}/>
        <Route path="/:first/:color" element={<Display />}/>
        <Route path="/:first/:color/:bgcolor" element={<Display />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  );
}
    
export default App