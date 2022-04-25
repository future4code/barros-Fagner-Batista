//=====================================================//

function minhaFuncao(variavel) {//Cria uma função 
	return variavel * 5//
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a) Será impresso o valor 10 e Será impresso o valor 50
//b) Não será impresso nada no console

//=====================================================//

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

//Essa função verifica se o texto digitado pelo usuário coincide com a string cenoura
//i- A impressão é true porque foi encontrado a palavra cenoura 
//ii- A impressão também é true porque mesmo o usuário digitando maiúsculo o método toLowerCase() transforma o texto digitado em minúsculo, de modo que não importância se o usuário digita maiúsculo o minúsculo. 
//iii- A impressão true porque foi encontrada a string "cenoura", e desprezado todo o resto. 

//======== Exercícios de escrita de código ==============//
//1-a 
function imprimeUsuario() {
	console.log("Eu sou Fagner, tenho 42 anos, moro em Vitoria e sou estudante")//Imprime informações do usuário
}

imprimeUsuario()//chama a função usuário 

//===============================================//
//1-b
function infoUsuario(nome, idade, cidade, profissao){//cria uma função com quatro parâmetros 

nome = prompt("Qual o seu nome")//Pergunta ao usuário o seu nome
idade = prompt("Qual a sua idade?")//Pergunta ao usuário a sua idade
cidade = prompt("Qual a sua cidade?")//Pergunta ao usuário sua cidade
profissao = prompt("Qual a sua Profissão?")//Pegunta a sua profissão 


const info =  `Eu sou ${nome}, tendo ${idade} anos, moro em, ${cidade} e sou ${profissao}`//Consolida em "info" as informações do usuário

console.log(info)//Imprime informações do usuário
}

infoUsuario()//Invoca a função inforUsuário

//===============================================//
//2-a 
function somar(num1, num2) {//Cria uma função com dois parametros 
	

	num1 = 8//atribui na mum1 o número 8 
	num2 = 7//atribui na mum1 o número 7
resultado = num1 + num2//soma num1 e num2
	console.log(resultado)//Imprime a soma 
}
soma()//Invoca a função somar
//===============================================//
//2-b 
function comparar() {//Cria uma função para comparar
	let num3 = 10//atribui o número 10 a num3 
	let num4 = 5//atribui o número 5 a num5 

	console.log(num3 > num4)//Imprime o retorno da verificação em booleano
}
comparar()//invoca a função a função comparar

//===============================================//
//2-c 
function verificaSeNumeroPar(){//cria uma função para verificar um número é par 
    const num = 11//atribui um valor a num 
    
   const comparar =  num % 2 == 0 //verifica se o número é par 

   console.log(comparar)//Imprime o resultado da comparação 
}

verificaSeNumeroPar()//invoca o função criada anteriormente


//===============================================//
//2-d
function verificarParImpar(string) {//cria uma função para verificar se o tamanho da "string" é par ou impar
	string = "Fagner"//

console.log(string.length)//imprime o tamanho da string
console.log(string.length %2 ==0)//imprime se o tamanho da string é par ou não 

}
verificarParImpar()//invoca a função verificarParImpar

//===============================================//
//3

let num1 = Number(prompt("Digite o primeiro número"))//Pede que o usuário digite o primeiro número
let num2 = Number(prompt("Digite o segundo número"))//Pede que o usuário digite o segundo número

function soma(){//cria função para somar 

	let resultadoSoma = num1 + num2 //soma num1 e num2 

	return (`soma =  ${resultadoSoma}` )//retorna o resultado da soma 
}

function subtrai(){//cria uma funcão subtrair 

	let resultadoDiminui = num1 - num2 //subtrai num1 e num2 

	return (`Diferença =  ${resultadoDiminui}` )//retorna a diferença entre num1 e num2
}

function multiplica(){//cria função para multiplicar
	
	let resultadoMultiplica = num1 * num2//multiplica num1 e num2 

	return (`multiplicação =  ${resultadoMultiplica}` )//retorna a multiplicação num1 e num2

}

function divide(){//cria função para dividir 
	
	let resultadoDivide = num1 / num2//divide num1 por num2


	return (`Divisão =  ${resultadoDivide}` )//retorna a divisão
	

}

console.log(`Os número inseridos foram:  ${num1} e ${num2}`)
console.log(soma())
console.log(subtrai())
console.log(multiplica())
console.log(divide())