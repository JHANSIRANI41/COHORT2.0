import { useContext, useState } from "react";
import { CountContext } from "./components/CreateContext";

function App()
{
    const [count, setCount] = useState(0);
    return <div>
        <CountContext.Provider value={count}></CountContext.Provider>
        <Count  setCount={setCount}></Count>
    </div>
}

function Count({ setCount })
{
    return <div>
        <CountRender />
        <Buttons setCount={setCount}/>
    </div>
}
function CountRender()
{
    const count =useContext(CountContext)
    return <div>
        {count}
    </div>
}
function Buttons({ setCount })
{
    const count =useContext(CountContext)
    return <div>
        <button onClick={() => { setCount(count + 1) }}> Increase</button>
        <button onClick={()=>{setCount(count-1)}}> Decrease</button>
    </div>
}
export default App;