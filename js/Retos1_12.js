
/*  Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo
    aritmético (String), según este último se realizará la operación correspondiente. Al final
    mostrará el resultado en un cuadro de diálogo.
    Los signos aritméticos disponibles son:
    +: suma los dos operandos.
    -: resta los operandos.
    *: multiplica los operandos.
    /: divide los operandos, este debe dar un resultado con decimales (double)
    ^: 1o operando como base y 2o como exponente.
    %: módulo, resto de la división entre operando1 y operando2.*/

let valor1 = parseFloat(prompt("Digite el primero valor"));
let valor2 = parseFloat(prompt("Digite el segundo valor"));

let operador = prompt("Digite el operador (+, -, *, /, ^, %)");

switch (operador) {
    case "+":
        console.log(valor1 + valor2);
        break;
    case "-":
        console.log(valor1 - valor2);
        break;
    case "*":
        console.log(valor1 * valor2);
        break;
    case "/":
        console.log(valor1 / valor2);
        break;
    case "^":
        console.log(Math.pow(valor1, valor2));
        break;
    case "%":
        console.log(valor1 % valor2);
        break;
    default:
        console.log("Operador incorrecto");
        break;
}