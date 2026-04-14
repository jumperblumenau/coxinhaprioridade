import Loja from "./Loja"

export default function ComponenteDeVenda() {
    return(

        <div style={{
            position:"relative",
            display:"flex",
            justifyContent:"center",
            width:"100vw",
            height:"100vh",
            flexWrap:"wrap",
            gap:"20px",
            overflow: 'auto'
        }}> 
            <Loja/>
            <Loja/>
            <Loja/>
            
        </div>



    )
}