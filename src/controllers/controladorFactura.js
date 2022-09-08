let carrito=JSON.parse(localStorage.getItem("carrito"))
let totalCompra=document.getElementById("totalCompra")


//
let factura=document.getElementById("factura")

let total = 0;

//compruebo el estadso del carrito de compras 
if(carrito==null){

    //poner el total en 0 
    totalCompra.textContent="total: $0"

    let fila=document.createElement("div")
    fila.classList.add("row","my-5","justify-content-center")

    let columna=document.createElement("div")
    columna.classList.add("col-12", "col-md-4")

    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src="../../assets/img/carritoVacio.png"

    let mensaje=document.createElement("h3")
    mensaje.classList.add("text-center")
    mensaje.textContent="tu carrito esta vacio, pobre asqueroso"

    

    columna.appendChild(imagen)
    columna.appendChild(mensaje)
    fila.appendChild(columna)
    factura.appendChild(fila)




}else{

    //recorro el carrito 
    carrito.forEach(function(producto){
    let fila=document.createElement("div")
    fila.classList.add("row","mt-5","justify-content-center","shadow", "p-3")

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","col-md-5")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12","col-md-3","border-end", "align-self-center")

    let columna3=document.createElement("div")
    columna3.textContent="subtotal"
    columna3.classList.add("col-12","col-md-3","align-self-center", "fs-1", "text-center")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100m")
    foto.src=producto.foto

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center","text-muted")
    nombre.textContent=producto.nombre

    let descripcion=document.createElement("p")
    descripcion.classList.add("text-center")
    descripcion.textContent=producto.descripcion

    let precio=document.createElement("h4")
    precio.classList.add("text-center")
    precio.textContent="costo unidad: " + producto.precio

    let cantidad=document.createElement("h3")
    cantidad.classList.add("text-center")
    cantidad.textContent="cantidad: " + producto.cantidad

    let subtotal=document.createElement("h2")
    subtotal.classList.add("fw-bold","text-center", "bg-dark", "text-white")
    console.log(producto.precio)
    console.log(producto.cantidad)
    console.log(producto.precio*producto.cantidad)
    
    let subtotalcalculado=producto.precio.split("$")[1]*producto.cantidad
    console.log(subtotalcalculado)
    subtotal.textContent="$"+subtotalcalculado 

    total=total + subtotalcalculado

    

    

    let botonLimpiarCarrito=document.getElementById("botonlimpiar")
    botonLimpiarCarrito.addEventListener("click",function(evento){
        
        //limpio el carrito de la memoria 
        localStorage.removeItem("carrito")

        //recargar la página
        window.location.href="./resumenCompra"

        //poner el total en 0 
        totalCompra.textContent="total: $0"
    })

    

    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    columna2.appendChild(cantidad)
    columna2.appendChild(precio)
    columna2.appendChild(descripcion)
    columna3.appendChild(subtotal)
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    fila.appendChild(columna3)
    factura.appendChild(fila)
        
    })
    
    console.log(total)
    totalCompra.textContent= "$" + total

}