/// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
   
    return array.sort((a,b) => a - b)

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    let  par = array.filter(function(item) {
        return item % 2 === 0
        })
    return par
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let par = array.filter(function(item){
        item % 2 == 0 
          return par
    }) 
  
    
    
    let dobro = array.map(function(elevado){
        return elevado = math.pow(par,2)
    })
    
  
    return dobro 

   

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumeroAtual = array[0]
  for(let i = 1; i < array.length; i++){

    if(array[i] > maiorNumeroAtual){
        maiorNumeroAtual = array[i]

    }

  }

    return maiorNumeroAtual  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  // let numerosPares = [1,2,3,4,5,6] 
   for(let i = 0; i < n; i ++){
       if(i % 2 == 0){
           numerosPares.push(i)
       }
   }
   return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if(ladoA == ladoB && ladoA == ladoC && ladoB ==ladoC){
       
         return  "Equilátero" 
       
     }
     else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
       
          return "Escaleno"
     }
     else if(ladoA == ladoB || ladoA == ladoC ||ladoB == ladoC){
        
          return "Isósceles"
        
       
     }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}