import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

const ViewOne = (props) => {
    const {id} = useParams()
    const [game, setGame] = useState(props.oneGame[0])

    let slug = game.name.split(' ').join('+').toLowerCase()

    console.log("one game:")
    console.log(game.name)

    const changeImage = (id, url) => {
        console.log(id)
        const updatepic = document.getElementById(`game${id}`)
        updatepic.src = url
        console.log(document.getElementById(`game${id}`))
    }
  return (
    
    <div>
        <Link to="/">Back to browse</Link>
        {
            game&&
                <div  className = "game">
                    <h1 className='center-text'>{game.name}</h1>
                    <div className='d-flex'>
                        <div className='info-box'>
                            <h3>Rating: {game.rating} </h3>
                            <div>Released: {game.released}</div>
                            
                            <h3> Genres: </h3>
                            {
                            game.genres.map((genre,i)=>{
                                return(
                                <span> {genre.name} | </span>
                                )
                            })
                            }
                            <h3>Platforms:</h3>
                            {
                                game.platforms.map((plat, i) =>{
                                    return (
                                        <span> {plat.platform.name} | </span>
                                    )
                                })
                            }
                            <h4>Find gameplay videos on youtube</h4>
                            <a href={`http://youtube.com/results?sp=mAEB&search_query=${slug}`} target="_blank">Click here for videos</a>
                        </div>
                        <div>
                            <img src ={game.short_screenshots[0].image}  className="small-img"  id={`game${game.id}`}/>
                            <div>
                                {
                                game.short_screenshots.map((img,i) =>{
                                    return (
                                    <button className = "btn" onClick={()=>changeImage(game.id,img.image)}>Image {i + 1}</button>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
        }
    </div>
    
  )
}

export default ViewOne