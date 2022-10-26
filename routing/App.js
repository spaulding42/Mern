import React from "react";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import { useParams } from "react-router";

const Locations = (props) => { 
  const { city,state } = useParams(); // matches our :city in our Routes
  
  return (
    <h1>Welcome to { city }, {state}!</h1>
  );
}
    
function App() {
  return (
    <div>
      <p>
        <Link to="/location/Seattle/Washington">Seattle</Link>
         | 
        <Link to="/location/Chicago/Illinois">Chicago</Link>
         | 
        <Link to="/location/Burbank/California">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city/:state" element={<Locations />}/>
      </Routes>
    </div>
  );
}
    
export default App;