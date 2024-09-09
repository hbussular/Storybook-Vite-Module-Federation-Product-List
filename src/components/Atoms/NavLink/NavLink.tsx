import { Link } from "react-router-dom";
import { NavLinkProps } from "../../../interfaces/global";

const NavLink: React.FC<NavLinkProps> = ({ linkPath, children }) => {
    return (
        <Link to={linkPath}>{children}</Link>
    )
}

export default NavLink