import { TextField } from "@mui/material"


const InputTextoAdmin = ({ label }) =>{
    return (
        <div style={{ margin: '20px' }}>
            <TextField id="filled-basic" label={label} variant="filled"
                sx={{
                    backgroundColor: '#EFEFEF',
                    boxShadow: '0px 4px 4px 0px #00000040',
                    color: 'black',
                    width: '100%',
                }}

            />

            
        </div>


    )
}

export default InputTextoAdmin