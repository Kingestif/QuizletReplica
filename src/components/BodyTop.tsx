import { Image } from "lucide-react";
type ChoiceType = {
    label: string;
}
export function CardName() {
    return (
        <div>
            <div>
                <h1 className="font-bold text-2xl">Organic Chemistry</h1>
                <div className="flex gap-5 text-gray-600 font-semibold">
                    <h3>105 studiers today</h3>
                    <h3>3.6 (65 reviews)</h3>
                </div>
            </div>
        </div>
    );
}

export function ChoiceItems(props:ChoiceType) {
    return (
        <div className="flex bg-blue-600/10 items-center gap-2 px-20 py-3 rounded-2xl">
            <Image className="w-6 h-6 text-violet-600"/>
            <div className="font-semibold text-gray-700">{props.label}</div>
        </div>
    )
}


export function CardChoice(){
    return (
        <div className="flex gap-5 flex-wrap">
            <ChoiceItems label="Flashcards"/>
            <ChoiceItems label="Learn"/>
            <ChoiceItems label="Test"/>
            <ChoiceItems label="Blocks"/>
            <ChoiceItems label="Blast"/>
            <ChoiceItems label="Match"/>
        </div>
    )
}

export function BodyTop (){
    return (   
        <div className="flex flex-col items-start gap-10 mx-100">
            <CardName/>
            <CardChoice/>
        </div>
    )
}