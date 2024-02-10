
// DECLARACIÓN DE VARIABLES
let radio_1 = parseFloat(prompt("Digite el valor del radio"));
let divisible = parseInt(prompt("Digite el valor para saber si es divisible / 2"));
let precio_final = 0;
let circulo = 0;
let iva = 1.21;

/* 4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
    (recuerda pasar de String a double con parseDouble). Usa la constante PI. */
  
circulo = (Math.PI * Math.pow(radio_1,2)).toFixed(2);
console.log("Valor del circulo: "+ circulo)

/* 5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
    debemos indicarlo.*/

if (divisible % 2 == 0) {
    console.log("El valor es divisible por 2");
} else {
    console.log("El valor no es divisible por 2");
}

/*  6. Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
    calcule el precio final con IVA. El IVA será una constante que sera del 21% */

precio_final = precio * iva;
console.log("Valor del precio final: "+ precio_final.toFixed(2) +"€");