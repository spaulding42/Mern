import React from 'react';
import Main from './views/Main';
import ViewOne from './views/ViewOne'
import EditOne from './views/EditOne';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import DeleteProduct from './components/DeleteProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Main />}/>
        <Route path = "/display/:id" element = {<ViewOne />}/>
        <Route path = "/:id/edit" element = {<EditOne/>}/>
        <Route path = "/:id/delete" element = {<DeleteProduct/> } />
      </Routes>
    </div>
  );
}
export default App;