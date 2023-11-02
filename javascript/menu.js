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

const enlaceIniciarSesion = document.getElementById("enlace-iniciar-sesion");
const enlaceRegistro = document.getElementById("enlace-registro");
const registroFormulario = document.getElementById("registro-formulario");
const inicioSesionFormulario = document.getElementById("inicio-sesion-formulario");

enlaceIniciarSesion.addEventListener("click", () => {
    registroFormulario.style.display = "none";
    inicioSesionFormulario.style.display = "block";
});

enlaceRegistro.addEventListener("click", () => {
    registroFormulario.style.display = "block";
    inicioSesionFormulario.style.display = "none";
});