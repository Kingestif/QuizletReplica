type FotterType = {
    label1: string
    label2: string
    label3: string
    label4: string
    label5: string
}

export function Base(props: FotterType){
    return (
        <div className="flex flex-col gap-3">
            <h1 className="font-bold">{props.label1}</h1>
            <div>
                <h3>{props.label2}</h3>
                <h3>{props.label3}</h3>
                <h3>{props.label4}</h3>
                <h3>{props.label5}</h3>
            </div>
        </div>
    )
}

export function Footer1(){
    return (
        <Base label1="About Us" label2="About Quizlet" label3="Get the app" label4="Advertise" label5="How we work"/>
    )
}

export function Footer2(){
    return (
        <Base label1="For Students" label2="Flashcards" label3="Test" label4="Learn" label5="Solutions"/>
    )
}

export function Footer3(){
    return (
        <Base label1="For Teachers" label2="Live" label3="Blog" label4="Quizlet Pro" label5="Solutions"/>
    )
}

export function Footer4(){
    return (
        <Base label1="Resources" label2="Help Center" label3="Honour Code" label4="Terms" label5="Privacy"/>
    )
}


export function Footer(){
    return (
        <div>
            <hr className="mt-10 border-gray-200"/>

            <div className="flex justify-between font-light mx-20 text-md my-10">
                <Footer1/>
                <Footer2/>
                <Footer3/>
                <Footer4/>
            </div>
        </div>
    )
}