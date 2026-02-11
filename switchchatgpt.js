console.log("=== EJERCICIO 1: SWITCH CASE ===");

const diaSemana = 3;

switch (diaSemana) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    case 7:
        nombreDia = "Domingo";
        break;
    default:
        nombreDia = "Día inválido";
}

console.log("El día de la semana es:", nombreDia);


console.log("=== EJERCICIO 2: SWITCH CASE ===");

switch (diaSemana) {
    case 1 || 2: "Inicio de semana";
    break;
    case 3 || 4: "Mitad de semana";
    break;
    case 5 || 6 || 7: "Fin de semana";
    break;
    default:
        nombreDia = "Día inválido";    
}

console.log("El día de la semana es:", nombreDia);