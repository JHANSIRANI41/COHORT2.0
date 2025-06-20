import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom"
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  //move this hook also insize the <BrowserRouter
  // const navigate = useNavigate();

  return (
    <div>
      {/* if it is here it wont work ,this should be inside the <BrowserRoute></BrowserRoute> component . */}
      {/* <div>
        hi there ,this is constant
      <br></br>

        <button onClick={function ()
        { 
          // window.location.href="/"
          navigate("/")
        }}>landing page</button>
        <button onClick={function ()
        {
          // window.location.href="/dashboard"
          navigate("/dashboard")
        }}>Dashboard</button>
       
      </div> */}
     
      <BrowserRouter>
        <AppCom></AppCom>
        <Routes>
          <Route path="Dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppCom()
{
  const navigate = useNavigate();

 return  <div>
        <button onClick={function ()
        { 
          // window.location.href="/"
          navigate("/")
        }}>landing page</button>
        <button onClick={function ()
        {
          // window.location.href="/dashboard"
          navigate("/dashboard")
        }}>Dashboard</button>
       
      </div>
}
export default App
