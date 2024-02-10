
/* 1 Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los
    dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que
    funciona.*/

// DECLARACIÓN DE VARIABLES STRING
let nombre_1 = "Miguel";
let nombre_2 = prompt("Digite tu nombre: ");

let val_1 = 155;
let val_2 = 12;

// COMPARA LOS NUMEROS SI ES >, <, O ==
if (val_1 > val_2) {
    console.log("El número mayor es:", `${val_1}`, '>', `${val_2}`);
} else if (val_1 < val_2) {
    console.log("El número mayor es:", `${val_1}`, '<', `${val_2}`);
} else {
    console.log("Valores son:", `${val_1}`, '=', `${val_2}`);
}

/* 2 Declara un String que contenga tu nombre, después muestra un mensaje de bienvenida
     por consola. Por ejemplo: si introduzco “Fernando”, me aparezca “Bienvenido Fernando”.*/

// IMPRIME POR PANTALLA EL NOMBRE DIGITADO DANDOLE LAS BIEVENIDAS
console.log("Bievenido", nombre_1);

/* 3. Modifica la aplicación anterior, para que nos pida el nombre que queremos introducir
    (recuerda usar prompt).*/

// NO ACEPTA CADENA VACÍA
while(nombre_2 === "") {
    nombre_2 = prompt("Digite tu nombre: ");
}
console.log("Bievenido", nombre_2);