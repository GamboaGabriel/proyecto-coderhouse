const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const botonToggle = document.getElementById("boton-toggle");
const enlaceRegistro = document.getElementById("enlace-registro");
const registroFormulario = document.getElementById("registro-formulario");
const inicioSesionFormulario = document.getElementById("inicio-sesion-formulario");

botonToggle.addEventListener("click", () => {
    if (registroFormulario.style.display === "block") {
        registroFormulario.style.display = "none";
        inicioSesionFormulario.style.display = "block";
    } else {
        registroFormulario.style.display = "block";
        inicioSesionFormulario.style.display = "none";
    }
});

enlaceRegistro.addEventListener("click", () => {
    registroFormulario.style.display = "block";
    inicioSesionFormulario.style.display = "none";
});

