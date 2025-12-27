let edad = 24
let altura = 1.67
let resultado = edad + 5
let temperatura = 18

console.log("Tengo " + edad + " años.");
console.log("Mi altura es:", altura, "metros");
console.log("Temperatura:", temperatura + "°C");
console.log("En 5 años tendré:", resultado, "años");


console.log("===Boolean (true/false)===")
let esVerdadero = true; //Variable booleana
let esFalso = false; //Variable booleana
let cadenaDevalor = esVerdadero && esFalso; //Operacion AND entre booleanos


let esMayorDeEdad = true;
let tieneLicencia = false;
let puedeConducir = esMayorDeEdad && tieneLicencia; //Operacion AND los dos deben ser true para true, si uno es false da como resultado false
//OR puedevotar = esMayorDeEdad / TieneIne



console.log("\n=== 3. BOOLEAN (Verdadero/Falso) ===");
console.log("¿Es mayor de edad?", esMayorDeEdad);
console.log("¿Tiene licencia?", tieneLicencia);
console.log("¿Puede conducir?", puedeConducir);