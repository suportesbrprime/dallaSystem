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
        <TableContainer  component={Paper}>
            <Table sx={{ maxWidth: 1250, marginLeft:'40px' }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell sx={{color: '#ffffff', border:'none'}}>Ordem</TableCell>
                        <TableCell sx={{color: '#ffffff', border:'none'}}>Execução</TableCell>
                        <TableCell sx={{color: '#ffffff', border:'none'}}>Veículo</TableCell>
                        <TableCell sx={{color: '#ffffff', border:'none'}}>Itens</TableCell>
                        <TableCell sx={{color: '#ffffff', border:'none'}}>Detalhes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <React.Fragment key={row.id}>
                            <TableRow sx={{ backgroundColor: (index % 2 === 0) ? '#ffffff' : '#f9f9f9' }}>
                                <TableCell className="header-cell">{row.ordem}</TableCell>
                                <TableCell className="header-cell">{row.execucao}</TableCell>
                                <TableCell className="header-cell">{row.veiculo}</TableCell>
                                <TableCell >{row.itens}</TableCell>
                                <TableCell className='ancoras'>
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
                                        <div>
                                            {row.detalhes}
                                        </div>
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