const botonImagen = document.getElementById('botonImagen');
const botonTexto = document.getElementById('botonTexto');
const botonModo = document.getElementById('botonModo');
let header = document.getElementById('miHeader');
let aside = document.getElementById('myAside');
let aside2 = document.getElementById('myAside2');

botonImagen.addEventListener("click", () => {
    aside.style.display = "block";
    aside2.style.display = "none";
});

botonTexto.addEventListener("click", () => {
    aside.style.display = "none";
    aside2.style.display = "block";
});

let modoClaroOscuro = "Modo claro";
botonModo.addEventListener("click", () => {
    if (modoClaroOscuro === "Modo oscuro"){
        document.body.style.backgroundColor = "rgb(193, 201, 207)";
        document.body.style.color = "black";
        header.style.backgroundColor = "rgb(222, 223, 225)";
        aside.style.backgroundColor = "rgb(171, 172, 174)";
        aside2.style.backgroundColor = "rgb(171, 172, 174)";
        botonModo.textContent = modoClaroOscuro;
        modoClaroOscuro = "Modo claro";
    } else if (modoClaroOscuro === "Modo claro") {
        document.body.style.backgroundColor = "rgb(48, 52, 63)";
        document.body.style.color = "rgb(252, 249, 249)";
        header.style.backgroundColor = "rgb(25, 30, 43)";
        aside.style.backgroundColor = "rgb(37, 41, 53)";
        aside2.style.backgroundColor = "rgb(37, 41, 53)";
        botonModo.textContent = modoClaroOscuro;
        modoClaroOscuro = "Modo oscuro";
    }
})