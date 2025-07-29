type NavItemProps = {
    label: string;
};

export function NavItem(props: NavItemProps) {
    return (
        <div>{props.label}</div>
    );
}