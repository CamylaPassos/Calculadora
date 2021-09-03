console.log("Calculadora")

var inputSalario = document.querySelector("#ganho-mes")
console.log(inputSalario)
//selecionei o salario

var inputHoras = document.querySelector("#horas-dia")
console.log(inputHoras)
//selecionei as horas

function calcularValorHora(){ //criei a função
    var salario = inputSalario.valueAsNumber //valor do salario em numero
        console.log(salario)
    var horas = inputHoras.valueAsNumber //valor das horas em numero
        console.log(horas)
    var resultado = document.querySelector("#resposta")    

    var horasMes = horas * 22 //multipliquei horas pelos dias
    var valorHora = salario/horasMes //dividiu o salario pela quantidade de horas
          
    var valorDuasCasas = valorHora.toFixed(2) //"configurei" que so teremos 2 casas decimais
    console.log(valorDuasCasas)  

    resultado.textContent = "R$ "+valorDuasCasas

}


