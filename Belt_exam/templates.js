
//  SERVER SETUP FILES ======================================================================================================================

// CONFIG -----------------------------------------------------------------------------
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/author_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

// Controllers---------------------------------------------------------------------------

const Author = require("../models/author.model");

module.exports.findAllAuthors = (req, res) => {
    
    Author.find()
        .then(allDaAuthors => res.json({ authors: allDaAuthors }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    
};

module.exports.findOneSingleAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then(oneSingleAuthor => res.json({ author: oneSingleAuthor }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewAuthor = (req, res) => {
    const newAuthor = req.body
    Author.create(newAuthor)
        .then(newlyCreatedAuthor => res.json({ author: newlyCreatedAuthor }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true , runValidators: true})
        .then(updatedAuthor => res.json({ author: updatedAuthor }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// MODELS ------------------------------------------------------------------------------------
const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Author is required"],
            minlength: [3, "Author must be 3 or more characters"]
        }
    },
    {timestamps: true}
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;


//  ROUTES-------------------------------------------------------------------------------
const AuthorController = require('../controllers/author.controller')

module.exports = function(app){
    app.get('/api/author', AuthorController.findAllAuthors);
    app.post('/api/author/new', AuthorController.createNewAuthor);
    app.get('/api/author/:id', AuthorController.findOneSingleAuthor);
    app.put('/api/author/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAnExistingAuthor);
}


// CLIENT FILES=====================================================================================================================================

// APP.js--------------------------------------------------------------------
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

// INDEX.js--------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// MAIN.js-------------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import DisplayAuthors from './DisplayAuthors'

export default () => {
    
    return (
        <div>
            <DisplayAuthors />
        </div>
    )
}

// views +_+_+_+_++_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_++_+_+_+_++_+_+_

// edit----------------------------------------------------------------------
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState('')

    // load author from DB with given ID
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            setName(res.data.author.name)
            console.log(res.data.author.name)
        })
        .catch(err=>setErrors(err.response.data.error.message))
    },[])

    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/${id}`, {name})
            .then(res => {
                navigate("/")
            })
            .catch(err => setErrors(err.response.data.error.message))
    }


    return(
        <div>
            <Link to="/">Home</Link>
            {
                errors&& <div>{errors}</div>
            }
            <form onSubmit = {handleSubmit}>
                <p>
                    <label>Author's Name: </label>
                    <input type = "text" onChange={e=>setName(e.target.value)} value={name}/>
                </p>
                <button type ="submit">Submit</button>
            </form>
        </div>
        
    )
}


// Display ALL----------------------------------------------------------------------------------------------------
import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const DisplayAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    const [unsortedList, setUnsortedList] = useState([]);
    const [sorted, setSorted] = useState(false)
    const sortList = () =>{
        const list = [...unsortedList].sort((a,b) => a.name > b.name ? 1:-1);
        console.log(list)
        setAuthors(list)
        setSorted(true)
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author`)
            .then(response=> {
                setUnsortedList(response.data.authors)
                sortList()
            })
            .catch(err=>console.log(err))
        
    },[sorted])

    return (
        <div>
            <h1>All Authors:</h1>
            <Link to="/author/new">Add a Favorite Author</Link>
            <table>
                <thead>
                    <tr>
                        <td>Author Name: </td>
                        <td>Actions: </td>
                    </tr>
                </thead>
                <tbody>
                {   
                authors&&
                    authors.map((eachAuthor, i) => {
                    return (
                        <tr key={i}>
                            <td>{eachAuthor.name}</td>
                            <td><Link to={`/${eachAuthor._id}/delete`}> Delete</Link> | <Link to={`/${eachAuthor._id}/edit`}> Edit</Link></td>
                        </tr>
                        
                    )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAuthors


// DELETE fuunction -------------------------------------------------------------------------------------------------------------
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const DeleteAuthor = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                navigate("/")
            })
            .catch(err=>console.log(err))
    },[])
    return (
    <div>Deleting Author...</div>
    )
}

export default DeleteAuthor


// CREATE ----------------------------------------------------------------------------------------------------

import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
export default (props) => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.post('http://localhost:8000/api/author/new', {name})
            .then(res => {
                navigate("/")
                
            })
            .catch(err => {
                setErrors(err.response.data.error.message)
            })
    
    }
    return(
        <div>
            <Link to="/">Home</Link>
            {
                errors&& <div>{errors}</div>
            }
            <form onSubmit = {handleSubmit}>
                <p>
                    <label>Author's Name: </label>
                    <input type = "text" onChange={e=>setName(e.target.value)} value={name}/>
                </p>
                
                <button type ="submit">Submit</button>
            </form>

        </div>
    )
}
