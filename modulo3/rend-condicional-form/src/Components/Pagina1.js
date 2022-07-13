import React from "react";

function Pagina1() {
    return (

        <div>
            <h1>Etapa 1: Dados Gerais</h1>
            <form>
                <label>Qual o seu nome?
                    <input tipe="text"></input>
                </label>
            </form>

            <form>
                <label>Qual a sua idade?
                    <input tipe="text"></input>
                </label>
            </form>

            <form>
                <label>Qual o seu Email?
                    <input tipe="text"></input>
                </label>
            </form>
            <form>
                <label>Qual o seu Escolaridade?
                    <select>
                        <option valeue="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                        <option valeue="Ensino Incompleto">Ensino Médio Completo</option>
                        <option valeue="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                        <option valeue="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                    </select>

                </label>
            </form>
        </div>
    )
}

export default Pagina1