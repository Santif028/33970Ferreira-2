// SIMULADOR DE APLICAR DESCUENTO
const disminuirPrecio = (acumulador) => acumulador *= 0.85

let acumulador = 0
let desarrolloWeb, javaScript, reactJs, backEnd
do {
    desarrolloWeb = prompt("¿Desea agregar Desarrollo Web a su curso personalizado?").toLowerCase()
    if (desarrolloWeb == "si") {
        acumulador += 16560
        console.log(acumulador)
    }
} while (desarrolloWeb != "si" && desarrolloWeb != "no");
do {
    javaScript = prompt("¿Desea agregar JavaScript a su curso personalizado?").toLowerCase()
    if (javaScript == "si") {
        acumulador += 16560
        console.log(acumulador)
    }
} while (javaScript != "si" && javaScript != "no");

do {
    reactJs = prompt("¿Desea agregar React Js a su curso personalizado?").toLowerCase()
    if (reactJs == "si") {
        acumulador += 16560
        console.log(acumulador)
    }
} while (reactJs != "si" && reactJs != "no");

do {
    backEnd = prompt("¿Desea agregar Programación Backend a su curso personalizado?").toLowerCase()
    if (backEnd == "si") {
        acumulador += 38800
        console.log(acumulador)
    }
} while (backEnd != "si" && backEnd != "no");
alert(`Su precio final es $${acumulador}`)

let descuento = prompt("¿Desea aplicar un codigo de descuento?").toLowerCase()

if (descuento == "si") {
    let aplicarDescuento = prompt("Ingrese su codigo de descuento")
    if (aplicarDescuento == "coder.santiago.262c"){
        console.log(disminuirPrecio(acumulador))
        alert(`Su precio final es de $${disminuirPrecio(acumulador)}`)
    } else if (aplicarDescuento != "coder.santiago.262c"){
        alert("Codigo de descuento no valido")
    }
    
} else if (descuento == "no"){
    alert(`Su precio final es $${acumulador}`)
}   

