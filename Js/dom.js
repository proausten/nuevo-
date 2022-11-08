

const Clientes = [
]

const creoId = ()=> parseInt(Math.random(0) * 100000)
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',(e) => {
event.preventDefault()
let id = creoId ()
let nombre = document.querySelector('#nombre__cliente').value
let apellido = document.querySelector('#apellido__cliente').value
let dni = document.querySelector('#dni__cliente').value
let direccion = document.querySelector('#direccion__cliente').value
let ingreso = document.querySelector('#ingreso__cliente').value

let mensajeFinal = `id=${id} Cliente: ${nombre} Apellido: ${apellido} Dni: ${dni} direccion: ${direccion} fecha de ingreso: ${ingreso}  `

for(let index = 0; index < Array.length; index++){
const element = [index[0]]
mensajeFinal += element + " "

}

Clientes.push(new Cliente (id, nombre, apellido, dni, direccion, ingreso))



recorrerProducto()

});




