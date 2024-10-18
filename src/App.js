import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PainelGeral from './Pages/Operador/PainelGeral';
import Testes from './Pages/Operador/Testes';
import Execucao from './Pages/Operador/Execucao';
import Simulacao from './Pages/Operador/Simulacao';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PainelGeral />}/>
          <Route path="/testes" element={<Testes />}/>
          <Route path="/execucao/:id/*" element={<Execucao />}/>
          <Route path="/simulacao" element={<Simulacao />}/>
          <Route path="*" element={<div>Página não encontrada</div>}/>
        </Routes>
   </BrowserRouter>
  );
}


export default App;