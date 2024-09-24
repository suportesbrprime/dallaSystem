import { FaHouse } from "react-icons/fa6";
import DropDown from "../../../Components/DropDown";
import Menu from "../../../Components/Menu"
import { MdAccountCircle } from "react-icons/md";
import { LuFileEdit } from "react-icons/lu";
import { useState } from "react";
import Titulo from "../../../Components/Titulo";
import InputTextoAdmin from "../../../Components/InputTextoAdmin";
import InputNumber from "../../../Components/InputNumber";
import { Button } from "@mui/material";
import TabelaAdmin from "../../../Components/TabelaAdmin";

const CadastroDeUnidade = () => {

    const [subMenu, setSubMenu] = useState(false);

    const [editando, setEditando] = useState(false);
    const [indexEditando, setIndexEditando] = useState(null);

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [dalas, setDalas] = useState('');

    const itensMenu = [
        { icone: <FaHouse size={19} color="white" />, to: '/painelGeralAdmin', campo: 'Painel Geral'},
        { icone: <MdAccountCircle size={20} color="white" />, to: '/perfil', campo: 'Perfil'},
    ]

    const botoes = [
        {evento:abreSubMenu, icone: <LuFileEdit size={20}/>, textoBtn:"Cadastro"}
    ]

    const [rows, setRows] = useState([
        {nome: 'Unidade 1', endereco: "Ribeirão Preto", cnpj: 182739812, dalasInstaladas: 6},
        {nome: 'Unidade 2', endereco: "Presidente Prudente", cnpj: 182739812, dalasInstaladas: 9},
        {nome: 'Unidade 3', endereco: "Ribeirão Preto", cnpj: 182739812, dalasInstaladas: 16},
        {nome: 'Unidade 4', endereco: "Ribeirão Preto", cnpj: 182739812, dalasInstaladas: 3},
        {nome: 'Unidade 5', endereco: "Ribeirão Preto", cnpj: 182739812, dalasInstaladas: 16},
    ]);

    function abreSubMenu(){
        setSubMenu(!subMenu);
    }

    function adicionaUnidade(){
        const novaUnidade = {
            nome: nome,
            endereco: endereco,
            cnpj: cnpj,
            dalasInstaladas: dalas
        }

        if (editando) {
            // Atualiza a unidade
            const novasUnidades = [...rows];
            novasUnidades[indexEditando] = novaUnidade; // Atualiza a unidade no índice correto
            setRows(novasUnidades);
            setEditando(false); // Sai do modo de edição
        } else {
            // Adiciona uma nova unidade
            setRows([...rows, novaUnidade]);
        }

        setNome('');
        setEndereco('');
        setCnpj('');
        setDalas('');
    }

    function editaUnidade (index){
        const unidade = rows[index];
        setNome(unidade.nome);
        setEndereco(unidade.endereco);
        setCnpj(unidade.cnpj);
        setDalas(unidade.dalasInstaladas);
        setEditando(true);
        setIndexEditando(index);
    }

    return (
        <div>
            <Menu itens={itensMenu} botoes={botoes}/>

            <div className={subMenu ? "block" : "none"}>
                <DropDown />  
            </div> 

            <Titulo titulo="Cadastro De Unidade" subtitulo=""/>

            <form className="formCadastro">
                <InputTextoAdmin value={nome} label="Nome" evento={(e) => setNome(e.target.value)}/>
                <InputTextoAdmin value={endereco} label="Endereço" evento={(e) => setEndereco(e.target.value)}/>
                <InputTextoAdmin value={cnpj} label="CNPJ" evento={(e) => setCnpj(e.target.value)}/>
                <InputNumber value={dalas} evento={(e) => setDalas(e.target.value)} />
                <div style={{ margin: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={adicionaUnidade} sx={{ backgroundColor: '#00B15C', color: 'white', borderRadius: '50px', marginRight: '15px' }} variant="contained">Salvar</Button>
                </div>
            </form>

            <TabelaAdmin cnpj={true} rows={rows} evento={editaUnidade}/>
        </div> 
    )

}

export default CadastroDeUnidade