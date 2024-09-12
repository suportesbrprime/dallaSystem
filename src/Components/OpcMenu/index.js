import './OpcMenu.css'
import { Link } from "react-router-dom";

const OpcMenu = ({ campo, to, icone }) => {
    return (
        <li className="itemMenu">
            {icone} <Link to={to}>{campo}</Link>
        </li>
    );
};

export default OpcMenu;
