
var numero1 = 23
var numero2 = 30
var numero3 = 11
var resultadoMultiplicacion = numero1 * numero2
var flag = false
var textoResultado = "El resultado de "+numero1+" multiplicado por "+numero2+" es: "+resultadoMultiplicacion
var textoPar 
var textoBucle 
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayPares
var texto1 = "Hola, esto es un "
var texto2 = "texto de prueba "
var texto3 = 'concatenado.'
var nombres = ["Leolo", "Alex", "Miguel", "Julia", "Jose", "Cristina", "Manuel", "Maria", "David", "Noelia"]
let textoMinusculas = "ESTO ES UN TEXTO TRANSFORMADO A MINÚSCULAS"
let textoMayusculas = "esto es un texto transformado a mayúsculas"


let animal1 = {
    id: 1,
    name: "perro",
    status: "activo",
    species: "cánidos",
    type: "boxer",
    gender: "macho"
}
let animal2 = {
    id: 2,
    name: "gato",
    status: "activo",
    species: "felinos",
    type: "naranja",
    gender: "hembra"
}
let animal3 = {
    id: 3,
    name: "hámster",
    status: "activo",
    species: "cricétidos",
    type: "roborowski",
    gender: "hembra"
}
let animal4 = {
    id: 4,
    name: "serpiente",
    status: "activo",
    species: "vipéridos",
    type: "víbora",
    gender: "macho"
}
let animal5 = {
    id: 5,
    name: "tigre",
    status: "extinto",
    species: "felinos",
    type: "de java",
    gender: "macho"
}
let animal6 = {
    id: 6,
    name: "elefante",
    status: "activo",
    species: "mammalia",
    type: "africano",
    gender: "hembra"
}
let animal7 = {
    id: 7,
    name: "tiburón",
    status: "extinto",
    species: "acuático",
    type: "megalodón",
    gender: "macho"
}
let animal8 = {
    id: 8,
    name: "ballena",
    status: "activo",
    species: "cetácea",
    type: "jorobada",
    gender: "hembra"
}
let animal9 = {
    id: 9,
    name: "león",
    status: "activo",
    species: "felino",
    type: "africano",
    gender: "macho"
}
let animal10 = {
    id: 10,
    name: "jirafa",
    status: "vulnerable",
    species: "camelopardallis",
    type: "común",
    gender: "hembra"
}

let animalArray = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10]


let coche = {
    brand: 'Ford',
    model: 'Fiesta',
    year: '2020',
    doors: 5,
    horsepower : {
        firstModel : 120,
        secondModel : 200
    }
}

function imprimirNombres() {
    for (let i = 0; i < array.length-1; i++) {
        console.log(nombres[i])
        document.write(nombres[i])
        document.write("<br>")
    }
}

function imprimirCantiadNumeros() {
    let cantidadNumeros = array.length
    let mensajeCantidad = "El array de números tiene "+ cantidadNumeros +" elementos."
    console.log(mensajeCantidad)
    document.write(mensajeCantidad)
    document.write("<br>")
}

function numeroPuertas() {
    let puertas = coche.doors
    let mensajePuertas = "El coche tiene "+puertas+" puertas."
    console.log(mensajePuertas)
    document.write(mensajePuertas)
}

function imprimirMarca() {
    let marcaCoche = coche.brand
    let mensajeMarca = "La marca del coche es "+marcaCoche
    console.log(mensajeMarca);
    document.write(mensajeMarca) 
}

function atributoAnidado() {
    let caballos = coche.horsepower.secondModel
    mensajeAnidado = "El modelo del coche tiene "+caballos+" caballos de potencia."
    document.write(mensajeAnidado)
    console.log(mensajeAnidado) 
}

function transformarMinusculas() {
    textoMinusculas = textoMinusculas.toLowerCase()
    document.write(textoMinusculas)
    console.log(textoMinusculas)
}

function transformarMayusculas() {
    textoMayusculas = textoMayusculas.toUpperCase()
    document.write(textoMayusculas)
    console.log(textoMayusculas);
}

array.push(11)
console.log(array)


function getMaxOfArray() {
    let max = Math.max.apply(null, array)
    document.write("El número mayor del array es: "+max)
    console.log("El número mayor del array es: "+max)
}

function getMinOfArray() {
    let min = Math.min.apply(null, array)
    let mensajeMenor = "El número menor del array es: "+min
    document.write(mensajeMenor)
    console.log(mensajeMenor)
}

arrayPares = array.filter(array => array % 2 === 0)
console.log("Array sin numeros Impares: "+arrayPares)

function imprimirMensaje() {
    let mensaje = `Hola, ${nombres[0]}.`
    console.log(mensaje)
    document.write(mensaje)
}


function suma(numero1,numero2) {
    let resultadoSuma = numero1 + numero2
    document.write("El resultado de la suma entre "+numero1+" y "+numero2+" es: "+resultadoSuma)
    console.log("El resultado de la suma entre "+numero1+" y "+numero2+" es: "+resultadoSuma)
}



// function newNumber() {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (array[i] !== null) {
//             flag = false
//         } else {
//             flag = true
//         }
        
//         if(flag === true){
//             array[i] = numero3
//         }
//     }
//     return array
// }

// function eliminarPares() {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             delete(array[i])
//         }
//     }
//     return array
// }

function printNumbers(){
    for(let i = 0; i<array.length; i++) {
        document.write(array[i])
        document.write("<br>")
    }
    return textoBucle
}

function comprobarPares() {
    if(resultadoMultiplicacion % 2 === 0) {
        textoPar = "El resultado es Par"
    } else {
        textoPar = "El resultado es Impar"
    }
    return textoPar;
}

document.getElementById('buttonMessage').onclick = function(){
    alert('Hola, le has dado click a este botón');
}

let botonElement = document.getElementById("buttonClicks");
let pElement = document.getElementById("countArea");
let contador = 0;
botonElement.onclick = function () {
    contador++;
    pElement.textContent = "Cantidad de clicks :"+contador;
}


function genera_tabla() {
    let body = document.getElementsByTagName("body")[0];
  
    let tabla = document.createElement("table");
    let tblBody = document.createElement("tbody");
  
    for (var i = 0; i < animalArray.length; i++) {
      let animal = animalArray[i];
      let hilera = document.createElement("tr");
  
      let idCelda = document.createElement("td");
      let idTexto = document.createTextNode(animal.id);
      idCelda.appendChild(idTexto);
      hilera.appendChild(idCelda);
  
      let nameCelda = document.createElement("td");
      let nameTexto = document.createTextNode(animal.name);
      nameCelda.appendChild(nameTexto);
      hilera.appendChild(nameCelda);
  
      let statusCelda = document.createElement("td");
      let statusTexto = document.createTextNode(animal.status);
      statusCelda.appendChild(statusTexto);
      hilera.appendChild(statusCelda);
  
      let speciesCelda = document.createElement("td");
      let speciesTexto = document.createTextNode(animal.species);
      speciesCelda.appendChild(speciesTexto);
      hilera.appendChild(speciesCelda);
  
      let typeCelda = document.createElement("td");
      let typeTexto = document.createTextNode(animal.type);
      typeCelda.appendChild(typeTexto);
      hilera.appendChild(typeCelda);
  
      let genderCelda = document.createElement("td");
      let genderTexto = document.createTextNode(animal.gender);
      genderCelda.appendChild(genderTexto);
      hilera.appendChild(genderCelda);
  
      tblBody.appendChild(hilera);
    }
  
    tabla.appendChild(tblBody);
  
    body.appendChild(tabla);
  
    tabla.setAttribute("border", "1");
  }
  




comprobarPares(numero1)
printNumbers(array)
imprimirCantiadNumeros()

getMaxOfArray()
document.write("<br>")
getMinOfArray()
document.write("<br>")
document.write(textoResultado)
console.log(textoResultado)
document.write("<br>")
document.write(textoPar)
document.write("<br>")
document.write(texto1+texto2+texto3)
document.write("<br>")
document.write("Array sin numeros Impares: "+arrayPares+".")
document.write("<br>")
imprimirMensaje()
document.write("<br>")
suma(numero1, numero2)
document.write("<br>")
transformarMinusculas()
document.write("<br>")
transformarMayusculas()
document.write("<br>")
numeroPuertas()
document.write("<br>")
imprimirMarca()
document.write("<br>")
atributoAnidado()
document.write("<br>")
imprimirNombres()