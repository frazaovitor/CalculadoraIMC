let peso = document.querySelector('#peso')
let altura = document.querySelector('#altura')
let result = document.querySelector('.resposta')
let resultado;

document.querySelector('.calcular').addEventListener('click', () => {
    resultado = peso.value / (altura.value**2)

    if (resultado > 0 && resultado < 18.5) {
        result.innerHTML = `Seu IMC é ${resultado.toFixed(2)}. Você está abaixo do peso ideal!`
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        result.innerHTML = `Seu IMC é ${resultado.toFixed(2)}. Você está no seu peso ideal!`
    } else if (resultado >= 25 && resultado <= 29.9) {
        result.innerHTML = `Seu IMC é ${resultado.toFixed(2)}. Você está com sobrepeso!`
    } else if (resultado >= 30 && resultado <= 34.9) {
        result.innerHTML = `Seu IMC é ${resultado.toFixed(2)}. Você está com obesidade de grau 1!`
    } else if (resultado >= 35 && resultado <= 39.9){
        result.innerHTML = `Seu IMC é ${resultado.toFixed(2)}. Você está com obesidade de grau 2!`
    }else if(resultado > 40){
        result.innerHTML = `Seu IMC é ${resultado.toFixed(2)}. Você está com obesidade de grau 3!`
    }else{
        result.innerHTML = `Somente números positivos são válidos. O formato dos números devem ser com "ponto" ao invés de "vírgula!`
    }
})

document.querySelector('.limpar').addEventListener('click',()=>{
    peso.value = ''
    altura.value = ''
    result.innerHTML = `Resultado`
})