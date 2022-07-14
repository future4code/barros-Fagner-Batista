import React from "react";

function Pagina3() {
    return (

        <div>
            <h2>Informações sobre quem não se formou no ensino superior nem está cursando </h2>
            <form>
                <label>Por que você não terminou um curso de graduação?
                    <input tipe="text"></input>
                </label>
            </form>
           

            <form>
                <label>Você fez algum curso complementar?
                    <select>
                        <option valeue=" ">Curso técnico </option>
                        <option valeue="">Cursos de inglês</option>
                        <option valeue="">Não fiz curso complementar</option>
                       
                    </select>

                </label>
            </form>

        </div>



    )
}

export default Pagina3