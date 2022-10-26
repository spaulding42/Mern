import React from 'react';
import Main from './views/Main';
import ViewOne from './views/ViewOne'
import {
  Link,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Main />}/>
        <Route path = "/display/:id" element = {<ViewOne />}/>

      </Routes>
    </div>
  );
}
export default App;