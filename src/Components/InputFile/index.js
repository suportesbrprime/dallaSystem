import { FiDownload } from 'react-icons/fi';

const InputFile = () => {

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          console.log('Arquivo selecionado:', file.name);
        }
      };

    return(

        <div style={{ display: 'inline-block', position: 'relative' }}>
        <input
          type="file"
          id="fileUpload"
          accept=".xls, .xlsx, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          style={{
            position: 'absolute',
            opacity: 0,
            cursor: 'pointer',
            width: '100%',
            height: '100%',
          }}
          onChange={handleFileChange}
        />
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 20px',
            backgroundColor: 'white',
            color: '#3D955A', 
            border: '2px solid #3D955A',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
          }}
        >
          <FiDownload size={20} style={{ marginRight: '8px' }} />
          Upload de Planilha de QR Codes
        </button>
      </div>

    )

}

export default InputFile