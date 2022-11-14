
const btCliente = document.querySelector('.buscar')
btCliente.addEventListener('click',(e) =>{
    buscarCliente()
} )

function buscarCliente() {
    let buscar = prompt("Ingresa el Apellido del Cliente:")

    let resultado = Clientes.find(elemento => elemento.apellido.includes(buscar))
       resultado===undefined ? console.log ("No se encontro Usuario"): console.log (resultado) 
}

function quitarCliente() {
    
    let clienteAquitar = prompt("Ingresa el Cliente a quitar de la lista:")
    debugger
      let posicion = Clientes.indexOf(clienteAquitar)
      if (posicion > -1 ){
         let clienteQuitado =Clientes.splice(posicion, 1)
         console.log(clienteQuitado)
           
      }
    
        }    


