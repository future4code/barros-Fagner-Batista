const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


console.log("Bem vido ao Jogo de BackJack")

let jogar = sim = prompt("Deseja iniciar uma nova rodada? ")

let gameCartas

if(jogar) {

    


  let carta1Usuario = comprarCarta()
  let carta2Usuario = comprarCarta()
  let carta1Pc      = comprarCarta()
  let carta2Pc      = comprarCarta()

 const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
   
  function comprarCarta() {
    // Cria array de cartas

    
  console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
  console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 
  }


  let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
  let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

  console.log(`Usuário = cartas: ${carta1Usuario.texto} ${carta2Usuario.texto}`)
  console.log(`Computador = cartas: ${carta1Pc.texto} ${carta2Pc.texto}`)

  if(pontuacaoUsuario > pontuacaoPc){
    console.log("Parabens você ganhou!")
    }else if(pontuacaoPc > pontuacaoUsuario){
        console.log("O computador ganhou!")
    }else if (pontuacaoUsuario === pontuacaoPc){
        console.log("O jogo empatou!")
    }



}else{
  console.log("O jogo acabou")
}
