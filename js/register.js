document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const user = document.getElementById("user").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor ingresa un correo válido");
        return;
    }

    if (user.length < 3) {
        alert("El nombre de usuario debe tener al menos 3 caracteres");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    // Guardar en LocalStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", user);
    localStorage.setItem("userPassword", password);

    alert("Registro exitoso");
    window.location.href = "login.html"; // redirige al login
});
