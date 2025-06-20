import { SearchBar } from "./SearchBar";

export function AppBar()
{
    return <div className="flex justify-between p-3 pt-1">
        <div className="text-md inline-flex items-center pb-2">Youtube</div>
        <div><SearchBar></SearchBar></div>
        <div className="text-md inline-flex items-center pb-2"> sign in</div>
    </div>
}