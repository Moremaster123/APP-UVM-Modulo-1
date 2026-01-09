console.log("=== EJERCICIO 1: NUMBERS ===");



const preciolapiz = 15;
console.log("Precio del lapiz:", preciolapiz)

const edadEstudiante = 24;
console.log("Mi edad es:", edadEstudiante)

const numero1 = 8;
const numero2 = 3;
console.log("La multiplicacion de 8x3 es:", numero1*numero2)



console.log("\n=== EJERCICIO 2: STRINGS ===");

const miNombre = "Juan";
console.log("Mi nombre es ", miNombre)

const materiaFavorita = "Programacion";
console.log("Mi materia favorita es:", materiaFavorita)

const miApellido = " Gonzalez";
console.log("Mi nombre con mi primer apellido es:", miNombre + miApellido)



console.log("\n=== EJERCICIO 3: BOOLEAN ===");

const esFindeSemana = false
console.log("¿Es fin de semana? ", esFindeSemana) 

const tengoTarea = true
console.log("¿Tengo Tarea?: ", tengoTarea)

const miEdad = 24;
const soyMayordeEdad = miEdad >= 18;
console.log("Muestra si mi edad es mayor o igual que 18 años:", soyMayordeEdad)



console.log("\n=== EJERCICIO 4: ARRAYS ===");

const materiasEscuelas = ["Español","Matematicas","Ingles"]
console.log("Materias Escolares: ", materiasEscuelas)
console.log("La primera materia es: ", materiasEscuelas[0])
console.log("La primera materia es: ", materiasEscuelas[1])
console.log("El total de materias son: ", materiasEscuelas.length)

const califiaciones = [8,9,10,7,9];
console.log("Las califaciones son: ", califiaciones)
console.log("El total de calificaiones son: ", califiaciones.length)



console.log("\n=== EJERCICIO 5: COMBINADO ===");

const nombreEstudiante = "Juan Carlos";
const edad_Estudiante = 24;
const materiasEstudiante = ["Fisica","Matematicas","Ingles"]
const verdadEstudiante = true
const falseEstudiante = false

console.log("Mi nombre es ", nombreEstudiante, "Tengo ", edad_Estudiante," años", "Tengo estas materias: ", materiasEstudiante )
console.log("Mi nombre es: ", nombreEstudiante)
console.log(materiasEstudiante[0])



console.log("\n=== RETO FINAL ===");

const califacionesEstudiante = [10, 9, 7];
const promedioEstudiantesuma = califacionesEstudiante[0] + califacionesEstudiante[1] + califacionesEstudiante[2];
const promedioEstudiantedivision = promedioEstudiantesuma/3;
console.log("Mi promedio es: ", promedioEstudiantedivision)