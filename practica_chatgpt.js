let edad = 12;

if (edad>=18) {
    console.log("Es mayor de edad");
} 

else {
    console.log("No es mayor de edad");
}

let numero = 0;

if (numero > 0) {
    console.log("Es positivo");
} else if (numero < 0) {
    console.log("Es negativo")
} else {
    console.log("Es igual a cero")
}

let califiacion = 70;

if (califiacion >= 90 && califiacion <= 100) {
    console.log("Excelente");
} else if (califiacion >= 80 && califiacion <= 89) {
    console.log("Bueno");
} else if (califiacion >= 70 && califiacion <= 79) {
    console.log("Suficiente")
} else {
    console.log("Reprobado");
}


edad = 20; 
let tieneINE = true;

if (edad >= 18 && tieneINE) {
    console.log("Si puede entrar al BAR");
} else {
    console.log ("Acceso denegado");
}

let esEstudiante = false;
let esAdultoMayor = true;

if (esEstudiante || esAdultoMayor ) {
    console.log("Si tiene descuento")
} else {
    console.log("No tiene descuento")
}

let estaLogueado = false;

if (estaLogueado == true) {
    console.log("Bienvendio");
} else {
    console.log("No esta logueado");
}

let edad_7 = 17;
let permisoPadres = true;

if (edad_7 >=  18 || permisoPadres == true) {
    console.log("Si puedes entrar al evento");
} else {
    console.log("No puedes entrar al evento")
}