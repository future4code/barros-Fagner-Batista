


function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]


 // Escreva seu código aqui

const nomeAnimais = animais.map(function(nomes){
  return nomes
})
console.log(nomeAnimais)
}

criarArrayNomesAnimais()
