import { useState } from "react"
import EditIcon from '@mui/icons-material/Edit'
import { Button } from '@mui/material'
import Processo from "./Processo.png"
export default function Loja() {
    const [mouseHover, setMouserHover] = useState(false);
    const [Data, setData] = useState({
        nome: "processador",
        ValorOriginal: 300,
        valor: 30,
        descricao: "Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test, Test",
        imagem: Processo
    })

let promocao = ((Data.ValorOriginal-Data.valor) /Data.ValorOriginal) *100


    return (
        <div  onMouseEnter={(e) => {setMouserHover(true)}} onMouseLeave={() => {setMouserHover(false)}} style={{width:"300px", height:"400px"}}>
            <div style={{
                position:"absolute", 
                zIndex:1,
                opacity: mouseHover ? 1 : 0,
                width:"300px", 
                height:"400px", 
                transition: "all 0.3s ease",
                pointerEvents: mouseHover ? "auto" : "none",  
                backgroundColor:"#3a393b4f",
                display:"flex",
                justifyContent:"end"}}> <Button style={{height:"40px", width:"40px"}}><EditIcon/></Button></div>


            <div style={{
                backgroundColor: "",
                width: "300px",
                border: "1px solid #737280b6",
                height: "400px",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                overflow: "hidden"
            }}>

             

                <div style={{
                    backgroundColor: "#faf7f7",
                    width: "100%",
                    height: "55%",
                    display: 'flex',
                    border: "1px solid #d1d0e6b6",
                    alignContent: "center",
                    justifyContent: "center"
                }}>
                    <img src={Data.imagem} style={{
                        width: "95%",
                        height: "95%",
                        padding: "2px",
                        boxShadow: "3px 3px 10px #e4d7d7f1"
                    }} /></div>

                <div style={{
                    backgroundColor: "",
                    width: "100%",
                    height: "45%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent:"center"
                }}>

                    <div style={{
                        backgroundColor: "#",
                        width: "90%",
                        height: "25%"
                    }}>
                        <text style={{
                            fontSize: 45,
                            fontWeight: 'bold'
                        }}>{Data.nome}</text></div>

                    <div style={{
                        backgroundColor: "",
                        width: "90%"
                    }}>
                        <p style={{
                            fontSize: 15,
                            fontWeight: '',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap'
                        }}>{Data.descricao}</p></div>

                        {Data.valor != Data.ValorOriginal && 
                                <div style={{
                                    backgroundColor: "",
                                    height: "10%"}}> 
                                    
                                    <text style={{
                                        fontSize: 15,
                                        marginLeft:"-110px",
                                        fontWeight: '',
                                        color:"#ff00009a",
                                        textDecoration: "line-through"
                                    }}>R$ {Data.ValorOriginal}</text> 
                                </div>}

                    <div style={{
                        backgroundColor: "#",
                        width: "90%",
                        height: "40%",
                        display:"flex",
                        marginLeft:"20px",
                        alignContent:"center",
                        flexDirection:"row",
                    }}>
                        <text style={{
                            fontSize: 45,
                            fontWeight: ''
                        }}>R$ {Data.valor}</text>
                        {Data.valor != Data.ValorOriginal && 
                            <div style={{
                                backgroundColor:"#54f14685",
                                borderRadius:"20px",
                                margintop:"",
                                marginLeft:"10px",
                                width: "auto",
                                height: "30%",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                padding: "5px"}}> <p style={{fontSize:"13px",margin:"5px",color:"#000000b9"}}>{promocao.toFixed(0) } % OFF</p> </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}