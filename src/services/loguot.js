import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"


let botonSalir=document.getElementById("botonSalir")

botonSalir.addEventListener("click",function(evento){

    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Gracias, hasta pronto',
    showConfirmButton: false,
    timer: 1500
  })
  window.location.href="./index.html"
}).catch((error) => {
  // An error happened.
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
});
})

