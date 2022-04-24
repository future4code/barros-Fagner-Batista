// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

let altura = Number(prompt("Digite a altura"))//pedi usuário que digite a altura do retângulo 
let largura = Number(prompt("Digite a largura"))//pedi ao usuário que largura do retângulo 



 console.log(altura * largura)//Imprime a area do retângulo 
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("Qual o ano atual?"))//Pedi ao usuário digite o ano atual 
let anoNasc = Number(prompt ("Qual o ano que você nasceu?"))//Pedi ao usuário digite o ano do seu nascimento 

console.log(anoAtual - anoNasc)//Imprime a idade a idade do usuário 
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

 imc = peso /(altura * altura) //calcula o IMC 

return imc//Retorna i IMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  //"Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

const nome = prompt("Qual o seu nome?")//Pegunta qual o nome do usuário
const idade = prompt("Quantos anos você tem?")//Pegunta o a idade do usuário 
const email = prompt("Qual o seu mail?")//Pergunta o e-mail do usuário 



console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)//Imrprime as informações do usuário 

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui


  const cor1 = prompt("Qual sua 1ªcor favorita")//Pergunta a primeira cor do usuário 
  const cor2 = prompt("Qual sua 2ª cor favorita")//Pergunta a segunda cor do usário 
  const cor3 = prompt("Qual sua 2ª cor favorita")//Pergunta a teceira cor do usário 

   let array = [cor1, cor2, cor3]//Armazena as cores digitas pelo usuário 
 

  console.log([cor1, cor2, cor3])//Imprime as cores armazenadas pelo usuário 

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

return stringMaiuscula = string.toUpperCase()//Retorna a string maíuscula 

}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  quant = custo/valorIngresso//Calcula a quantidade ingressos necessárias para o espetáculo 

  return quant//Imprime a quantidade de ingressos para o espetáculo

}
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

 

   return string1.length == string2.length//Verifica se string é do mesmo tamanho 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui


return array[0]//Retorna o primeiro elemento do array 

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

return array[array.length-1]//Retorna o último elemento do array 

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  string1 = "oi"//atribui o texto a string1
  string2 = "oi"//atribui o texto a string2

 


  return string1 === string2//Retorna um boleano quanto a string1 e string2 

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui



}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}