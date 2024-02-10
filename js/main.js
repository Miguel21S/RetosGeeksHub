
// RETOS JAVA I



    
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


