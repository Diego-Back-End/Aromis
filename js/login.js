// Cuando el usuario intente "enviar" el formulario de login
document.getElementById("loginForm").addEventListener("submit", function(e) {

    // Evitamos que la página se recargue sola
    e.preventDefault();

    // Guardamos lo que escribió el usuario en el email y la contraseña
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

     // Buscamos en el localStorage el email y la contraseña guardados antes (cuando se registró)
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

        // Si lo que escribió el usuario coincide con lo guardado
    if (email === storedEmail && password === storedPassword) {
        alert("Login exitoso");
        window.location.href = "perfil.html"; // Redirige al perfil
    } else {
        //si no coincide, mostramos un error
        alert(" Credenciales incorrectas");
    }
});
