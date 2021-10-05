let elementos = [];// array de numeros y operadores
let input = 0; //valor base 
let resultBtn = document.getElementById("result");// el campo de resultado

function calculo(valor) {
    if (input !== 0) {
        input = parseFloat(input); // convierte valor de input a numero
        addToElements(input); //añade elementos a resultado
    }
    let result = valor[0];
    let dividirAlZero = false;

    for (let i = 1; i < valor.length; i++) {
        switch (elementos[i - 1]) {
            case '+':
                result += valor[i];
                break;
            case '-':
                result -= valor[i];
                break;
            case '/':
                if (valor[i] === 0) dividirAlZero = true;
                else {
                    result = result / valor[i];
                }
                break;
            case '*':
                result = result * valor[i];
                break;
        }
    }

    result = result.toFixed(10); //10 numeros despues de la coma
    result = parseFloat(result); //resultado a numero

    //comprobacion de dividir al zero
    if (dividirAlZero === true) {
        clearAll();
        resultBtn.innerHTML = "Error";
    }
    else {
        resultBtn.innerHTML = result;
        input = result;
        elementos = [];
    }
}
//añadir cifras a numero
function addToElements(input) {
    elementos.push(input);
}
//limpiar todo
function clearAll() {
    elementos = [];
    input = 0;
    resultBtn.innerHTML = "0";
}
// hacer que numero sale a la pantalla
function numBtn(arg) {
    if (resultBtn.innerHTML === "Error" || (resultBtn.innerHTML == "0" && arg != ".")) {
        resultBtn.innerHTML = "";
    }
    if (!(arg === ".") || !input.match(/[.]/)) {
        input += arg;
        resultBtn.innerHTML += arg;
    }
}

function opBtn(arg) { // operador y numero a la pantalla
    if (input !== 0 && input !== "-") {
        input = parseFloat(input);
        addToElements(input);
        addToElements(arg);
        resultBtn.innerHTML += arg;
        input = 0;
    } // signo '-' antes de numero
    if (arg = "-" && isNaN(elementos[0]) && input !== "-") {
        input = "-";
        resultBtn.innerHTML = "-"
    }
}

