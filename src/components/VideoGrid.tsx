
import { VideoCard } from "./VideoCard"


const VIDEOS = [{
    title: "The Bhagavad Gita! | Day 5 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "5k views",
    timeStamp: "14 hours ago"
}, {
    title: "The Slow day! | Day 6 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "7k views",
    timeStamp: "14 hours ago"
}, {
    title: "The Fast paced Life! | Day 7 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
},{
    title: "The Fast paced Life! | Day 8 | Building the MVP Mindset! ",
    image: "./photo.png",
    author: "iSanjeev Sriram",
    views: "15k views",
    timeStamp: "14 hours ago"
}];
export function VideoGrid()
{
   return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
       {VIDEOS.map(function (v) {
           return <VideoCard title={v.title} image={v.image} author={v.author} views={v.views} timeStamp={v.timeStamp}/>
       })}
   </div>
}