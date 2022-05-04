
//============== Execícios de Interpretação de Códido =================

//Exer1 

// Este programa soma o valor da posição atual + a posição posterior. O resultado é 10
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)


//Exer2


//a) Será impresso os números maiores que 18 
//b) Sim seria.... 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}


//Exer3 
//Seria impresso 1,2,3 e 4 asteriscos 
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}


//============== Execícios de Escrita de Códido=================

//Exer1


//let quantAnimais = 0 
let Animais = []
 //quantAnimais = []

  quantAnimais = Number(prompt("Quantos bichos você tem?"))


if(quantAnimais > 0){

for(i = 1; i < quantAnimais.console; i++){

    Animais[i] = (prompt("Digite o nome de um Animal?"))
    console.log(Animais)

    }

    }else{

        console.log("Quena pena! Você pode adotar um pet!")
}



//2.a) 

arrayOriginal = [1,2,3,4,5,6,7,8,9,10]

function cadaUmValores()  {

    for(let i = 0; i < arrayOriginal.length; i++){
        console.log(arrayOriginal[i])
        }
    }  
    cadaUmValores()

//2.b)

arrayOriginal = [1,2,3,4,5,6,7,8,9,10]


function valoresDivide()  {

    for(let i = 0; i < arrayOriginal.length; i++){
        console.log(arrayOriginal[i]/10)
        }
    }  
    valoresDivide()

//2.c 
function NumPares()  {
    let arrayOriginal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    
    for(let i = 0; i < arrayOriginal.length; i++){
    
        if(arrayOriginal[i] % 2 == 0){
           console.log(arrayOriginal[i])
    
            }
        }  
    
    }
        NumPares()
