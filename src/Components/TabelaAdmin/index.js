import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';




const TabelaAdmin = ({ cnpj, rows, evento }) => {
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
            {cnpj ? <TableCell align="left" style={{ width: '20%', backgroundColor: '#3D955A', color: 'white', position: 'sticky', top: 0, zIndex: 1 }}>
              Cnpj
            </TableCell> : ''}
            <TableCell align="center" style={{ width: '20%', backgroundColor: '#3D955A', color: 'white', position: 'sticky', top: 0, zIndex: 1 }}>
              Dalas Instaladas
            </TableCell>
            <TableCell align="center" style={{ width: '30%', backgroundColor: '#3D955A', color: 'white', position: 'sticky', top: 0, zIndex: 1 }}>
              Ações
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="left">{row.endereco}</TableCell>
              {cnpj ? <TableCell align="left">{row.cnpj}</TableCell> : ''}
              <TableCell align="center">{row.dalasInstaladas}</TableCell>
              <TableCell align="center">
                <Button onClick={() => evento(index)} sx={{ backgroundColor: `${cnpj ? '#4FC8FB' : '#73EB7B'}`, color: 'black', borderRadius: '50px', marginRight: '15px' }} variant="contained">
                  {cnpj ? "Editar" : "Selecionar"}
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
