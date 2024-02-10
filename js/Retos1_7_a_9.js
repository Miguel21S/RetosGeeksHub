// DECLARACIÓN DE VARIABLES
let contar1a100 = 1;

/* 7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while. */

while(contar1a100 <= 100){
    console.log("While:", contar1a100);
    contar1a100++;
 }

/* 8. Haz el mismo ejercicio anterior con un bucle for. */

 for(let i = 1; i <= 100; i++){
    console.log("For:", i);
 }

/* 9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle
que desees. */

for(let i = 1; i <= 100; i++){
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


