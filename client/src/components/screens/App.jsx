import React from 'react'
import Login from "./registrLogin/login/login";
import Registr from "./registrLogin/registr/regisrt";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./home/home";
import PageAddAnnouncement from "./AddAnnouncement/PageAddAnnouncement"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path ='/registr' element ={<Registr/>}/>
          <Route path ='/addAnnouncement' element={<PageAddAnnouncement/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
