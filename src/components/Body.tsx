import { BigCard, BigCardDetails, BodyTop } from "./BodyTop";
import { MiniNav } from "./MinINav";

export function Body(){
    return(
        <div className="mx-100">
            <MiniNav/>
            <BodyTop/>
            <BigCard label="Alcohol"/>
            <BigCardDetails/>
        </div>
    )
}