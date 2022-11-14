

const Clientes = [{
    nombre:'Carlos',
    apellido:'Suarez',
    ingreso: '20-10-2020'
}]


const creoId = ()=> parseInt(Math.random(0) * 100000)
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',(e) => {
event.preventDefault()
let id = creoId ()
let nombre = document.querySelector('#nombreCliente').value
let apellido = document.querySelector('#apellidoCliente').value
let dni = document.querySelector('#dniCliente').value
let direccion = document.querySelector('#direccionCliente').value
let ingreso = document.querySelector('#ingresoCliente').value


let mensajeFinal = `id=${id} Cliente: ${nombre} Apellido: ${apellido} Dni: ${dni} direccion: ${direccion} fecha de ingreso: ${ingreso}  `

for(let index = 0; index < Array.length; index++){
const element = [index[0]]
mensajeFinal += element + " "

}



Clientes.push(new Cliente (id, nombre, apellido, dni, direccion, ingreso))
GuardarClientes()

mensajeOk()

recorrerProducto()  


});


const GuardarClientes = ()=>{
    if(Clientes.length > 0){
        localStorage.setItem('Clientes',JSON.stringify(Clientes) )
    }
}

const recuperarCliente = ()=>{
    if(localStorage.getItem('Clientes')){
         let clienteRecuperado =  JSON.parse(localStorage.getItem('Clientes'))
         clienteRecuperado.forEach(cliente => Clientes.push(cliente)) 
    }else{
        console.warn("No se encontraron Clientes")
    }
}

recuperarCliente()