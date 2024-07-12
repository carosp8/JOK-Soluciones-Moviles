let formulario = document.getElementById('formSesion');

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
            imageUrl: './img/logo/pesca-alargado-web.png',
            imageHeight: '50%'
          })
        e.preventDefault();
    }else {
        formulario.submit();
    }
})

let loguearse = () => {

    let usuario = document.getElementById('email1');
    let password = document.getElementById('password');

    if((usuario.value == "") && (password.value == "")){
        let parrafoUsuario = document.querySelector('.parrafo-usuario');
        parrafoUsuario.textContent = "El usuario es obligatorio para continuar."
    
        let parrafoPassword = document.querySelector('.parrafo-password');
        parrafoPassword.textContent = "La contraseña es obligatoria."
        
    }else{
    
    }
}
