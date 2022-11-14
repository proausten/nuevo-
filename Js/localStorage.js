const inputNombre = document.querySelector('#nombreCliente')
const inputApellido = document.querySelector('#apellidoCliente')
const inputDni = document.querySelector('#dniCliente')
const inputDireccion = document.querySelector('#direccionCliente')
const inputIngreso = document.querySelector('#ingresoCliente')

btnStorage = document.querySelector('#btn_Agregar')

const almacenarClientes = ()=>{
    if (inputNombre.value.trim()!==""){
        localStorage.setItem('nombre', inputNombre.value)
    }
    if (inputApellido.value.trim()!==""){
        localStorage.setItem('apellido', inputApellido.value)
    }
    if (inputDni.value.trim()!==""){
        localStorage.setItem('dni', inputDni.value)
    }
    if (inputDireccion.value.trim()!==""){
        localStorage.setItem('direccion', inputDireccion.value)
    }
    if (inputIngreso.value.trim()!==""){
        localStorage.setItem('ingreso', inputIngreso.value)
    }
}

 const recuperarDatos = ()=>{
    if(localStorage.getItem('nombre')){
        inputNombre.value = localStorage.getItem('nombre')
    }
    if(localStorage.getItem('apellido')){
        inputApellido.value = localStorage.getItem('apellido')
    }
    if(localStorage.getItem('dni')){
        inputDni.value = localStorage.getItem('dni')
    }
    if(localStorage.getItem('direccion')){
        inputDireccion.value = localStorage.getItem('direccion')
    }
    if(localStorage.getItem('ingreso')){
        inputIngreso.value = localStorage.getItem('ingreso')
    }
 }

 btnStorage.addEventListener('click', almacenarClientes)


 document.addEventListener("DOMContentLoaded", recuperarDatos)