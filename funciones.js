//funcion 1, sin entradas ni salidas
function saludo() {
    console.log("Hola, bienvendio a la practica dos de DAD!")
}
//fin de funcion


//funcion 2, con una salida
function saludoEspanol () {
    return "Hola, bienvendio a la practica dos de DAD!"
}
//fin de funcion

///funcion 3, con entradas y salidas
function saludoIdioma(idioma) {
    if (idioma == "es") {
        return "Hola, bienvendio a la practica dos de DAD!";
    } else if (idioma == "en") {
        return "Hello, welcome to DAD practice two!";
    } else if (idioma === "fr") {
        return "Bonjur, bienenue...";
    } else {
        return "Iidioma no soportado";
    }
}

//fin de funcion

saludo(); //llamada de la funcion 1

let mensaje = saludoEspanol(); //llamada a la funcion 2
console.log(mensaje);

let mensajeIngles = saludoIdioma("fr"); //llamada a la fucnion 3
console.log(mensajeIngles)