let productos=[

    {
        nombre:"bati-silla",
        precio:55000,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/proyectobatman-96cd0.appspot.com/o/sillabatman.webp?alt=media&token=33acfc08-5c59-4300-a34f-1425038a2b85','https://firebasestorage.googleapis.com/v0/b/proyectobatman-96cd0.appspot.com/o/sillabatman2.webp?alt=media&token=2efba4e3-8f08-4d41-9c79-9103030d7e81'],
        descripcion:'Kami era el antiguo guardián namekiano de la Tierra que ahora busca ayudar a Goku en la lucha contra los atacantes de la Tierra. ¡Trae papá! Kami en tu colección Dragon Ball Z para reunir al sabio con el Dragon Team.'
    },
    {
        nombre:"bati-buzo",
        precio:70800,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/proyectobatman-96cd0.appspot.com/o/buzo-batman.webp?alt=media&token=94427210-5386-4ec1-8471-d526aa4df155','https://firebasestorage.googleapis.com/v0/b/proyectobatman-96cd0.appspot.com/o/buzo-batman1.webp?alt=media&token=c1ccd021-629d-4c54-9b4b-bbbbf5a347de'],
        descripcion:'¡Funko POP de la primera forma de Frieza de Dragon Ball Z! la figura tiene un tamaño de aprox. 9cm Visualmente, el artículo para fanáticos de Dragon Ball corresponde a la plantilla del anime y el manga en cada detalle, con un traje de batalla morado y blanco y una pose guerrera. Tu figura coleccionable de Frieza viene en una hermosa caja de regalo con una ventana de visualización.'

    },
    {

        nombre:"bati-muñecos",
        precio:54900,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/proyectobatman-96cd0.appspot.com/o/mu%C3%B1ecobatman.webp?alt=media&token=9291c369-50cf-4c8e-a19b-9484f32e0902','https://firebasestorage.googleapis.com/v0/b/proyectobatman-96cd0.appspot.com/o/mu%C3%B1ecobatmanprimero.webp?alt=media&token=0226e98a-8a7f-45f4-93d2-59d9c6467f63'],
        descripcion:'El hijo mayor de Goku, Gohan, se une a su padre en la lucha para defender la Tierra de los atacantes y la destrucción. ¡Construye el Dragon Team para tu colección Dragon Ball Z con este Pop! Super Saiyan Gohan comiendo fideos. Todo ese trabajo duro conduce a un gran apetito. La figura de vinilo mide aproximadamente 9.5 centímetros de alto.'
    },
    {
        nombre:"bati-camiseta",
        precio:63900,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/proyectobatman-96cd0.appspot.com/o/camisetabatman.webp?alt=media&token=dc2f3a31-99cd-4640-8722-b6564729081a','https://firebasestorage.googleapis.com/v0/b/proyectobatman-96cd0.appspot.com/o/camisetabatman2.webp?alt=media&token=073de6c2-b653-428a-91c8-7ad19aabc105'],
        descripcion:'the mos stylsih t-shirt, just if you enjoy comics'
    },
    {
        nombre:"bati-gorra",
        precio:35900,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/proyectobatman-96cd0.appspot.com/o/gorra.webp?alt=media&token=f24f91b6-97a2-4025-b658-10f90bbe83cf','https://firebasestorage.googleapis.com/v0/b/proyectobatman-96cd0.appspot.com/o/gorra2.webp?alt=media&token=8206fcbd-5103-4079-a050-d99690625b01'],
        descripcion:'this amazing product is really usefull on sunydays, when you need some shadow' 
    },
    {
        nombre:"bati-movil",
        precio:900000,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/proyectobatman-96cd0.appspot.com/o/bati-movil.webp?alt=media&token=69f96370-64de-4d33-b8da-f6ec2911b29b','https://firebasestorage.googleapis.com/v0/b/proyectobatman-96cd0.appspot.com/o/bati-movil2.webp?alt=media&token=4c57cce9-1043-465e-be89-2be7c4673d47'],
        descripcion:'the most confortable chair you can have, you can use it even when you wanna sleep' 
    }

]




let fila=document.getElementById("fila")

//RECORRIENDO EL ARREGLO
productos.forEach(function(producto){
    
    //creando un div desde JS
    let columna=document.createElement("div")
    columna.classList.add("col", "mt-25")

    //creando una tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow","text-center","h-100","p-5")

    //creando una IMAGEN
    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src=producto.fotos[0]

    //DETECTANDO EVENTO DE MOUSE
    imagen.addEventListener("mouseover",function(){
        imagen.src=producto.fotos[1]
    })
    imagen.addEventListener("mouseleave",function(){
        imagen.src=producto.fotos[0]
    })


    //crear el nombre
    let nombre=document.createElement("h3")
    nombre.classList.add("fw-bold")
    nombre.textContent=producto.nombre

    //crear el precio
    let precio=document.createElement("h2")
    precio.textContent="$"+producto.precio

    //creando la descripcion
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-danger","d-none")
    descripcion.textContent=producto.descripcion

    //definiendo padres e hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})