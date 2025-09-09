// Cuando se envíe el formulario de registro...
document.getElementById("registerForm").addEventListener("submit", function(e) {
    // Evita que la página se recargue
    e.preventDefault();

    // Guardamos lo que el usuario escribió en los campos
    const email = document.getElementById("email").value.trim();
    const user = document.getElementById("user").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validamos el correo: debe tener "@" y "."
    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor ingresa un correo válido");
        return; // detenemos aquí
    }

    // Validamos el nombre: mínimo 3 letras
    if (user.length < 3) {
        alert("El nombre de usuario debe tener al menos 3 caracteres");
        return;
    }

    // Validamos la contraseña: mínimo 6 letras/números
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    // Si pasa todas las validaciones, guardamos los datos en el navegador
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", user);
    localStorage.setItem("userPassword", password);

    // Avisamos que todo salió bien
    alert("Registro exitoso");
    // Lo mandamos a la página de login
    window.location.href = "login.html"; 
});
