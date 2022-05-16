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
    let pares = array.filter(function(item){
        return  item % 2 == 0
      }) 
  let i
      let quadrados = pares.map(function(par){
        return   Math.pow(par, 2)
      }) 


      return quadrados
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
  
  let pares = n.filter(function(item){
    return item % 2 == 0

  })

  return pares
  
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
    let n = [2,3,4,5,6,7,8,9,10]

    let menorNumero = Math.min.apply(Math,n)
    
    n.sort(function(a,b){
    if(a > b){
        return 1
    }
    
    if (a < b){
        return -1
    }
    
    return 0
    })
    
    let segundoMenor = n[1]
    let maiorNumero = Math.max.apply(Math, n)
    let segundoMaior = []
    
    for(let i = 0; i < n.length; i++){
    if(n[i] > segundoMaior && n[i] !=maiorNumero){
        segundoMaior = n[i]
        }
    }

  
return segundoMaior + "" + segundoMenor
   
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = {
        nome: "Cassino Royale",
        ano: 2006, 
        Diretor:  "Martin Campbell",
        atores: ["Daniel Craig ", "Eva Green", "Mad Mikelsen", "Jud Dench"]

          } 
       console.log(`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.Diretor}, e estrelado por ${filme.atores}`  )

       return filme()
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