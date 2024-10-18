const express = require('express');
const fs = require('fs');
const net = require('net');

const app = express();
const port = 9005;
const tcpPort = 9004;
const filePath = 'qrcode_datav2.txt'; // Arquivo que será limpo

// Middleware para configurar CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Rota para obter os QR codes do arquivo
app.get('/qrcodes', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao ler o arquivo' });
        }
        
        // Processa os dados, removendo caracteres '\r' e dividindo por linha
        const qrCodes = Array.from(new Set(
            data
                .replace(/\r/g, '')        // Remove todos os '\r'
                .split('\n')               // Divide os dados por '\n'
                .map(line => line.trim())  // Remove espaços em branco
                .filter(line => line)      // Remove linhas vazias
        ));
        res.json({ qrCodes });
    });
});

// Rota para limpar o arquivo
app.get('/limpar-qrcodes', (req, res) => {
    fs.writeFile(filePath, '', (err) => {
        if (err) {
            console.error('Erro ao limpar o arquivo:', err);
            return res.status(500).json({ message: 'Erro ao limpar o arquivo' });
        } else {
            console.log('Arquivo limpo com sucesso!');
            res.json({ message: 'Arquivo limpo com sucesso!' });
        }
    });
});

// Iniciar o servidor HTTP
app.listen(port, () => {
    console.log(`Servidor HTTP escutando na porta ${port}`);
});

// Servidor TCP para receber dados da câmera
const server = net.createServer((socket) => {
    console.log('Nova conexão recebida da câmera...');

    // Lê os dados enviados pela câmera
    socket.on('data', (data) => {
        console.log('Dados recebidos: ', data.toString());

        // Armazena os dados recebidos em um arquivo
        fs.appendFileSync(filePath, data + '\n'); // Adiciona uma nova linha ao final de cada QR code

        // Envia uma resposta para a câmera
        socket.write('Dados recebidos com sucesso\n');
    });

    // Fecha a conexão
    socket.on('end', () => {
        console.log('Conexão com a câmera encerrada');
    });
});

// O servidor TCP escuta na porta 9004
server.listen(tcpPort, '0.0.0.0', () => {
    console.log(`Servidor TCP escutando na porta ${tcpPort}`);
});
