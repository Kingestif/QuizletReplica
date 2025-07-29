import { Search } from "lucide-react";
type ButtonType = {
    label: string;
    bgcolor: string;
    textcolor: string
}

type NavItemProps = {
    label: string;
};

type SearchType = {
    label: string
}

export function Logo() {
    return (
        <h1 className="font-bold text-2xl text-violet-600">Quizlet</h1>
    );
}

export function Button(props: ButtonType){
    return(
        <div className={`${props.bgcolor} ${props.textcolor} px-4 py-2 rounded-full font-bold`}><button>{props.label}</button></div>
    );
}


export function NavItem(props: NavItemProps) {
    return (
        <div className="font-medium">{props.label}</div>
    );
}

export function SearchIcon(){
    return (
        <div></div>
    );
}

export function SearchBar(props: SearchType){
    return (
        <div className="flex bg-black/5 gap-10 p-3 rounded-2xl w-2xl"> 
            <Search className="w-5 h-5 text-gray-600"/>
            <h3 className="text-gray-400 font-bold">{props.label}</h3>
        </div>
    );
}

export function NavBar() {
    return (
        <nav className="flex justify-between  items-center mx-20 my-5">
            <div className="left-navbar flex gap-15 items-center">
                <Logo/>
                <NavItem label="Study tools"/>
                <NavItem label="Subject"/>
            </div>
            <SearchBar label="Find it faster with a search"/>
            <div className="right-navbar flex gap-15 items-center">
                <NavItem label="Create"/>
                <Button label="login" bgcolor="bg-violet-500" textcolor="text-white"/>
            </div>
        </nav>
    );
}