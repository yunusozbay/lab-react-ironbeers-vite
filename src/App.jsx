
import './App.css'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import AllBeers from './components/AllBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import NavList from './components/Navlist'
import BeerDetails from './components/BeerDetails'

function App() {

  
  return (
    <div className="App">
    <NavList/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/beers' element={<AllBeers />}/>
      <Route path='/random-beer' element={<RandomBeer/>}/>
      <Route path='/new-beer' element={<NewBeer/>}/>
      <Route path='/beers/:beerId' element={<BeerDetails/>}/>
    </Routes>
    </div>
  )
}

export default App
