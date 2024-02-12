/* 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método para
rellenar el array(que tenga como parámetros los números entre los que tenga que generar)
y otro para mostrar el contenido y la suma del array. */

// let tamano = parseInt(prompt("Digite el tamaño de arreglo"));

// // // RELLENAR ARRAY CON VALORES ALEATORIOS
// let rellerConNumAleatorios = Array.from({length: tamano}, () =>  Math.floor(Math.random() * 100));

// let imprimirArray = () => {
//     let suma = 0;
//     rellerConNumAleatorios.forEach((valor, index) => {
//         suma += rellerConNumAleatorios[index];
//         console.log( `${index}\t${valor}`);
//     });
//     console.log("La suma: " + suma)
// };

// imprimirArray();
/* 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios primos entre los números deseados, por último, nos indica cuál es el
mayor de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
hacer todos los métodos que necesites. */

// let tam = parseInt(prompt("Digite el tamaño de arreglo"));
// // let numeroPrimo = parseInt(prompt("Digite el número para saber si es primo o no"));

// let arrayAleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));

// let primo = arrayAleatorios.sort((a, b)=>{
//     return a-b;
// });

//     for (let i = 2; i <= primo.length; i++) {
//         if (primo % i === 0 && i !== primo) {
//             console.log(`${primo} is not a prime number`);
//             break;
//         }
//         console.log(`${primo} is a prime number`);
//     }

// // return primo;
// console.log("Ordenado",primo);



/* 12. Crea un array de números de un tamaño pasado por prompt, el array contendrá
    números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
    nosotros le indiquemos por prompt (debes controlar que se introduce un número correcto),
    estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10 posiciones le
    indicamos mostrar los números acabados en 5, podría salir 155, 25, etc. */

let tamanoArray = parseInt(prompt("Digite tamaño de Array"));
let numerosAcabados = parseInt(prompt("Digite el número para saber si esta el final o no"));
let finalArray = [];

while(isNaN(tamanoArray) || tamanoArray <= 1) {
    tamanoArray = parseInt(prompt("Digite un número positivo para el tamaño entre 1 a ..."));
}

while(isNaN(numerosAcabados) || numerosAcabados < 0) {
    numerosAcabados = parseInt(prompt("Digite un número positivo o 0 "));
}

let aleatoriosArr = Array.from({ length: tamanoArray }, () => Math.floor(Math.random() * 300));

const searchArray = (numerosAcabados, array) => {
    for (let i = 0; i < tamanoArray; i++) {
        if (array[i] % 10 === numerosAcabados) {
            finalArray.push(array[i]);
        }
    }
}

searchArray(numerosAcabados, aleatoriosArr)

console.log("Array Generado: " + aleatoriosArr)
console.log("Nº que terminan en: (" + numerosAcabados + ") Son: "+ finalArray)