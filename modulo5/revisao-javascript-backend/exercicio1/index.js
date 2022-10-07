//Este programa cria um conversor de temperaturas de celcius para as escalas em Fahrenheit e Kelvin. 
let pergcelsius = prompt( "Insira a temperatura em graus celsius a ser convertida")
let celsius = Number(pergcelsius)

const converter = {
    kelvin: ()=>{
      
        tempKelvin =   celsius * 274,15
        console.log(celsius + " Celsius é equivalente a " + tempKelvin+ " kelvin") 
    },


    fahrenheit: ()=>{
        
        tempFahrenheit =1 *33,8
        console.log(celsius + " Celsius é equivalente a " + tempFahrenheit+ " fahrenheit")
    }


}


converter.kelvin()
converter.fahrenheit()