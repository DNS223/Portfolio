import { useRef } from "react"
import "./ProyectCard.css"
export default function ProyectCard ({imagen, proyectName, link, linkRepo}){
    const linkRef =useRef(null)
    return(
        <div style={{display:"flex", flexDirection:"column"}}>
        <div className="CardContainer" onClick={()=> linkRef.current && linkRef.current.click() } >
            <img src={imagen} alt="" />
            <div className="infoCard" >
                <p className="clicTxt">Haz clic para visitar</p>
                <p className="ProyectName">{proyectName}</p>
                <a href={link} target="_blank" ref={linkRef} style={{display:"none"}}></a>
                
            </div>
        </div>
        <a href={linkRepo}  onClick={(event) => event.stopPropagation()} target="_blank"><img src="./GitHubLogo.svg" alt="" style={{width:"20px"}}/></a>
        </div>
    )
} 