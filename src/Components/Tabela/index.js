// src/Components/Tabela.js
import React, { useContext, useEffect, useState } from 'react';
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
import { ApiContext } from '../../context/ContextApi';

const Tabela = () => {
    const [detalhesVisiveis, setDetalhesVisiveis] = useState(null);
    const navigate = useNavigate();

    const { data, loading, error } = useContext(ApiContext);

    const mostrarDetalhes = (id) => {
        setDetalhesVisiveis(detalhesVisiveis === id ? null : id);
    };
    const handleSimular = () => {
        navigate('/simulacao');
    }
    const handleExecutar = (veiculo) => {
        navigate(`/execucao/${veiculo}`);
    }

    if (loading) return <p>Carregando dados...</p>;
    if (error) return <p>Erro ao carregar dados: {error}</p>;

    return (
        <TableContainer  component={Paper} sx={{height:'420px'}}>
            <Table sx={{ maxWidth: 1250, marginLeft:'40px'}} aria-label="simple table">
                <TableHead className='cabecalho'>
                    <TableRow>
                        <TableCell  sx={{color: '#ffffff', border:'none'}}>Veículo</TableCell>
                        <TableCell  sx={{color: '#ffffff', border:'none'}}>Quantidade De Clientes</TableCell>
                        <TableCell  sx={{color: '#ffffff', border:'none'}}>Execução</TableCell>
                        <TableCell  sx={{color: '#ffffff', border:'none'}}>Detalhes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ width: '100%', maxWidth: 1250, marginLeft:'40px'}}>
                {Object.keys(data).map((veiculo, index) => (
                <React.Fragment key={veiculo}>
                    <TableRow sx={{backgroundColor: (index % 2 === 0) ? '#ffffff' : '#E6E6E6' }}>
                        <TableCell className="header-cell">{veiculo}</TableCell>
                        <TableCell className="header-cell">{data[veiculo].length}</TableCell>
                        <TableCell>22/07/2005</TableCell>
                        <TableCell>
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                                <IconButton onClick={() => mostrarDetalhes(veiculo)}>
                                    <ExpandMoreIcon className={`expand-icon ${detalhesVisiveis === veiculo.id ? 'expanded' : ''}`} />
                                </IconButton>
                                <div style={{display: 'flex', gap: '15px'}}>
                                    <Button sx={{ backgroundColor: '#EEA51D', color: 'black', borderRadius: '50px'}} variant="contained" onClick={handleSimular}>Simular</Button>
                                    <Button sx={{ backgroundColor: '#73EB7B', color: 'black', borderRadius: '50px'}} variant="contained" onClick={() => handleExecutar(veiculo)}>Executar</Button>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                    {detalhesVisiveis === veiculo && (
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                                <Collapse in={detalhesVisiveis === veiculo} timeout="auto" unmountOnExit>
                                    <Table size="small" aria-label="sub table" sx={{ borderRadius: '100px', marginBottom: '15px' }}>
                                        <TableHead className="sub-table-header" sx={{ backgroundColor: '#f0f0f0', color: '#ffffff' }}>
                                            <TableRow>
                                                <TableCell>Cliente</TableCell>
                                                <TableCell>Produtos</TableCell>
                                                <TableCell>Quantidade</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {data[veiculo].map((cliente, index) => (
                                            <TableRow key={index}>
                                                <TableCell sx={{ fontFamily: 'inter' }}>{cliente.client_name}</TableCell>
                                                <TableCell>
                                                    <ul style={{ listStyleType: 'none' }} className="no-bullets">
                                                        {cliente.products.map((produto, indexProduto) => (
                                                            <li key={indexProduto}>{produto.product_name}</li>
                                                        ))}
                                                    </ul>
                                                </TableCell>
                                                <TableCell>
                                                    <ul className="no-bullets">
                                                        {cliente.products.map((produto, indexProduto) => (
                                                            <li key={indexProduto}>{produto.quantity}</li>
                                                        ))}
                                                    </ul>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                </Collapse>
                            </TableCell>
                        </TableRow>
                    )}

                </React.Fragment>
                ))}

                
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Tabela;