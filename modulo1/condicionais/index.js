//======Exercícios de interpretação de código=============//
//====================Exer.1===============================//



const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//a) Explique o que o código faz. Qual o teste que ele realiza? Primeiro pede para que o usuário digite um número. E o programa se passou no teste ou não, tendo base o número digitado

//b) Para que tipos de números ele imprime no console "Passou no teste"? só pra numeros pares

//c) Para que tipos de números a mensagem é "Não passou no teste"? Só para os numero impares

//====================Exer.2===============================//
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    //break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a)Para que serve o código acima? Fornecer algumas opções de frutas para que usuário escolha uma. E o programa retona uma mensagem a fruta escolhida e o seu preço 

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?O preço da fruta  uva  é  R$  2.25

​

//c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? Continuaria o mesmo valor

//====================Exer.2===============================//
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a) O que a primeira linha está fazendo?Pedindo que o usuário digite um número


//se fosse 10 = Esse número passou no teste
//se fosse -10 = mensagem is not defined

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. O console só imprime "mensagem" se este estiver dentro das chaves, portando dentro do if. 


//======Exercícios de escrita de código=============//


//====================Exer.1===============================//
idade = Number(prompt("Qual a sua idade?"))//Pergunta ao usuário qual a idade

if(idade > 18){//Verifica se o usuário tem mais de 18 anos 
    console.log("Você pode dirigir")//Imprime que o usuário pode dirigir
}else{//Verifica que o usuário não pode dirigir
    console.log("Você nâo pode dirigir")//Imprime que o usuário não pode dirigg
}
//====================Exer2=====================//

console.log("Digite M para Matutino")//Pede ao asuário digitar M para Matutino
console.log("Digite V para Vespertino")//Pede ao asuário digitar V para Vespertino
console.log("Digite N para noturno")//Pede ao asuário digitar N para noturno




if(turno == "M"){//Verifica a letra digita pelo usuário
    console.log("Bom dia")//Imprime bom dia 
}else if(turno == "V"){//Verifica a letra digita pelo usuário
    console.log("Boa tarde")//Imprime boa tarde
}else if (turno == "N"){//Verifica a letra digita pelo usuário
    console.log("Boa noite")//Imprime boa noite
}



//====================Exer3=====================//
console.log("Digite M para Matutino")//Pede ao asuário digitar M para Matutino
console.log("Digite V para Vespertino")//Pede ao asuário digitar V para Vespertino
console.log("Digite N para noturno")//Pede ao asuário digitar N para noturno

let turno = prompt("Escolha uma opção")//pede para usuário escolher uma opção das informadas acima


switch(turno){
    case "M":
        console.log("Bom dia")
        break
    case "V":
        console.log("Boa tarde")
        break
    case "N": 
        console.log("Boa noite")
 
}

//====================Exer4=====================//

const generoFilme = prompt("Qual genero do filme que deseja assistir?")
valorFilme = Number(prompt("Qual o valor?"))

if(generoFilme.to === "fantasia" && valorFilme < 15){
    console.log("Bom filme")
}else{
    console.log("Escolha outro filme")
}

//====================Exer4=====================//

const generoFilme = prompt("Qual genero do filme que deseja assistir?")
valorFilme = Number(prompt("Qual o valor?"))

if(generoFilme === "fantasia" && valorFilme < 15){
    
    let lanche = prompt("Qual lanchinho vai comprar?")
    console.log(`Bom filme e aproveite seu lanchinho ${lanche}`)
}else{
    console.log("Escolha outro filme")
}

