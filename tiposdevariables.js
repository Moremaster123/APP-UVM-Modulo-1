console.log("===CONST vs Let (Variable) vs VAR===")

//Constante: valor fijo que no cambia
const PI = 3.14  //Osea la vairbale const no puede cambiar su valor como con el let
console.log("Valor de PI", PI);

let edad = 30; //Variable con alcance de bloque
console.log("Edad inicial: ", edad);

edad = 31;
console.log("Edad despues de reasignar: ",edad);

var formaAntigua = "Hola" //Variable con alcance global o de funcion