import { Image, Star, ChevronRight, Shuffle, ArrowRight, ArrowLeft, Fullscreen } from "lucide-react";
type ChoiceType = {
    label: string;
}

type CardType = {
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
        <div className="flex flex-col items-start gap-10">
            <CardName/>
            <CardChoice/>
        </div>
    )
}

export function BigCard(props: CardType){
    return (
        <div className="flex flex-col shadow-2xl items-center h-100 justify-between mt-10">
            <Star className="w-5 h-5 text-yellow-600 self-end mr-5 mt-3"/>
            <h3 className="text-3xl">{props.label}</h3>
            <h3 className="bg-blue-700 w-full text-center text-white font-semibold p-1">Click the card to flip</h3>
        </div>
    )
}

export function BigCardDetails(){
    return (
        <div className="flex justify-between text-gray-600 mt-3 shadow-md p-3 items-center">
            <div className="flex gap-5">
                <ChevronRight className="w-5 h-5"/>
                <Shuffle className="w-5 h-5"/>
            </div>

            <div className="flex gap-5">
                <ArrowLeft className="w-7 h-7 border-2 rounded-full"/>
                <h3 className="font-semibold">1/67</h3>
                <ArrowRight className="w-7 h-7 border-2 rounded-full"/>
            </div>

            <Fullscreen className="w-5 h-5"/>
        </div>
    )
}