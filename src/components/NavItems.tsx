type NavItemProps = {
    label: string;
};

export function NavItem(props: NavItemProps) {
    return (
        <div className="text-blue-500">{props.label}</div>
    );
}