import { Image } from "lucide-react"
type FlashCardItemType = {
    subjectName:string
    terms:string
    author:string
}

export function FlashCardItems(props:FlashCardItemType){
    return (
        <div className="shadow-2xl w-80 flex flex-col p-4 gap-10 rounded-2xl shrink-0 bg-white">
            <div>
                <h3 className="font-bold">{props.subjectName}</h3>
                <h3 className="bg-blue-400/20 w-fit text-xs font-bold text-gray-600 rounded-full px-1 mt-3">{props.terms}</h3>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <Image className="w-7 h-7 border-1 rounded-full p-1 text-violet-600"/>
                    <h3 className="font-semibold text-gray-600">{props.author}</h3>
                </div>
                <h3 className="text-sm font-semibold text-gray-600 border-2 rounded-full p-1 border-gray-300">Preview</h3>
            </div>
        </div>
    )
}

export function FlashCards(){
    return (
        <div className="flex flex-col mt-10">
            <h1 className="font-bold text-xl">Students also studied</h1>
            <div className="bg-blue-600/5 mt-3 rounded-xl px-5">
                <div className="flex gap-10 text-sm font-semibold text-gray-800 mt-5">
                    <h3>Flashcard sets</h3>
                    <h3>Study guides</h3>
                </div>
                <hr className="border-gray-300" />
                <div className="FlashItems flex gap-10 overflow-x-auto mt-5">
                    <FlashCardItems subjectName="Organic Chemistry" terms="108 terms" author="catlyn"/>
                    <FlashCardItems subjectName="Chemistry Topic" terms="108 terms" author="catlyn"/>
                    <FlashCardItems subjectName="Alkane" terms="108 terms" author="catlyn"/>
                    <FlashCardItems subjectName="Alkane" terms="108 terms" author="catlyn"/>
                    <FlashCardItems subjectName="Alkane" terms="108 terms" author="catlyn"/>
                </div>
            </div>
        </div>
    )
}
