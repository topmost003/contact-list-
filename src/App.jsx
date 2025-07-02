import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Welcome from './pages/Welcome'
import Contact from './pages/Contact'
import Appreciation from './pages/Appreciation'
import Header from './components/static/header'
import Footer from './components/static/footer'


function App() {
  

  return (
 <div>
<BrowserRouter>
<Header></Header>
<Routes>

<Route path='/' element = {<Welcome/>}/>
<Route path='contact' element= {<Contact/>}/>
<Route  path='appreciation' element ={<Appreciation/>}/>

</Routes>
<Footer></Footer>
</BrowserRouter>


 </div> 
  )
}

export default App
