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