import {useState}from "react";


function Formulario1 (props){

    const[nome, setNome] = useState("");


    const handleSubmit = (event)=>{
        event.preventDefault();
        alert('O nome digitado for' +nome);
    }
    return (

      
        <form onSubmit={handleSubmit}>

       <label className="remetente">Remetente {""}
            <input
                type = "test"
                value = {nome}
                onChange = {(e) => setNome(e.target.value)}
            />
       </label>
    
        <p>{props.form}</p>

        </form>
        
    )
}

export default Formulario1