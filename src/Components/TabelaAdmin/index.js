import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(nome, local, dalasInstaladas) {
  return { nome, local, dalasInstaladas };
}

const rows = [
  createData('Unidade 1', "Ribeirão Preto", 6),
  createData('Unidade 2', "Presidente Prudente", 9),
  createData('Unidade 3', "Ribeirão Preto", 16),
  createData('Unidade 4', "Ribeirão Preto", 3),
  createData('Unidade 5', "Ribeirão Preto", 16),
];

const TabelaAdmin = ({ cnpj }) => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440, marginTop: 5}}>
      <Table sx={{ maxWidth: 1250, marginLeft:'40px'}} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '25%', backgroundColor: '#3D955A', color: 'white', position: 'sticky', top: 0, zIndex: 1 }}>
              Nome
            </TableCell>
            <TableCell align="left" style={{ width: '25%', backgroundColor: '#3D955A', color: 'white', position: 'sticky', top: 0, zIndex: 1 }}>
              Endereço
            </TableCell>
            <TableCell align="center" style={{ width: '20%', backgroundColor: '#3D955A', color: 'white', position: 'sticky', top: 0, zIndex: 1 }}>
              {cnpj ? "CNPJ" : "Dalas Instaladas" }
            </TableCell>
            <TableCell align="center" style={{ width: '30%', backgroundColor: '#3D955A', color: 'white', position: 'sticky', top: 0, zIndex: 1 }}>
              Ações
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="left">{row.local}</TableCell>
              <TableCell align="center">{row.dalasInstaladas}</TableCell>
              <TableCell align="center">
                <Button sx={{ backgroundColor: '#73EB7B', color: 'black', borderRadius: '50px', marginRight: '15px' }} variant="contained">
                  Selecionar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabelaAdmin;
