import './OpcMenu.css'
import { Link } from "react-router-dom";

const OpcMenu = ({ campo, to, icone, evento }) => {
    return (
        <li className="itemMenu">
            {icone} <Link to={to} onClick={() => evento}>{campo}</Link>
        </li>
    );
};

export default OpcMenu;
