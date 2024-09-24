import { Link, useNavigate } from 'react-router-dom'
import { MdAddLocationAlt } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import './DropDown.css'

const DropDown = ({ trueOrFalse }) => {

    const navigate = useNavigate();

    return (
        <div className='boxDrop'>
            <button onClick={() => navigate('/cadastroDeUnidade')}><MdAddLocationAlt /><Link>Cadastro de unidade</Link></button>
            <button onClick={() => navigate('/cadastroDeOperador')}><FaUserPlus /><Link>Cadastro de operador</Link></button>
        </div>
    )

}

export default DropDown