let formulario = document.getElementById('form');

console.log(formulario);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!loguearse()){
        Swal.fire({
            title: 'Formulario Vacio',
            text: 'vamos de nuevo',
            icon: 'error',
            confirmButtonText: 'OK',
            background: '#F3F4F5e8',
            grow: 'row',
            imageUrl: '../img/logo/jokmoviles.png',
            imageHeight: '50%'
          })
        e.preventDefault();
    }else {
        formulario.submit();
    }
})

let loguearse = () => {

    let usuario = document.getElementById('email');
    let password = document.getElementById('password');

    if((usuario.value == "") && (password.value == "")){
        let parrafoUsuario = document.querySelector('.parrafo-usuario');
        parrafoUsuario.textContent = "El usuario es obligatorio para continuar."
    
        let parrafoPassword = document.querySelector('.parrafo-password');
        parrafoPassword.textContent = "La contraseña es obligatoria."
        
    }else{
    
    }
}