import Header from "../home/header/header";
import Login from "../registrLogin/login/login";
import Registr from "../registrLogin/registr/regisrt";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
function Home() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path ='/' element={<Header/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path ='/registr' element ={<Registr/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Home
