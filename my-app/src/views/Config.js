import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function Config() {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valorOriginal, setValorOriginal] = useState("");


    return (
        <div >
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                
                style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#00000011"

        }}
            >
                <TextField
                    label="Nome do Produto"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value)}} />
                <TextField
                    label="Valor do Produto"
                    value={valor}
                    onChange={(e) => { setValor(e.target.value)}} />
                <TextField
                    label="Descrição do Produto"
                    value={descricao}
                    onChange={(e) => { setDescricao(e.target.value)}} />
                <TextField
                    label="Valor Original"
                    value={valorOriginal}
                    onChange={(e) => { setValorOriginal(e.target.value)}} />
                

            </Box>
        </div>
    );
}