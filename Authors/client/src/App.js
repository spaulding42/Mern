import React from 'react';
import Main from './views/Main';
import AddAuthorForm from './views/AddAuthorForm';
import EditAuthor from './views/EditAuthor';
import DeleteAuthor from './views/DeleteAuthor';
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
        <Route path = "/author/new" element = {<AddAuthorForm />}/>
        <Route path = "/:id/edit" element = {<EditAuthor/>}/>
        <Route path = "/:id/delete" element = {<DeleteAuthor/> } />
      </Routes>
    </div>
  );
}
export default App;