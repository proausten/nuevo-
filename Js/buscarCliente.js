
const btCliente = document.querySelector('.buscar')
btCliente.addEventListener('click',(e) =>{
    buscarCliente()
} )

function buscarCliente() {
    let buscar = prompt("Ingresa el Apellido del Cliente:")
    //debugger
    //let resultado = productos.find(elemento => elemento.nombre === buscar)
    let resultado = Clientes.find(elemento => elemento.apellido.includes(buscar))
        if (resultado === undefined) {
            console.warn("No se encontró el cliente")
        } else {
            console.log(resultado)
        }
}

function quitarCliente() {
    
    let clienteAquitar = prompt("Ingresa el Cliente a quitar de la lista:")
      let posicion = cliente.indexOf(clienteAquitar)
      console.log(posicion)
        }    
