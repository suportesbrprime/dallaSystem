import { Link } from 'react-router-dom'
import { MdAddLocationAlt } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import './DropDown.css'

const DropDown = ({ trueOrFalse }) => {

    return (
        <div className='boxDrop'>
            <button><MdAddLocationAlt /><Link>Cadastro de unidade</Link></button>
            <button><FaUserPlus /><Link>Cadastro de operador</Link></button>
        </div>
    )

}

export default DropDown