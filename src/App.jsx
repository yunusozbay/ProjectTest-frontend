import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import AllDogs from './pages/AllDogs'
import NewDog from './pages/NewDog'
import SingleDog from './pages/SingleDog'
import UpdateDog from './pages/UpdateDog'


function App() {

  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/dogs' element={<AllDogs/>}></Route>
      <Route path='/dogs/:dogId' element={<SingleDog/>}></Route>
      <Route path='/dogs/new' element={<NewDog/>}></Route>
      <Route path='/dogs/update/:dogId' element={<UpdateDog/>}></Route>
    </Routes>
    </div>
  )
}

export default App
