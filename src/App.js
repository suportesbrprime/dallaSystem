import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import PainelGeral from './Pages/Operador/PainelGeral';
import Testes from './Pages/Operador/Testes';
import Execucao from './Pages/Operador/Execucao';
import Simulacao from './Pages/Operador/Simulacao';
import PainelGeralAdmin from './Pages/Admin/PainelGeralAdmin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/painelGeral" element={<PainelGeral />}/>
        <Route path="/testes" element={<Testes />}/>
        <Route path="/execucao" element={<Execucao />}/>
        <Route path="/simulacao" element={<Simulacao />}/>
        <Route path="/painelGeralAdmin" element={<PainelGeralAdmin />}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
   </BrowserRouter>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

export default App;