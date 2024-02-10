
// DECLARACIÓN DE VARIABLES
let cantVenta = parseInt(prompt("Digite la cantidad de número de venta"));
let precio = parseFloat(prompt("Digite el precio del producto €"));

/*  10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
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

/*  11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral
    o no. Usa un switch para ello. */

    let diaSemana = parseInt(prompt("Digite el día de la semana\n1-Domingo\n2-Lunes\n3-Martes\n4-Miercoles\n5-Jueves\n6-Viernes\n7-Sabado"));

    while ((diaSemana > 7) || (diaSemana < 0)) {
        console.log("La semana solo tiene 7 días");
        diaSemana = parseInt(prompt("Digite el día de la semana\n1-Domingo\n2-Lunes\n3-Martes\n4-Miercoles\n5-Jueves\n6-Viernes\n7-Sabado"));
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

/*  12. Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
    se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
    más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
    condición de salida (3 intentos y si acierta sale, aunque le queden intentos). */

    let clave = prompt("Digite tu clave de seguridad (1 bs)");
    let j = 0;
    let cont = 3;
    for (let i = 0; i < 4; i++) {
        if (clave !== "1 bs") {                                                  /// SI LA CLAVE ES INCORRECTA ENTRA EN BUCLE PARA PROVAR 3 VECES        
            while (j < 3) {
                clave = prompt("Digite tu clave nuevamente:", cont);
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