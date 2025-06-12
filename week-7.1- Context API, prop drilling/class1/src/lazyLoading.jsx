import { BrowserRouter, Routes,Route, useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
const Landing=React.lazy(()=>import("./components/Landing"))
const Dashboard=React.lazy(()=>import("./components/Dashboard"))
function App()
{
   
    return <div>
        <BrowserRouter>
            <AppCom></AppCom>
            <Routes>
            <Route path="/dashboard" element={<Suspense fallback={"loading....."}><Dashboard/></Suspense>}></Route>
            <Route path="/" element={<Suspense fallback={"loading....."}><Landing/></Suspense>}></Route>
        </Routes>
        </BrowserRouter>
  </div>


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
export default App;