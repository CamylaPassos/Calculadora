console.log("Calculadora Desafio")

var inputHora = document.querySelector("#valor-hora")
console.log(inputHora)
//selecionei o valor da hora

var inputProjeto = document.querySelector("#horas-projeto")
console.log(inputProjeto)
//selecionei as horas do projeto

function calcular() { //criei a função
    var hora = inputHora.valueAsNumber //valor da hora
        console.log(hora)
    var projeto = inputProjeto.valueAsNumber //valor da hora do projeto
        console.log(projeto)
    var resultado = document.querySelector("#resposta")    

    var valorMensal = hora * projeto //multiplicou o valor da hora pelas horas de projeto
    
    var valorDuasCasas = valorMensal.toFixed(2) //"configurei" que so teremos 2 casas decimais
        console.log(valorDuasCasas)

    resultado.textContent = "R$ "+valorDuasCasas     
} 


