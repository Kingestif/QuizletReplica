import { Star, Volume2 } from "lucide-react"

type DefinitionCardType = {
    name: string
}

export function DefinitionCardItems(props:DefinitionCardType){
    return (
        <div className="flex gap-10 justify-between px-10 py-7 shadow-md bg-white shrink-0">
            <h3>{props.name}</h3>
            {/* <Atom className="w-20 h-20 text-violet-600 "/> */}
            <img src="/assets/Chem.jpg" alt="chemical reaction" />
            <div className="flex gap-5">
                <Star className="w-5 h-5"/>
                <Volume2 className="w-5 h-5 text-amber-300"/>
            </div>
        </div>
    )
}

export function DefinitionCards(){
    return (
        <div className="mt-20">
            <div className="flex justify-between">
                <h3 className="font-bold text-xl">Terms in this set (67)</h3>
                <h3 className="font-bold text-gray-600">Original</h3>
            </div>

            <div className="Definition Cards flex flex-col gap-3 mt-10 bg-blue-600/5 p-5 overflow-y-auto h-150">
                <DefinitionCardItems name="Alcohol"/>
                <DefinitionCardItems name="Ketone"/>
                <DefinitionCardItems name="Ester"/>
                <DefinitionCardItems name="Amine"/>
                <DefinitionCardItems name="Pentane"/>
            </div>
        </div>
    )
}
