document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");

    // Si no hay sesión → manda al login
    if (!userName || !userEmail) {
        alert("Debes iniciar sesión primero");
        window.location.href = "login.html";
        return;
    }

    // Mostrar datos en el perfil
    document.getElementById("profileName").textContent = userName;
    document.getElementById("profileEmail").textContent = userEmail;
    document.getElementById("infoName").textContent = userName;
});
