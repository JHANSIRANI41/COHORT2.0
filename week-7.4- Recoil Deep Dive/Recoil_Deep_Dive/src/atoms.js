import axios from "axios";
import { atom, selector } from "recoil"
// export const myNetworkAtom = atom({
//     key: "myNetworkAtom ",
//     default: 108
// })
// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default: 1
// })
// export const messagesAtom = atom({
//     key: "messagesAtom",
//     default: 90
// })
// export const notificationsAtom = atom({
//     key: "notificationsAtom",
//     default: 35
// })

// export const totalNotificationCountSelector = selector({
//     key: "totalNotificationCountSelector",
//     get: ({get }) => {
//         const network = get(myNetworkAtom);
//         const jobs = get(jobsAtom);
//         const messages = get(messagesAtom);
//         const notifications = get(notificationsAtom);
//         return network + jobs + messages + notifications;


//     }
// })
// { "network": 1, "jobs": 6, "messaging": 4, "notifications": 0 }


export const notificationCount = atom({
    key: "networkAtom",
    //this shoudnt be a default value,but it has to come from a backend
    // default: {
    //     network: 4,
    //     jobs: 6,
    //     messaging: 3,
    //     notifications: 3
    // }
    // useEffect(() => {
    //     axios.get("http://localhost:8080/notifications").then(function(res) {

    //         setNetworkCount(res.data)
    //     })
    // }, []);
    default: selector({
        key: "networkAtomSelector",
        get: async() => {

            await new Promise(r => setTimeout(r, 5000)) //sleep for 5 sec
            const res = await axios.get("http://localhost:8080/notifications")
            return res.data


        }
    })

})


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get }) => {
        const allNotifications = get(notificationCount);
        return allNotifications.network +
            allNotifications.jobs +
            allNotifications.messaging +
            allNotifications.notifications;



    }
})