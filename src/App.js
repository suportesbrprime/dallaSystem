import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import PainelGeral from './Pages/PainelGeral';
import Testes from './Pages/Testes';
import Execucao from './Pages/Execucao';
import Simulacao from './Pages/Simulacao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/painelGeral" element={<PainelGeral />}/>
        <Route path="/testes" element={<Testes />}/>
        <Route path="/execucao" element={<Execucao />}/>
        <Route path="/simulacao" element={<Simulacao />}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
   </BrowserRouter>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

export default App;