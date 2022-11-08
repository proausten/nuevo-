

class Cliente {
    constructor(id, nombre, apellido, dni, direccion, ingreso) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.direccion = direccion
        this.ingreso = ingreso
    }
}

const listadoCliente = document.querySelector('tr')




const tbody = document.querySelector('tbody')


function armarHTML(cliente){
    return `  <tr>
    <td>${cliente.id}</td>
    <td>${cliente.nombre}</td>
    <td>${cliente.apellido}</td>
    <td>${cliente.dni}</td>
    <td>${cliente.direccion}</td>
    <td>${cliente.ingreso}</td>
    
</tr>`
}

function recorrerProducto(){
    tbody.innerHTML = ""
    Clientes.forEach(cliente =>{
        tbody.innerHTML += armarHTML(cliente)
    })
}







