const ModbusTCP = require('modbus-tcp');

function createClient() {
    // Cria e conecta o cliente TCP
    const options = {
        host: '192.168.1.174',  // Substitua pelo IP do seu CLP
        port: 502               // Porta padrão do Modbus-TCP
    };

    client = new ModbusTCP.Client();

    // Conecta ao dispositivo na porta no IP especificado
    client.connect(options.port, options.host, () => {
        let coilState;
        console.log('Conectado ao CLP via Modbus-TCP');       
    });

    return client;
}

function readCoil(client, address) {
    const num = 1;  // Número de endereços que serão lidos a partir do address
    client.readCoils(address, num, (err, response) => {
        if (err) {
            console.error('Erro ao ler Coils:', err);
        } else {
            console.log('Coils lidos:', response);
        }
    });
}

function writeCoil(client, coilState, address) {
    client.writeSingleCoil(address, coilState, (err, response) => {
        if (err) {
            console.error('Erro ao escrever no Coil:', err);
        } else {
            console.log('Coil escrito com sucesso:', response);
        }
    });
}

// Como usar
let client = createClient()

// Lida com o fechamento da conexão
client.on('close', () => {
    console.log('Conexão fechada');
});

// Lida com erros
client.on('error', (err) => {
    console.error('Erro: ' + err.message);
});

// Leitura de um registrador
let data_read;
let read_address;

read_address = 0;

data_read = readCoil(client, read_address);

// Escrita em registrador
let data_write;
let write_address;

data_write = 1;
write_address = 0;

writeCoil(client, data_write, write_address)
