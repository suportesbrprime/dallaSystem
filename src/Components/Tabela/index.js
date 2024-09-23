// src/Components/Tabela.js
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import './Table.css';
import { useNavigate } from 'react-router-dom';

const rows = [
    { id: 1, ordem: 'Entrada', execucao: 'dd/mm/aaaa', veiculo: 'ABC1234', itens: 1, detalhes: 'Detalhes da operação 1' },
    { id: 2, ordem: 'Picking', execucao: 'dd/mm/aaaa', veiculo: 'ABC1234', itens: 1, detalhes: 'Detalhes da operação 2' },
    { id: 3, ordem: 'Entrada', execucao: 'dd/mm/aaaa', veiculo: 'ABC1234', itens: 2, detalhes: 'Detalhes da operação 2' },
    { id: 4, ordem: 'Picking', execucao: 'dd/mm/aaaa', veiculo: 'ABC1234', itens: 3, detalhes: 'Detalhes da operação 2' },
    // Adicione mais dados conforme necessário
];

const Tabela = () => {
    const [detalhesVisiveis, setDetalhesVisiveis] = useState(null);
    const navigate = useNavigate();

    const mostrarDetalhes = (id) => {
        setDetalhesVisiveis(detalhesVisiveis === id ? null : id);
    };
    const handleSimular = () => {
        navigate('/simulacao');
    }
    const handleExecutar = () => {
        navigate('/execucao');
    }

    return (
        <TableContainer  component={Paper} sx={{height:'420px'}}>
            <Table sx={{ maxWidth: 1250, marginLeft:'40px'}} aria-label="simple table">
                <TableHead className='cabecalho'>
                    <TableRow >
                        <TableCell  sx={{color: '#ffffff', border:'none'}}>Ordem</TableCell>
                        <TableCell  sx={{color: '#ffffff', border:'none'}}>Execução</TableCell>
                        <TableCell  sx={{color: '#ffffff', border:'none'}}>Veículo</TableCell>
                        <TableCell  sx={{color: '#ffffff', border:'none'}}>Itens</TableCell>
                        <TableCell  sx={{color: '#ffffff', border:'none'}}>Detalhes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <React.Fragment key={row.id}>
                            <TableRow sx={{ backgroundColor: (index % 2 === 0) ? '#ffffff' : '#E6E6E6'}}>
                                <TableCell className="header-cell">{row.ordem}</TableCell>
                                <TableCell className="header-cell">{row.execucao}</TableCell>
                                <TableCell className="header-cell">{row.veiculo}</TableCell>
                                <TableCell>{row.itens}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => mostrarDetalhes(row.id)}>
                                        <ExpandMoreIcon className={`expand-icon ${detalhesVisiveis === row.id ? 'expanded' : ''}`} />
                                    </IconButton>
                                    <Button sx={{ backgroundColor: '#EEA51D', color: 'black', marginLeft: '600px', borderRadius: '50px',marginRight: '15px'}}  variant="contained" onClick={(handleSimular)}>Simular</Button>
                                    <Button sx={{ backgroundColor: '#73EB7B', color: 'black', borderRadius: '50px'}} variant="contained" onClick={(handleExecutar)}>Executar</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                                    <Collapse in={detalhesVisiveis === row.id} timeout="auto" unmountOnExit>
                                    <Table size="small" aria-label="sub table" sx={{borderRadius:'100px', marginBottom: '10px'}}>
                                            <TableHead className="sub-table-header" sx={{ backgroundColor: '#f0f0f0', color: '#fffffff' }}>
                                                <TableRow>
                                                    <TableCell>Cliente</TableCell>
                                                    <TableCell>Produtos</TableCell>
                                                    <TableCell>Quantidade</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell sx={{fontFamily:'inter'}}>{row.cliente} Nome do Cliente 1</TableCell>
                                                    <TableCell sx={{fontFamily:'inter'}}>{row.produtos}<ul className="no-bullets"><li>Produto 1</li></ul></TableCell>
                                                    <TableCell>{row.quantidade} <ul className="no-bullets"><li>50</li></ul></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                        <Table size="small" aria-label="sub table" sx={{backgroundColor:'white'}}>
                                            <TableHead className='sub-table-header'>
                                                <TableRow>
                                                    <TableCell>Cliente</TableCell>
                                                    <TableCell>Produtos</TableCell>
                                                    <TableCell>Quantidade</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell sx={{fontFamily:'inter'}}>{row.cliente} Nome do Cliente 2</TableCell>
                                                    <TableCell sx={{fontFamily:'inter'}}>{row.produtos} <ul className="no-bullets"><li>Produto 1</li><li>Produto 2</li><li>Produto 3</li></ul></TableCell>
                                                    <TableCell>{row.quantidade} <ul className="no-bullets"><li>50</li><li>100</li><li>80</li></ul></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Tabela;