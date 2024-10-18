import { useContext, useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import './CardsDados.css'
import { ApiContext } from '../../context/ContextApi';

const CardsDados = ({ titulo, dados }) => {

    const [selectedClientIndex, setSelectedClientIndex] = useState();
    const [qrCodes, setQrCodes] = useState([]); 
    const [qrCodesValidados, setQrCodesValidados] = useState([]);

    const { data, loading, error } = useContext(ApiContext);

    var qualquer = false;

    const fetchQRCodes = async () => {
        try {
            const response = await fetch('http://localhost:9005/qrcodes');
            if (!response.ok) {
                throw new Error('Erro ao buscar os QR Codes');
            }
            const data = await response.json();
            console.log(data);
            setQrCodes(data.qrCodes);  // Atualiza o estado com os QR Codes
        } catch (error) {
            console.error('Erro:', error);
            alert('Falha ao buscar os QR Codes.');
        }
    }

    const validandoQrCodes = (index) => {
        if(selectedClientIndex === index){ //pegao cliente selecionado
            const produtos = data[dados][selectedClientIndex].products; // anda no json ate o array dr produtos 

            const qrCodesProdutos = produtos.flatMap(produto =>  // achata o array produtos e faz o map dele
                produto.picking_products.flatMap(picking =>  //achata o array picking_products e faz o map deçe
                    picking.storaged_products.map(storage => storage.internal_code) //achata e faz o map e retorna o internalcode / qr code do saco 
                )
            );

            const qrCodesExistentes = qrCodesProdutos.filter((qrCode) => {
                return qrCodes.includes(qrCode); // verifica se os qr codes do arquivo txt bate com os do picking up
            })

            const qrCodesErrados = qrCodes.filter((qrCode) => {
                return !qrCodesProdutos.includes(qrCode);
            })

            if(qrCodesExistentes.length === qrCodes.length){
                console.log("Certos", qrCodesExistentes);
                qualquer = true;
            }
            else
            {
                console.log("Qr codes errados:", qrCodesErrados);
                qualquer = false;
            }

            QrCodesFormatoJson(qrCodesExistentes);

            // setQrCodesValidados(qrCodesJson); //atribui valor ao vetor dos qrCodesValidados
        }
    }

    const QrCodesFormatoJson = (qrCodes) => {
        const products = [];
    
        // Para cada qrCode, encontramos o produto correspondente e seu peso
        qrCodes.forEach(qrCode => {
            let weight = null;
    
            // Loop sobre os produtos para encontrar o peso correspondente ao QR code
            data[dados][selectedClientIndex].products.forEach(produto => {
                produto.picking_products.forEach(picking => {
                    picking.storaged_products.forEach(storage => {
                        if (storage.internal_code === qrCode) {
                            weight = storage.weight; // Pega o peso do produto
                        }
                    });
                });
            });
    
            if (weight !== null) { // Apenas adicionar se encontramos o peso
                const storageProducts = {
                    "internal_code": `${qrCode}`,
                    "weight": weight,  // Agora o peso é o correto do produto
                    "status": "STORAGED"
                };
                products.push(storageProducts);
            } else {
                console.error(`Peso não encontrado para o QR Code: ${qrCode}`);
            }
        });
    
        setQrCodesValidados(products);
    }
    
    

    const enviarDados = async (dadosJson) => {
        console.log("Executando função enviar dados")
        const id = dadosJson.id;  // Extrai o id diretamente do objeto dados
        const url = `https://hml.pickingup.com.br/backend/api/autonomous-treadmill/${id}`;
    
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTExMDNkMS1lYTEwLTQ2NDktODA5ZC05MGQ3NmY1Y2YzYzciLCJqdGkiOiI0ODdmMDNiZjMwY2ZjNTY1OTcwZjNlM2NhZWMzZGNkYWFkZmNmNzBlNzgyZTBmODBkMzhhZDhhMmRjYjQyZTg3NDkxOTI4ZjU0Y2NmZTRlMCIsImlhdCI6MTcyNzk4MzE5Mi45ODQzNTQsIm5iZiI6MTcyNzk4MzE5Mi45ODQzNjIsImV4cCI6MTcyOTI3OTE5Mi45NjYyMDEsInN1YiI6IjRkZjY2MzliLWUwNTctNGE0YS1iY2Y2LWM5ZjZhNTJhOTUwMCIsInNjb3BlcyI6WyJhbGxvd2VkLXBpY2tpbmd1cC1ob20iLCJhbGxvd2VkLXBpY2tpbmd1cC1zdGFnZSIsImFsbG93ZWQtcGlja2luZ3VwLXByb2QiXX0.QVe2954URPIHEaxHC9Dmgsuwd95wm8rDEA2rfmN-CWkHCE71KPJaGRYUtxvwmKM_NbuHMChpzPL8jRUIKBQB3J83qx0fThQbQLDpoPMlH1dxNgRr2arwSKQma5vun3v7D9Ev4d9qiJnGRjW8ik_iOvYp9py-hLocZso0YeIpWUJjzEdHxMQE1EN18mZmjC2L4W2eQBi1FB5iJLfRmtNBJUJij7M6kgbMkCfFrnY326sm0jav-nwNbCodPdRVjxgbEIvuz8sZw-tjBTRgr6scY9BnloETMuzyKCfe3m9D5kcXHvsOOyoDq3j8GXD-o88KajyfZjUbvM-VSVsGADE7FrB8ugz-D8Wq666q3jBKLtgxYDOeov73WEgAADqrPGrpkBe7soVRzd0EHRn_1AB1IqXMjn0BNC3mac_zCusOCwLEpQHl63jnrrigkIwlQD4-uoLrIAD7MqvCKe8oBrWMgpR_-l5_8ASJv69zYCnz4my7_w601raLy62tvf27rG-Tg4lXO8YPIL74Q6CcYiK6HPZefpJws2SBuoPwqGl_oaEZIuhKqZOdIYpCyR6yldho3YDheeB9cv4YCQMJZQ1bGYaomBmKf_m1b5O7MsIz35cA_Vh3qxNtMGi6xBpivfL9UUL1q08lSw6XnUSdW-6yWtOFWJExoYqTtvJg6j_Nm6o'
        };
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(dadosJson)  // Converte o objeto dados para JSON
            });

            console.log("response", response);
    
            console.log("dados envio", dadosJson);  // Exibe dados de envio
    
            if (!response.ok) {
                throw new Error(`Erro: ${response.status}`);
            }
    
            const data = await response.json();
            console.log("resposta requisição", data);  // Exibe a resposta da requisição
        } catch (error) {
            console.error('Falha ao enviar os dados:', error);
        }
    };

    const modificarJson = (dadosJson) => {
        console.log("Executando função Modificar Json");
        // Garante que o status no nível principal seja "FINISHED"
        dadosJson.status = "FINISHED";
    
        // Percorre todos os produtos e ajusta pick_quantity para número e o status do produto
        dadosJson.products.forEach(product => {
            product.picking_products.forEach(picking => {
                // Converte pick_quantity para número (caso esteja como string)
                picking.pick_quantity = Number(picking.pick_quantity);
    
                // // Garante que o status dentro de picking_products seja "FINISHED"
                // picking.storaged_products.forEach(storagedProduct => {
                //     storagedProduct.status = "FINISHED";
                // });
            });
        });
    
        return dadosJson;
    };

    let dadosJson ={
        "id": "985b04d1-8d49-49a0-9980-624d162af555",
        "internal_code": "29121563352791",
        "client_order": "84245165925",
        "client_name": "JHENNYFER",
        "vehicle": "KIS0752",
        "status": "COMPLETED",
        "products": [
            {
                "product_code": "C3002174",
                "product_name": "CAMPO 30",
                "quantity": 2,
                "weight": 5,
                "picking_products": [
                    {
                    "virtual_storage_id": "03827266-c1f1-4e72-b6d6-b0e5d6d8cfcf",
                    "autonomous_order_id": "1ad39a0d-eff4-44db-b8e7-a499f0e2596b",
                    "pick_quantity": "2.000",
                    "storaged_products": [
                        {
                            "internal_code": "1535005387401002#00798",
                            "weight": 30.266,
                            "status": "STORAGED"
                        },
                        {
                            "internal_code": "1535005387401002#00621",
                            "weight": 30.216,
                            "status": "STORAGED"
                        }
                    ]
                }
            ]
        }
    ]
};
    
    function envia(){
        validandoQrCodes(selectedClientIndex)
        if(qualquer){
            dadosJson = modificarJson(dadosJson);
            enviarDados(dadosJson);
            console.log("Enviado")
        }
        else
        {
            console.log("Erro na validação dos Qr Codes")
        }
    }

    useEffect(() => {
        console.log(qrCodesValidados); 
        console.log("dados",dadosJson);
    },[qrCodesValidados])

    useEffect(() => {
        fetchQRCodes();
    }, []);

    const handleCheckboxChange = (index) => {
        if (selectedClientIndex === index) {
          setSelectedClientIndex(null);
        } else {
          setSelectedClientIndex(index); 
        }
        console.log(selectedClientIndex);
      };

    if (loading) return <p>Carregando dados...</p>;
    if (error) return <p>Erro ao carregar dados: {error}</p>;
    

    return (
        <div className='container'>
            <div className='boxCard'>
                <div className='titleCard'>
                    {titulo}
                </div>

                <div className='dados'>
                    <span className='section-title'>VEICULO</span>
                    <br />
                    <span style={{fontSize: '34px'}}>{dados}</span>
                </div> 

                <div className='dados'>
                    <span className='section-title'>CLIENTES</span>
                    {data[dados].map((cliente, index) => (
                        <div key={index} className='cliente'>
                            <span>Nome do Cliente: {cliente.client_name} <Checkbox
                                checked={selectedClientIndex === index} 
                                onChange={() => handleCheckboxChange(index)}
                            /></span>
                        </div>
                    ))}
                </div>

                {selectedClientIndex !== null && data[dados][selectedClientIndex] && (
                    <div className='dados'>
                        <span className='section-title'>PRODUTOS</span>
                        <div className='produto'>
                            {data[dados][selectedClientIndex].products.map((produto, index) => (
                                <div key={index}>
                                    <span>Produto: {produto.product_name}</span>
                                    <span>Código do Produto: {produto.product_code}</span>
                                    <span>Quantidade: {produto.quantity}</span>
                                </div>
                            ))}
                        </div>

                        <button onClick={() => {
                            envia(); 
                            } }>Enviar</button>
                    </div>
                )}


            </div>
        </div>
    );
}

export default CardsDados;
