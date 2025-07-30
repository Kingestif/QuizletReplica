import { BigCard, BigCardDetails, BodyTop } from "./BodyTop";
import { MiniNav } from "./MinINav";
import { Profile } from "./Profile";
import { FlashCards } from "./Studied";

export function Body(){
    return(
        <div className="mx-100">
            <MiniNav/>
            <BodyTop/>
            <BigCard label="Alcohol"/>
            <BigCardDetails/>
            <Profile label="Temira"/>
            <hr className="mt-10 border-gray-300"/>
            <FlashCards/>
        </div>
    )
}