console.log("hola estoy detallando la compra")

//llamar a la memoria
let producto=JSON.parse(localStorage.getItem("producto"))
console.log(producto)

//pintamos el carrito 
let carrito
if(JSON.parse(localStorage.getItem("carrito"))!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"))
    let pildora=document.getElementById("pildora")
    pildora.textContent=carrito.length
}else{
    carrito=[]

}
let carritoMemoria=JSON.parse(localStorage.getItem("carrito"))
console.log(carritoMemoria);

let nombre=document.getElementById("nombreINFO")
nombre.textContent=producto.nombre

let precio=document.getElementById("precioINFO")
precio.textContent=producto.precio

let descripcion=document.getElementById("descripcionINFO")
descripcion.textContent=producto.descripcion

let foto=document.getElementById("imagenINFO")
foto.src=producto.foto

let pildora=document.getElementById("pildora")
console.log(pildora.textContent)


//escucho el clic en el boton añadir al carrito
let botonCarrito=document.getElementById("botonAgregarCarrito")
botonCarrito.addEventListener("click",function(evento){

    let cantidad=document.getElementById("cantidadProducto")
    cantidad=cantidad.value
    
    //agregamos la cantidad al objeto producto
    producto.cantidad=cantidad
    console.log(producto)

    //agregamos el producto al carrito de compras
    carrito.push(producto)
    console.log(carrito)

    //agregando el carrito a la memoria
    localStorage.setItem("carrito",JSON.stringify(carrito))

    //pintando la pildora con la cantidad de productos
    let cantidadCarrito=carrito.length
    pildora.textContent=cantidadCarrito

})