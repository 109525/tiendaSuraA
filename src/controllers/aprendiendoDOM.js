//PASOS PARA CONTROLAR UNA ETIQUETA DESDE JS

//1. CONTROLANDO EL CONTENIDO
let etiquetaTitulo=document.getElementById("titulo")
let etiquetaImagen=document.getElementById("foto")


//1.1 MANIPULANDO EL TEXTO DE LA ETIQUETA(ELEMENTO)
etiquetaTitulo.textContent="jefe usted es como mi padre"

//1.2 MANIPULANDO EL SRC
etiquetaImagen.src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/gohan1.webp?alt=media&token=ce45c3f8-146b-41c9-81cc-08441e6ed6b4"

//2. CONTROLANDO EL DISEÑO
let parrafo=document.getElementById("parrafo")
parrafo.textContent="jasdkljsadjklhdasjklasdjkladskjldsa"

//2.1 AGREGANDO UN ESTILO (CLASS)
//text-danger
parrafo.classList.add("text-danger","fs-1","text-center")
etiquetaImagen.classList.add("d-block","mx-auto")

//2.2 QUITAR UN ESTILO ()
parrafo.classList.remove("text-danger")
