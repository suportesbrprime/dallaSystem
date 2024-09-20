const net = require('net');

let client;

function createClient() {
    // Cria e conecta o cliente TCP
    client = new net.Socket();

    // Conecta ao dispositivo na porta 9004 no IP especificado
    client.connect(9004, '192.168.1.174', () => {
        console.log('Conectado ao dispositivo');
    });

    // Manipula os dados recebidos
    client.on('data', (data) => {
        console.log('Dados recebidos: ' + data.toString());
    });

    // Lida com o fechamento da conexão
    client.on('close', () => {
        console.log('Conexão fechada');
    });

    // Lida com erros
    client.on('error', (err) => {
        console.error('Erro: ' + err.message);
    });
}

// Envia o comando LON
function sendLON() {
    if (client) {
        client.write('LON\r');
        console.log('Comando "LON[CR]" enviado');
    } else {
        console.log('Cliente TCP não está conectado');
    }
}

// Envia o comando LOFF
function sendLOFF() {
    if (client) {
        client.write('LOFF\r');
        console.log('Comando "LOFF[CR]" enviado');
    } else {
        console.log('Cliente TCP não está conectado');
    }
}
