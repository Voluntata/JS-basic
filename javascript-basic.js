// 1
console.log("Hola Mundo");

// 2
alert("Me llamo Mila");

// 3
let nombre = "Mila";
let apellido = "Polchenko"
console.log(nombre, apellido);

// 4
let num1 = 34;
let num2 = 56;
let sum = num1 + num2;
console.log(`La suma entre ${num1} y ${num2} es ${sum}`);

// 5
let nota = parseFloat(prompt('Nota?'));
let message = (nota < 5 && nota !== null && nota !== '') ? `Ohh has suspendido el examen con ${nota}` :
    (5 <= nota && nota < 10) ? `Felicidades! Has aptobado el examen con ${nota}` :
        (nota > 10) ? 'Eso no es una nota' :
            'No es un numero';
alert(message);

//6
let str = "Tinc un cotxe de color verd";
console.log(str);
let str_blau = str.replace("verd", "blau");
console.log(str_blau);
console.log(str_blau.replace(/o/g, "u"));

//7
let arr = ['taula', 'cadira', 'ordinador', 'libreta'];
for (let i = 0; i < arr.length; i++) {
    console.log("L'objecte " + arr[i] + " esta a la posició " + i);
}

//8
function calculadora(operador, valor1, valor2) {
    switch (operador) {
        case "suma":
            return valor1 + valor2;
        case "resta":
            return valor1 - valor2;
        case "multiplicar":
            return valor1 * valor2;
    }
}
let resultado = calculadora('resta', 40, 20);


//nivel-2
function calculadora2(operador, valor1, valor2) {

    switch (operador) {
        case "suma":
            return valor1 + valor2;
        case "resta":
            return valor1 - valor2;
        case "multiplicar":
            return valor1 * valor2;
        case "dividir":
            if (valor2 !== 0) {
                return valor1 / valor2;
            } else {
                return "no se puede dividir a 0"
            }
    }

}

       
