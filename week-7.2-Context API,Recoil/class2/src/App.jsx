import { useRecoilState, useRecoilValue,RecoilRoot, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'



function App() {
  console.log("app rendered")
 

  return (
    <div>
     <Count/>
    </div>
  )
}

function Count()
{
  console.log("Count rendered")
  return <div>
    <CountRerender></CountRerender>
    <Buttons></Buttons>
    <DisplayEvenOdd></DisplayEvenOdd>
  </div>
}
function DisplayEvenOdd()
{
  const isEven = useRecoilValue(evenSelector);

  return <div>
 {isEven? null:<p>it is even</p>}
  </div>
}
function CountRerender()
{
  const count = useRecoilValue(countAtom);
  console.log("countRender rendered")
  
  return <div>
    {count}
    
   </div>
}

function Buttons()
{
//  const [count,setCount]=useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom)
  
  console.log("Buttons rendered")
  return <div>
    <button onClick={function () {
      setCount(count=>count+1);
    }}>Increment</button>
    <button onClick={function () {
      setCount(count=>count-1);
    }}>Decrement</button>
   
  
    
  </div>
}
export default App
