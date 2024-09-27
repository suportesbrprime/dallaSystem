import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, MenuItem, Select } from '@mui/material';
import { Switch } from '@mui/material';
import './PaginaDala.css';
import BarChart from '../GraficoDeBarras';
import WrongCharts from '../GraficoDeErros';

const PaginaDala = () => {

    const [valueRows, setValueRows] = useState([
        { nome: 'Operador 1', dala: "Dala 1", isEditing: false },
        { nome: 'Operador 2', dala: "Dala 2", isEditing: false },
        { nome: 'Operador 3', dala: "Dala 3", isEditing: false },
        { nome: 'Operador 4', dala: "Dala 4", isEditing: false },
        { nome: 'Operador 5', dala: "Dala 5", isEditing: false },
    ]);

    const [rows] = useState([
        { nome: 'Operador 1', dala: "Dala 1" },
        { nome: 'Operador 2', dala: "Dala 2" },
        { nome: 'Operador 3', dala: "Dala 3" },
        { nome: 'Operador 4', dala: "Dala 4" },
        { nome: 'Operador 5', dala: "Dala 5" },
    ]);

    const [dalaAtiva, setDalaAtiva] = useState(false);

    const ativaDala = () => {
        setDalaAtiva(!dalaAtiva);
    };

    const handleEditToggle = (index) => {
        const updatedRows = [...valueRows];
        updatedRows[index].isEditing = !updatedRows[index].isEditing;
        setValueRows(updatedRows);
    };

    const handleChange = (index, field, value) => {
        const updatedRows = [...valueRows];
        updatedRows[index][field] = value;
        setValueRows(updatedRows);
    };

    function excluiOperador(index){
        const deletaLinha = valueRows.filter((_, i) => i !== index);
        setValueRows(deletaLinha);
    }

    function adicionaOperador(){
        const newOperator = { nome: '', dala: '', isEditing: true };  
        setValueRows([...valueRows, newOperator]);
    }

    return (
        <div className='containerDala'>
            <div className='banner'>
                <div className='infoDalas'>
                    <h2>Unidade 1</h2>
                    <p>Rua brasilândia, 1028, tiradentes - Campo Grande, MS </p>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '18px' }}>
                        <Button onClick={ativaDala} sx={{ color: `${dalaAtiva ? 'white' : 'black'}` , backgroundColor: `${dalaAtiva ? '#6e6e6e' : '#ffffff'}`, fontWeight: 'bold' }} variant="contained">{dalaAtiva ? 'Dala Desativada' : 'Dala Ativada'}</Button>
                    </div>
                </div>

                <div className='imgDala'>
                    <img src='/assets/images/backgroundDala.png' alt='dala' />
                </div>
            </div>

            <div className='infoGerais'>
                <div className='boxInfoGeral'>
                    <span>Operadores Cadastrados: 4</span>
                </div>

                <div className='boxInfoGeral'>
                    <span>Total Dalas: 4</span>
                </div>

                <div className='boxInfoGeral'>
                    <span>Total Erros de leitura: 4</span>
                </div>
            </div>

            <div className='divTabelaDala'>
                <div className='tabelaDala'>
                    <TableContainer component={Paper} sx={{ maxHeight: 440, marginTop: 5 }}>
                        <Table sx={{ maxWidth: 1250 }} stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: '25%', backgroundColor: '#3D955A', color: 'white', position: 'sticky', top: 0, zIndex: 1 }}>
                                        Nome
                                    </TableCell>
                                    <TableCell align="left" style={{ width: '20%', backgroundColor: '#3D955A', color: 'white', position: 'sticky', top: 0, zIndex: 1 }}>
                                        Dalas Instaladas
                                    </TableCell>
                                    <TableCell align="right" style={{ width: '30%', backgroundColor: '#3D955A', color: 'white', position: 'sticky', top: 0, zIndex: 1 }}>
                                        <Button onClick={adicionaOperador} sx={{ backgroundColor: '#FFFFFF', color: 'black', borderRadius: '50px', marginRight: '15px' }} variant="contained">
                                             + Adicionar Operador
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {valueRows.map((row, index) => (
                                    <TableRow key={row.nome} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {row.isEditing ? (
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={row.nome}
                                                    onChange={(e) => handleChange(index, 'nome', e.target.value)}
                                                >
                                                    {rows.map((option, idx) => (
                                                        <MenuItem key={idx} value={option.nome}>
                                                            {option.nome}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            ) : (
                                                `${row.nome}`
                                            )}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.isEditing ? (
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={row.dala}
                                                    onChange={(e) => handleChange(index, 'dala', e.target.value)}
                                                >
                                                    {rows.map((option, idx) => (
                                                        <MenuItem key={idx} value={option.dala}>
                                                            {option.dala}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            ) : (
                                                `${row.dala}`
                                            )}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.isEditing ? (
                                                <Button
                                                    sx={{ backgroundColor: '#4FC8FB', color: 'black', borderRadius: '50px', marginRight: '15px' }}
                                                    variant="contained"
                                                    onClick={() => handleEditToggle(index)}
                                                >
                                                    Salvar
                                                </Button>
                                            ) : (
                                                <>
                                                    <Button onClick={() => excluiOperador(index)} sx={{ backgroundColor: '#FFBBBB', color: 'black', borderRadius: '50px', marginRight: '15px' }} variant="contained">
                                                        Excluir
                                                    </Button>
                                                    <Button onClick={() => handleEditToggle(index)} sx={{ backgroundColor: '#4FC8FB', color: 'black', borderRadius: '50px', marginRight: '15px' }} variant="contained">
                                                        Editar
                                                    </Button>
                                                </>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div className="containerGraficos">
                    <div className="boxGraficos">
                        <BarChart title="Quantidade de processos realizados" label="Processo Realizados" corBarra="#73EB7B" />
                    </div>
                    <div className="boxGraficos">
                        <BarChart title="Troca de lote" label="Trocas" corBarra="#FF7B7B" />
                    </div>

                    <div className="boxGraficos">
                        <WrongCharts title="Total de Erros Dala Picking"/>
                    </div>

                    <div className="boxGraficos">
                        <WrongCharts title="Total de Erros Dala Reversa"/>
                    </div>

            </div>

            </div>
        </div>
    );
};

export default PaginaDala;
