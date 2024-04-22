import Login from "./registrLogin/login/login";
import Registr from "./registrLogin/registr/regisrt";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./home/home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path ='/registr' element ={<Registr/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
