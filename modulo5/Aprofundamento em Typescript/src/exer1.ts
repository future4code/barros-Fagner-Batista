export function exer1 (){
    
    
    
//a)     
const minnhaString:  string = ""

    console.log(minnhaString)
//Resposta: O tipo 'number' não pode ser atribuído ao tipo 'string'.

//b) 
let meuNumero: string | number = 5 

type Person = {
    nome: string, 
    idade: number, 
    corFavorita: string

}

const pessoa1: Person = {
    nome: "Fulano",
    idade: 24,
    corFavorita: "rosa"
}

const pessoa2: Person = {
    nome: "Fulana",
    idade: 43,
    corFavorita: "verde"
}

const pessoa3: Person = {
    nome: "Fulane",
    idade: 29,
    corFavorita: "vermelho"
}
enum corfavorita {
    VERMELHA = "vermelha",
    LARANJA = "laranja",
    AMARELA = "amarela", 
    VERDE = "VERDE", 
    AZUL = "verde", 
    AZULESCURO = "azulescuro", 
    VIOLETA = "violeta", 



    //vermelha, laranja, amarela, verde, azul, azul-escuro e violeta
}



console.table(corfavorita.LARANJA)

}

