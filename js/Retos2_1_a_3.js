

// /*  1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
//     Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los
//     valores necesarios para calcular el área. Para ello has de crear un método por cada figura
//     para calcular cada área, este devolverá un número real. Muestra el resultado por consola.
//     Aquí te mostramos que necesita cada figura:
//     • Circulo: (radio^2)*PI
//     • Triangulo: (base * altura) / 2
//     • Cuadrado: lado * lado */

// DECLARACIÓN DE VARIABLES

//     let figura = prompt("Digite la figura a calcular\n 1-circulo\n 2-triangulo\n 3-cuadrado\n");
//     let radio = 0;
//     let base = 0;
//     let altura = 0;
//     let lado = 0;

//     let circulo = (radio) => {
//         return (Math.pow(radio, 2) * Math.PI).toFixed(2);;
//     }

//     let triangulo = (base, altura) => {
//         return ((base * altura) / 2).toFixed(2);;
//     }

//     let cuadrado = (lado) => {
//         return (Math.pow(lado, 2)).toFixed(2);
//     }

//     switch(figura){
//         case "circulo":
//             radio = parseFloat(prompt("Digite el radio del circulo"));
//             console.log(circulo(radio));
//             break;

//         case "triangulo":
//             base = parseFloat(prompt("Digite la base del triangulo"));
//             altura = parseFloat(prompt("Digite la altura del triangulo"));
//             console.log(triangulo(base, altura));
//             break;

//         case "cuadrado":
//             lado = parseFloat(prompt("Digite el lado del cuadrado"))
//             console.log(cuadrado(lado));
//             break;

//         default:
//             console.log("Figura incorrecta");
//             break;
//     }

// /*  2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
//     por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre qué
//     números queremos que los genere, podemos pedirlas al usuario antes de generar los
//     números. Este método devolverá un número entero aleatorio. Muestra estos números por
//     consola. */

// DECLARACIÓN DE VARIABLES
//     let valorInicial = 0;
//     let valorFinal = 0;
//     valorInicial = parseInt(prompt("Digite el valor Inicial"));
//     valorFinal = parseInt(prompt("Digite el valor Final"));
//     let generarNumerosAleatorios = (valorInicial, valorFinal) =>{
        
//         let numeroAleatorio = Math.floor(Math.random() * (valorFinal - valorInicial) + valorInicial);
//         return numeroAleatorio;
//         // for(let i = valorInicial; i <= valorFinal; i++){
//         //     return Math.floor(Math.random() * valorFinal).toFixed(2);
//         // }
//     }
//     console.log(generarNumerosAleatorios(valorInicial, valorFinal));

/*  3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
    por parámetro para que nos indique si es o no un número primo, debe devolver true si es
    primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por
    ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo. */
    
    // let numeroPrimo = parseInt(prompt("Digite el número para saber si es primo o no"));
    // let esprimo = (numero) => {
    //     for(let i = 2; i <= Math.sqrt(numero); i++){
    //         if(numero % i === 0){
    //             return false;
    //         }
            
    //     }
    //     return true;
    // }

    // for(let i = 2; i <= numeroPrimo; i++){
    //     if(esprimo(i)){
    //         console.log(i, "es primo");
    //     } else {
    //         console.log(i, "no es primo");
    //     }
    // }

/*  4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
    realizará mediante un método al que le pasamos el número como parámetro. Para calcular
    el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si
    introducimos un 5, realizará esta operación 5*4*3*2*1=120. */
// let fac = parseInt(prompt("Digite el número factual"));
// let factorial = (numero) => {
//     let factorial = 1;
//     for(let i = numero; i >= 1; i--){
//         factorial *= i;
//     }
//     return factorial;
// }
// console.log(factorial(fac));

/*5.  Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
    realizará un método al que le pasaremos el número como parámetro, devolverá un String
    con el número convertido a binario. Para convertir un número decimal a binario, debemos
    dividir entre 2 el número y el resultado de esa división se divide entre 2 de nuevo hasta que
    no se pueda dividir más, el resto que obtengamos de cada división formará el número
    binario, de abajo a arriba. */

// let conversion = parseInt(prompt("Digite el número a convertir de base 10 a 2"));
// let cadena = "";
// let decimalBinario = (numero) =>{
//     while(numero > 0){
//         cadena = (numero % 2) + cadena;
//         numero = Math.floor(numero / 2);
//     }
//     return cadena;
// }
// console.log(decimalBinario(conversion));

/* 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
    (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, pasando
    el número por parámetro devolverá el número de cifras. */
let contarNumeros = parseInt(prompt("Digite el numero para saber cuantos digitos tienen"));
let cadena = "";
let tamanoDigito = (nuemro) => {
    if (nuemro > 0){
        cadena = nuemro + cadena
     }
     return cadena.length;
};
console.log(tamanoDigito(contarNumeros));