
const InputNumber = ({ value , evento }) => {
  return (
    <div style={{margin: '20px'}}>
        <input 
            onChange={evento}
            value={value}
            style={{ padding: '15px', fontSize: '18px', backgroundColor: '#DADADA', border: '0', boxShadow: '0px 4px 4px 0px #00000040', color: 'black'}}
            type="number" placeholder="Numero de dalas"/>
        </div>
  );
};

export default InputNumber;
