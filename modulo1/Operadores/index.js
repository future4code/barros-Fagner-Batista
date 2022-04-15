/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)//false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)//true

console.log("d. ", typeof resultado)//booleano

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = parseInt (primeiroNumero) + parseInt (segundoNumero)

console.log(soma)

let idadeUsuario = prompt("Qual a sua idade?")//solicita que usuário insira a sua idade
console.log(idadeUsuario)//lê o valor que o usuário digitou

let idadeAmigo = prompt("Qual a idade de mehor amigo(a)?")//solicita que usuário insira idade do melhor amigo(a)
console.log(idadeAmigo)//Lê o valor que o usuário digitou

let maiorIdade = idadeUsuario >idadeAmigo//Verifica se idade do usuário maior que do seu melhor amigo(a)

let diferencaIdade = idadeUsuario - idadeAmigo//Verifica a diferença de idade entre o usuário e seu melhor amigo(a)

console.log(maiorIdade)//Imprime se a idade idade do usuário é maior do que a idade do seu melhor amigo ou amiga
console.log("A diferença de idade idade é" , diferencaIdade, "anos")//Imprime a diferença de idade entre o usuário e a idade do seu melhor amigo(a)

let numeroPar = prompt("Insira um número par")//Solicita que insira um número par
let resto = numeroPar % 2 //Verifica se o resto da divisão por 2 é zero
console.log(resto)//sempre que o numero for par o resto é zero

/*Caso o numero inserido não seja par, 
1. o resto da divisão será diferente zero
2. o resto da divião será um número ímpar,
3. o número inserido também será ímpar*/
/*

let idade = prompt("Qual a sua idade?")//Pede que o usuário insira a sua idade
let idadeMeses = idade * 12//calcula quantidade de meses que o usuário tem
let idadeDias = idadeMeses * 30//calcula quantidade dias que o usuário tem
let idadeHoras = idadeDias * 24//calcula a quantidade de horas o usuário tem

console.log("Desde que você nasceu já se passaram " , idadeMeses , "meses")//Imprime a quantidade de meses que o usuário tem
console.log("Desde que você nasceu já se passaram " , idadeDias , "dias")//Imprime a quantidade de dias que usuário tem 
console.log("Desde que você nasceu já se passaram " , idadeHoras , "dias")//Imprime a quantidade horas que usuário tem*/

let primeiroNumero = prompt("Insira o primeiro numero")
let segundoNumero = prompt("Insira o segundo numero")

let pergunta1 = primeiroNumero > segundoNumero
let pergunta2 = primeiroNumero == segundoNumero
let pergunta3 = primeiroNumero % segundoNumero ==0
let pergunta4 = segundoNumero % primeiroNumero ==0

console.log("Este foi o primeiro número" , primeiroNumero)
console.log("Este foi o segundo número", segundoNumero)

console.log ("O primeiro numero é maior que segundo? " , pergunta1)
console.log ("O primeiro numero é igual ao segundo?", pergunta2)
console.log ("O primeiro numero é divisível pelo segundo?" , pergunta3)
console.log ("O segundo numero é divisível pelo segundo?" ,pergunta4)
