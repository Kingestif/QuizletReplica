import { Logo } from "./Logo";
import { NavItem } from "./NavItems";

export function NavBar() {
    return (
        <nav>
            <Logo/>
            <NavItem label="Home"/>
            <NavItem label="About"/>
            <NavItem label="Services"/>
            <NavItem label="Contact"/>
        </nav>
    );
}