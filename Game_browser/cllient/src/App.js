import React, {useState,useEffect} from 'react'
import BrowseAll from './components/BrowseAll'
import ViewOne from './components/ViewOne'
import BrowseGenre from './components/BrowseGenre'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import SearchGame from './components/SearchGame'

const App = () => {
  const [gameList, setGameList] = useState([])
  const [oneGame, setOneGame] = useState()
  const navigate = useNavigate()

  const updateGameList = (newList)  =>{
    setGameList(newList)
  }

  const viewOne = (id, Game) => {
    setOneGame(Game)
    navigate(`/view/${id}`)
  }

  return (
    <>
    <Routes>
      <Route path="/" element = {<BrowseAll gameList ={gameList} updateGameList={updateGameList} viewOne={viewOne}/>} />
      <Route path = "/view/:id" element = {<ViewOne oneGame={oneGame}/>} />
      <Route path = "/genre/:genre" element = {<BrowseGenre gameList={gameList} updateGameList = {updateGameList} viewOne={viewOne}/>} />
      <Route path = "/search" element = {<SearchGame viewOne={viewOne}/>} />
    </Routes>
    </>
  )
}

export default App


