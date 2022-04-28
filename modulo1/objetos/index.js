//=======Exercícios de interpretação de código======//
//===============Exercícios 1 ======================//

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		],
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//a) 
//Matheus Nachtergaele
//Virginia Cavendish
// {canal: "Globo", horario: "14h"}


//===============Exercícios 2 ======================//

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a) O que vai ser impresso no console?

//Object { nome: "Juca", idade: 3, raca: "SRD" }

//Object { nome: "Juba", idade: 3, raca: "SRD" }

//Object { nome: "Jubo", idade: 3, raca: "SRD" }

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

//Resposta: copia os dados do objeto cachorro

​//===============Exercícios 3 ======================//

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))



​//=======Exercícios de escrita de código de código======//
//===============Exercícios 1 ======================//

const pessoa1 = {
	nome: "Fagner",
	apelidos: ["Faguinho", "Fag ", "Bahiano" ]
 
 }

 
 console.log(`Eu sou ${pessoa1.nome}, pode me chamar de: ${pessoa1.apelidos}`)

//===============Exercícios 2 ======================//

const pessoa = {
	nome: "Fagner", 
   idade: 42, 
	 profissao: "Instrutor"
 }
 
 function info (){
 array = [pessoa.nome, pessoa.nome.length, pessoa.idade,pessoa.profissao,  pessoa.profissao.length]
 
 return array
 
 }
 
 info(pessoa)
 
 console.log(array)

 //===============Exercícios 2 ======================//


 carrinho = []

const fruta1 = {

   nome: "banana", 
   disponibilidade:  true  
}

const fruta2 = {

   nome: "laranja", 
   disponibilidade:  true
}

const fruta3 = {

   nome: "abacaxi", 
   disponibilidade:  true
}


function sacola (fruta){
carrinho.push(fruta1, fruta2, fruta3)

}

sacola()

console.log(carrinho)


//===============Desafio 1 ======================//
function dados(){

	nome = prompt("Qual o seu nome?")
	idade = Number(prompt("Qual a sua idade"))
	profissao = prompt("Qual a sua profissão")
	
	}
	
	dados()
	console.log(`nome ${nome}, profissão: ${profissao}, idade:${idade}`)