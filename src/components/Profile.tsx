import { Image } from "lucide-react"
type ProfileType = {
    label: string
}

export function Profile(props: ProfileType){
    return (
        <div className="flex mt-10 gap-5 ">
            <Image className="w-10 h-10 text-blue-600 border-2 rounded-full p-1"/>
            
            <div>
                <h3 className="text-gray-600 text-sm">Created By</h3>
                <h3>{props.label}</h3>
            </div>
        </div>
    )
}