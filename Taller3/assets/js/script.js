let divsuma = document.getElementById('sum')
let divresta = document.getElementById('resta')
let divmulti = document.getElementById('multiplicacion')
let divdivi = document.getElementById('division')
let resultado
let mensaje
let mresultado = document.getElementById('resultadoT')

function Operacion(resultado) {
    let num1 = parseInt(prompt('ingresa el primer numero'))
    let num2 = parseInt(prompt('ingresa el segundo numero'))

    switch (resultado
    ) {
        case "sum":
            resultado = num1 + num2
            mensaje = `Es resultado de la suma es: ${resultado}`
            mresultado.innerText = mensaje
            break;

        case "res":
            resultado = num1 - num2
            
            mensaje = `Es resultado de la resta es: ${resultado}`
            mresultado.innerText = mensaje
            break;
        case "mul":
            resultado = num1 * num2
            mensaje = `Es resultado de la multiplicación es: ${resultado}`
            mresultado.innerText = mensaje
            break;

        case "divi":
             if (num2 == 0) {
        mensaje = `el dividendo  debe ser diferente de cero`
        mresultado.innerText = mensaje
         } else {
                resultado = num1 / num2
                mensaje = `Es resultado de la división es: ${resultado}`
                mresultado.innerText = mensaje
                break;
        }
}
}

