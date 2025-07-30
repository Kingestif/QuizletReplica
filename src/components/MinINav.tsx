import { Bookmark, Share, Ellipsis } from "lucide-react";
type SaveType = {
    label: string
}

export function Save(props:SaveType){
    return (
        <div className="flex items-center gap-2 border-2 rounded-full px-4 border-gray-300">
            <Bookmark className="w-4 text-gray-600"/>
            <h3 className="font-semibold text-gray-500">{props.label}</h3>
        </div>
    )
}

export function CircleShare(){
    return(
        <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full p-1 border-gray-300">
            <Share className="w-5 h-5 text-gray-600"/>
        </div>
    )
}

export function ThreeDot() {
    return (
        <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full p-1 border-gray-300">
            <Ellipsis className="w-8 h-8 text-gray-600"/>
        </div>
    )
}

export function MiniNav(){
    return (
        <div className="flex gap-10 items-center justify-between">
            <h1 className="text-gray-600 font-semibold">Organic Chemistry</h1>
            <div className="flex gap-7">
                <Save label="Save"/>
                <CircleShare/>
                <ThreeDot/>
            </div>
        </div>
    )
}