document.getElementById('formMasterclass').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se recargue la página

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();

    // Variables para errores
    let nombreValido = true;
    let emailValido = true;

    // Validar nombre
    if (nombre === '') {
        document.getElementById('errorNombre').textContent = 'Este valor es requerido.';
        document.getElementById('errorNombre').style.display = 'block';
        nombreValido = false;
    } else {
        document.getElementById('errorNombre').style.display = 'none';
    }

    // Validar email
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        document.getElementById('errorEmail').textContent = 'Este valor debe ser un correo válido.';
        document.getElementById('errorEmail').style.display = 'block';
        emailValido = false;
    } else {
        document.getElementById('errorEmail').style.display = 'none';
    }

    // Redirigir si los datos son válidos
    if (nombreValido && emailValido) {
        window.location.href = 'https://www.efravergara.com/html/masterclassgratisvideos.html'; // Enlace a la siguiente página
    }
});
