import React from "react";
import {useNavigate} from 'react-router-dom'

function AdmHomePage(){
    const navigate = useNavigate()

    const  goToAdm =()=>{
        navigate("./")
    }
    return(
        <div>
        <h1>Home Page</h1>
            <button onClick={goToAdm}>Administração</button>
            <button>Todas as Viagens</button>
        </div>

    )
}

export default AdmHomePage