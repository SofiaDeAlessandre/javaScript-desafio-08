import './style.css'

//___________________________________________
console.warn('******EJERCICIO 1******')

// 1. Debes crear las variables nombre, apellido, edad, pais y conocimientos, esta última deberá ser un array.
// - Mostrar todos los valores de las variables por la consola. Los elementos del array mostrarlos en forma manual.

let nombre = 'Sofia'
let apellido = 'De Alessandre'
let edad = 33
let pais = 'Argentina'
let conocimientos = ['html', 'javaScript', 'css']

console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(pais)
console.log(conocimientos[0])
console.log(conocimientos[1])
console.log(conocimientos[2])

// - Después cambia el valor de edad y añade un nuevo element al array.
// - Muestra esos nuevos valores por la consola.
edad = 34
let conocimientosArray = conocimientos.push('react')
console.log(edad)
console.log(conocimientos[0])
console.log(conocimientos[1])
console.log(conocimientos[2])
console.log(conocimientos[3])

//___________________________________________
console.warn('******EJERCICIO 2******')

// 2. Debes crear las variables marca, velocidad, stock y modelos (array)
// - Todas esas variables deberán ser mostradas por pantalla (con una frase) [Usar template strings]

let marca = 'Renault'
let velocidad = 150
let stock = 10
let modelos = ['Captur', 'Duster', 'Stepway']

alert(`El vehículo ${marca} llega a una velocidad aproximada de ${velocidad} km/h. Contamos con ${stock} unidades en stock de cada modelo ${modelos} `)

// - Debes mostrar cada uno de los elementos del array (sin hacerlo manualmente)

for (let i = 0; i < modelos.length; i++) {
  console.log(modelos[i])
}

//___________________________________________
console.warn('******EJERCICIO 3******')

// 3. Un coche va a toda velocidad por la carretera. Va a una velocidad de 135km/h y el limite es de 60km/h
// - Comprueba que si la velocidad es mayor al limite.
// - Si es mayor debes mostrar un mensaje por la consola indicando que baje la velocidad.
// - Si es menor el mensaje deberá ser que todo va bien.

let velocidadAuto = 135
let velocidadLimite = 60

if (velocidadAuto > velocidadLimite) {
  console.log('¡Baje la velocidad!')
}
else {
  console.log('¡Todo va bien!')
}

//___________________________________________
console.warn('******EJERCICIO 4******')

// 4. Dado un sueldo, crear una condicional comparando su sueldo.
// - Si el sueldo es $100.000 es excelente
// - Si el sueldo es menor o igual a $80.000 es muy bueno.
// - Si el sueldo es menor o igual a $60.000 es bueno.
// - Y si el sueldo es menor o igual a $40.000 es bajo.

let sueldo = 100000

if (sueldo === 100000) {
  console.log('El sueldo es excelente')
} else if (sueldo <= 80000) {
  console.log('El sueldo es muy bueno')
} else if (sueldo <= 60000) {
  console.log('el sueldo es bueno')
} else if (sueldo <= 40000) {
  console.log('el sueldo es bajo')
} else {
  console.log('el sueldo no está dentro de los valores ')
}

//___________________________________________
console.warn('******EJERCICIO 5******')

// 5. Pidele al usuario su año de Nacimiento (ej: 1990) en una ventana emergente (prompt) y calcula cuántos años tiene actualmente.

let añoNacimiento = Number(prompt('Ingrese su año de nacimiento'))
let añoActual = 2024
let edadActual =  añoActual - añoNacimiento
console.log(edadActual)

//___________________________________________
console.warn('******EJERCICIO 6******')

// 6. Crear una función en JavaScript que reciba como parámetro un número entero. Calcule y muestre en la consola la tabla de multiplicar de ese número desde 1 hasta 10.

// -- como ser vería en consola -> calcularTabla(2) -> Se utiliza un for
//  2 x 1 = 2
//  2 x 2 = 4
//  2 x 3 = 6
//  2 x 4 = 8

let calcularTabla = (numeroEntero) => {
for (let i = 1; i <= 10; i++ ){
  let resultado = numeroEntero*i
  console.log (`${numeroEntero} x ${i} = ${resultado}`)
}
}

calcularTabla(2)

//___________________________________________
console.warn('******EJERCICIO 7******')

// 7. Crea una función que devuelva si un número (pasado por el usuario es par o impar)
// Muestra el resultado por consola y un alert.
let numero = Number(prompt('Ingrese un número par o impar'))

let numeroParOImpar = (numero) => {
  if (numero%2 === 0) {
    console.log('el número es par')
    alert('El número es par')
  } else {
    console.log('el número es impar')
    alert('El número es impar')
  }
}

numeroParOImpar(numero)
