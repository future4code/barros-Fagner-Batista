let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) //<=será impresso o número 10, 10 novamente e 5 


let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) //<=será impresso o número 10 três vezes 


let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

//O código abaixo calcula o valorHora trabalhada, para isso é pedido ao usuário, as horas trabalhas por dia e o valor que ele recebe diariamente, com essas informações. Ele pega o valor recebido diariamente e divide pela quantidade de horas trabalhada. Obtendo assim o valorHora. 

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let valorDia = prompt("Quanto você recebe por dia?")
valorHora(`Voce recebe ${valorDia/horasTrabalhadas} por hora`)

let nome 
let number = idade 
