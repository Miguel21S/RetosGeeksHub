
// RETOS JAVA I
// DECLARACIÓN DE VARIABLES STRING
let nombre_1 = "Miguel";
let nombre_2 = prompt("Digite tu nombre: ");

// DECLARACIÓN DE VARIABLES NUMERICOS
let val_1 = 155;
let val_2 = 12;
let radio_1 = parseFloat(prompt("Digite el valor del radio"));
let divisible = parseInt(prompt("Digite el valor para saber si es divisible / 2"));
let precio = parseFloat(prompt("Digite el precio del producto €"));
let cantVenta = parseInt(prompt("Digite la cantidad de número de venta"));
let iva = 1.21;
let contar1a100 = 1;
let precio_final = 0;
let circulo = 0;

// COMPARA LOS NUMEROS SI ES >, <, O ==
if (val_1 > val_2) {
    console.log("El número mayor es:", `${val_1}`, '>' ,`${val_2}`);
} else if(val_1 < val_2) {
    console.log("El número mayor es:", `${val_1}`, '<' ,`${val_2}`);
} else {
    console.log("Valores son:",  `${val_1}`, '=' ,`${val_2}`);
}

// IMPRIME POR PANTALLA EL NOMBRE DIGITADO DANDOLE LAS BIEVENIDAS
console.log("Bievenido", nombre_1);

// NO ACEPTA CADENA VACÍA
while(nombre_2 === "") {
    nombre_2 = prompt("Digite tu nombre: ");
}
console.log("Bievenido", nombre_2);

// CALCULA EL VALOR DEL CIRCULO
circulo = (Math.PI * Math.pow(radio_1,2)).toFixed(2);
console.log("Valor del circulo: "+ circulo)

// SABER SI NÚMEROS ES DIVISIBLE POR 2 O NO
if (divisible % 2 == 0) {
    console.log("El valor es divisible por 2");
} else {
    console.log("El valor no es divisible por 2");
}

// CALCULA EL VALOR DEL PRECIO FINAL CON IVA
precio_final = precio * iva;
console.log("Valor del precio final: "+ precio_final.toFixed(2) +"€");

// MOSTRAR UN VALORES DEL 1 A 100 USANDO WHILE
 while(contar1a100 <= 2){
    console.log("While:", contar1a100);
    contar1a100++;
 }

 // MOSTRAR UN VALORES DEL 1 A 100 USANDO FOR
 for(let i = 1; i <= 2; i++){
    console.log("For:", i);
 }

 // REGENERAR VALORES DE 1 a 100 Y DECIR SI ES DIVISIBLE POR 2 Y 3 NOTA "HE AUMENTADO EL RETO"

 for(let i = 1; i <= 2; i++){
    if((i % 2 === 0) && (i % 3 === 0)){
        console.log(i, "es divisible por 2 y 3");
    } else if(i % 2 === 0){
        console.log(i, "es divisible por 2");
    } else if(i % 3 === 0){
        console.log(i, "es divisible por 3");
    } else {
        console.log(i, "no es divisible por 2 o 3");
    }
 }

 /** Realiza una aplicación que nos pida un número de ventas a introducir, después nos
    pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
    mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no. */
    
let sumaVentas = (numeroVenta)=>{
    let suma = 0;
    for(let i = 0; i < numeroVenta; i++) {        
        let ventaN = parseFloat(prompt("Digite número de ventas"));
        suma += ventaN;
    }
    return suma;
}
console.log("Suma total de ventas es:", sumaVentas(cantVenta));

/** Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
 *  laboral o no. Usa un switch para ello. */

let diaSemana = parseInt(prompt("'Digite el día de la semana' 1-Domingo, 2-Lunes, 3-Martes, 4-Miercoles, 5-Jueves, 6-Viernes, 7-Sabado"));

while ((diaSemana > 7) || (diaSemana < 0)) {
    console.log("La semana solo tiene 7 días");
    diaSemana = parseInt(prompt("'Digite el día de la semana' 1-Domingo, 2-Lunes, 3-Martes, 4-Miercoles, 5-Jueves, 6-Viernes, 7-Sabado"));
}

switch (diaSemana) {
    case 1:
        console.log("No es un día laboral");
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Es un día laboral");
        break;
    case 7:
        console.log("No es un día laboral");
        break;
    default:
        console.log("La semana solo tiene 7 días");
        break;
}

/*  Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
    se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
    más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
    condición de salida (3 intentos y si acierta sale, aunque le queden intentos).*/

let clave = prompt("Digite tu clave de seguridad (1 bs)");
let j = 0;
let cont = 3;
for (let i = 0; i < 4; i++) {
    if (clave !== "1 bs") {                                                  /// SI LA CLAVE ES INCORRECTA ENTRA EN BUCLE PARA PROVAR 3 VECES        
        while (j < 3) {
            clave = prompt("Digite tu clave de nuevamente:", cont);
            console.log("te quedan", --cont, "intentos");
            if (clave === "1 bs") {
                console.log("Enhorabuena");
            }
            j++;
        }
        break;                                                            /// CASO TERMINA LOS INTENTOS O PON LA CLAVE CORRECTA SE LEE EL BREAK Y TERMINA EL PROGRAMA ASIN NO VA A LEER ELSE
    } else {
        console.log("Enhorabuena");
        break;
    }

}
// while(){
//     clave = prompt("Solo te queda:", cont++ ,"intentos");
// }
// let fac = 1;
// for (let i = 5; i >= 1; i--) {
//     fac = fac*i;
// }
// console.log(fac);


// let cambiar = document.getElementById("cambiar");

// // RETO 1
// cambiar.addEventListener("click", function () {
//     document.getElementById("hola").innerHTML = "<h2>Hello DOM!</h2>";
// });

// function myFunction() {
//     document.getElementById("hola").innerHTML = "<h2>Hello JS!</h2>";
// }

// FIN RETO 1

// RETO 2

// const contador = (frase) => {
// let cont=0;
//     return frase.split(" ").reduce((total, latter) => {
//         let upperCase = latter.toUpperCase();
//         if(total[upperCase]) {
//             total[upperCase]++;
//         }else{
//             total[upperCase] = 1;
//         } 
        
//         return total;

//     }, {});
// };

// let resultado = contador("Hóla mundo")

// console.log(resultado);

// -------------------------------------------------------------------------------------------------

// NO  ES SENSIBLE A MAYUSCULA, PALABRAS CON ACENTO Y NO CUENTA ESPACIOS

// const quitarAcentos = (texto) => {
//     return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// };

// const contador = (frase) => {
//     return frase.split("").reduce((total, letter) => {
//         if (letter !== " ") {
//             let lowercaseLetter = quitarAcentos(letter.toLowerCase()); // Convertir la letra a minúscula y quitar acentos
//             total[lowercaseLetter] ? total[lowercaseLetter]++ : total[lowercaseLetter] = 1;
//         }
//         return total;
//     }, {});
// };

// let resultado = contador("Hola mundo");

// console.log(resultado);

// // FIN DEL RETO 2
// // ------------------------------------------------------------------------------------------------

// // RETO 3
// let nombre = prompt("Digite tu nombre");

// const numeroAlfabetico = (letra) => {
//     const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
//     return alfabeto.indexOf(letra.toLowerCase()) + 1;
// };

// const imprimirInicialesYNumeros = (nombre) => {
//     if (nombre.length >= 2) {
//         const primeraLetra = nombre[0].toUpperCase();
//         const segundaLetra = nombre[1].toUpperCase();
//         const numeroPrimeraLetra = numeroAlfabetico(primeraLetra);
//         const numeroSegundaLetra = numeroAlfabetico(segundaLetra);

//         console.log(`${primeraLetra}${segundaLetra}`);
//         console.log(`${primeraLetra}=${numeroPrimeraLetra} ${segundaLetra}=${numeroSegundaLetra}`);
//     } else {
//         console.log("El nombre debe tener al menos dos letras.");
//     }
// };
// imprimirInicialesYNumeros(nombre);
// FIN RETO 3
// --------------------------------------------------------------------------------------------------------


