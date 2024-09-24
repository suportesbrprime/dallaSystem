import { FaHouse } from "react-icons/fa6";
import { TextField } from "@mui/material"
import Menu from "../../../Components/Menu"
import { MdAccountCircle } from "react-icons/md";
import { LuFileEdit } from "react-icons/lu";
import { useState } from "react";
import InputTextoAdmin from "../../../Components/InputTextoAdmin";
import InputNumber from "../../../Components/InputNumber";
import { Button } from "@mui/material";
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import TabelaOperador from "../../../Components/TabelaOperador";

const CadastroDeOperador = () => {

    const [subMenu, setSubMenu] = useState(false);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dala, setDala] = useState('');
    const [unidade, setUnidade] = useState('');

    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '/painelGeralAdmin', campo: 'Painel Geral'},
        { icone: <MdAccountCircle size={20} color="white" />, to: '/perfil', campo: 'Perfil'},
    ]
    const botoes = [
        {evento:abreSubMenu, icone: <LuFileEdit  size={20}/>, textoBtn:"Cadastro"}
    ]

    function abreSubMenu(){
        setSubMenu(!subMenu);
    }

    const [rows, setRows] = useState([
        {nome: 'Maicon', email: 'maicon@gmail.com', dala: 1, unidade: 'Unidade 1'},
    ]);
    const handleChange = (event) => {
        setUnidade(event.target.value);
    };
    const [editIndex, setEditIndex] = useState(null);

    function editaUnidade(index) {
        if (index >= 0 && index < rows.length) {
            const operador = rows[index];
            setNome(operador.nome);
            setEmail(operador.email);
            setDala(operador.dala);
            setUnidade(operador.unidade);
            setEditIndex(index);
        } else {
            console.warn('Índice inválido:', index);
        }
    }
    
    function abreSubMenu(){
        setSubMenu(!subMenu);
    }

    function adicionaOperador(){
        const novoOperador = {
            nome: nome,
            email: email,
            dala: dala,
            unidade: unidade
        };

        if (editIndex !== null) {
            const updatedRows = [...rows];
            updatedRows[editIndex] = novoOperador;
            setRows(updatedRows);
            setEditIndex(null);
        } else {
            setRows([...rows, novoOperador]);
        }
        setNome('');
        setEmail('');
        setDala('');
        setUnidade('');
    }

    return (

        <div>
            <Menu itens={itensMenu} botoes={botoes} />
            <form className="formCadastro">
                <InputTextoAdmin label='nome' value={nome} evento={(e) => setNome(e.target.value)}/>
                <InputTextoAdmin label='email' value={email} evento={(e) => setEmail(e.target.value)}/>
                <div style={{display:'flex', alignItems:'center', marginTop:'-50px'}}>
                    <InputNumber label='dala' value={dala} evento={(e) => setDala(e.target.value)}/>
                    <FormControl fullWidth>
                        <InputLabel id="seletor-cidade-label">Unidade</InputLabel>
                        <Select
                            labelId="seletor-unnidade-label"
                            id="seletor-unidade"
                            value={unidade}
                            label="Escolha uma cidade"
                            onChange={handleChange}
                            sx={{
                                backgroundColor: '#EFEFEF',
                                boxShadow: '0px 4px 4px 0px #00000040',
                                color: 'black',
                                width: '100%',
                            }}
                        >
                            <MenuItem value="Unidade 1">Unidade 1</MenuItem>
                            <MenuItem value="Unidade 2">Unidade 2</MenuItem>
                            <MenuItem value="Unidade 3">Unidade 3</MenuItem>
                            <MenuItem value="Unidade 4">Unidade 4</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField sx={{width:'25%', marginTop: '15%', margin:'5%', backgroundColor:'#EFEFEF',boxShadow: '0px 4px 4px 0px #00000040', color:'black'}} label='Senha'/>
                    <TextField sx={{width:'25%', marginTop: '15%', margin:'5%', marginLeft:'5px', backgroundColor:'#EFEFEF',boxShadow: '0px 4px 4px 0px #00000040', color:'black'}} label='Confirme a senha'/>
                </div>
                <div style={{ margin: '5px', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={adicionaOperador} sx={{ backgroundColor: '#00B15C', color: 'white', borderRadius: '50px', marginRight: '15px' }} variant="contained">
                        {editIndex !== null ? "Atualizar" : "Salvar"}
                    </Button>
                </div>
                <TabelaOperador rows={rows} evento={(index) => editaUnidade(index)}/>
            </form>
        </div>

    )

}


export default CadastroDeOperador