import { useEffect } from "react"
import axios  from "axios"
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { notificationCount, totalNotificationSelector } from "./atoms"


// function App() {

//   return <div>
//     <RecoilRoot>
//     <NavBar></NavBar>
//     </RecoilRoot>
   
//   </div>
 
// }

// function NavBar()
// {
//   const network = useRecoilValue(myNetworkAtom)
//   const job = useRecoilValue(jobsAtom)
//   const messages = useRecoilValue(messagesAtom)
//   const notifications=useRecoilValue(notificationsAtom)
//   const totalNotificationCount = useRecoilValue(totalNotificationCountSelector)
  
//   useEffect(() => {
//     axios.fetch("").then(function (res)
//     {
//       const json = res.json();
//       set
//    })
//   },[])



//   //but use Memo is not a optimal Approach 
//   //better create a selector,because it has dependency
//   // const notificationCount = useMemo(() => {
//   //   return network + job + messages + notifications;
//   // },[network,job,messages,notifications]) 
//   return <div>
//       <button>Home</button>
//       <button>My Network ({network>=100?"99+":network})</button>
//       <button>Jobs ({job})</button>
//       <button>Messaging ({messages})</button>
//       <button>Notifications ({notifications})</button>
//     <button>Me ({totalNotificationCount})</button>

//     </div>
  
// }

// export default App




function App()
{ 
 
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp()
{
  const [networkCount, setNetworkCount] = useRecoilState(notificationCount)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  
  
  return <div>
    <button>Home</button>
    <button>My Network ({networkCount.network>=100?"99+":networkCount.network})</button>
    <button>Jobs ({ networkCount.jobs})</button>
    <button>Messaging ({networkCount.messaging})</button>
    <button> Notifications ({networkCount.notifications})</button>
     <button>Me ({totalNotificationCount})</button>

  </div>
}
export default App;