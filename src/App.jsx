import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import AllBeers from './components/AllBeers'
import axios from 'axios'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import NavList from './components/Navlist'
import BeerDetails from './components/BeerDetails'
import Search from './components/Search'

function App() {
  const [beers, setBeers] = useState([])
  const [searchInput, setSearchInput] = useState('');
  const fetchData = async () => {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
    setBeers(response.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div className="App">
    <NavList/>
    <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/beers' element={<AllBeers beers={beers}/>}/>
      <Route path='/random-beer' element={<RandomBeer/>}/>
      <Route path='/new-beer' element={<NewBeer fetchData={fetchData}/>}/>
      <Route path='/beers/:beerId' element={<BeerDetails beers={beers}/>}/>
    </Routes>
    </div>
  )
}

export default App
