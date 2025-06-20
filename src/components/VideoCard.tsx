export function VideoCard(props:any)
{
    return <div className="p-3 cursor-pointer">
        <img className=" w-140 h-70 border-xl p-2 " src={props.image}  alt="" />
        <div className="grid grid-cols-12 pt-4 ">
            <div className="col-span-1 p-2">
                <img className=" rounded-full w-15 h-15 "  src={props.image} alt=""  />
            </div>
            
            <div  className="col-span-11">
            <div className="col-span-11">
                {props.title}
            </div>
                <div className="col-span-11 text-gray-400 text-base" > {props.author}</div>
                <div className="col-span-11  text-gray-400 text-base ">{props.views}. {props.timeStamp}</div>
           
            </div>
            

        </div>
    </div>
}
