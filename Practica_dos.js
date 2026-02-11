let calificacionesUno = [85, 90, 78, 92, 88];
let calificacionesDos = [85, 90, 78];
let calificacionesTres = [65, 70, 72, 68, 60];

let A = 90 - 100
let B = 80 - 89
let C = 70 - 79
let D = 60 - 69
let F = 0 - 59

let promedio_uno = (85 + 90 + 78 + 92 + 88) / 5

if (promedio_uno <= 59 && promedio_uno >= 0) {
    console.log("Tu promedio es F")
} else if (promedio_uno <= 69 && promedio_uno >= 60){
    console.log("Tu promedio es D")
} else if (promedio_uno <= 79 && promedio_uno >= 70) {
    console.log("Tu promedio es C")
} else if (promedio_uno <= 89 && promedio_uno >= 80) {
    console.log("Tu promedio es B")
} else if (promedio_uno <= 100 && promedio_uno >= 90) {
    console.log("Tu promedio es A")
} else {
    console.log("No hay promedio")
}

console.log(promedio_uno)

let suma = 0

for(let i = 0; i < calificacionesUno.length; i++) {
    suma = suma + calificacionesUno[i] 
}

console.log(suma)

let promedio_chat = suma / calificacionesUno.length;
console.log(promedio_chat)