import {useState}from "react";

function Formulario2 (props){

    const[nome, setNome] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert('O nome digitado for' +nome);
    }
    return (

        
        <form className="form2"  onSubmit={handleSubmit}>

       <label>Msg: {""}
            <input className="input"
                type = "test"
                value = {nome}
                onChange = {(e) => setNome(e.target.value)}
            />
       </label>
        <button>Enviar Mensagem</button>
        <p>{props.form}</p>

        </form>
        
      
    )
}

export default Formulario2