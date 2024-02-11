/* 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método para
rellenar el array(que tenga como parámetros los números entre los que tenga que generar)
y otro para mostrar el contenido y la suma del array. */

let tamano = parseInt(prompt("Digite el tamaño de arreglo"));

// // // RELLENAR ARRAY CON VALORES ALEATORIOS
let rellerConNumAleatorios = Array.from({length: tamano}, () =>  Math.floor(Math.random() * 100));

let imprimirArray = () => {
    let suma = 0;
    rellerConNumAleatorios.forEach((valor, index) => {

        suma += rellerConNumAleatorios[index];
        console.log( `${index}\t${valor}`);

    });
    console.log("La suma: " + suma)
};

imprimirArray();