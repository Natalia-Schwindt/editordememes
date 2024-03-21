/*Modo claro/oscuro y aside*/
const botonImagen = document.getElementById('botonImagen');
const botonTexto = document.getElementById('botonTexto');
const botonModo = document.getElementById('botonModo');
let header = document.getElementById('miHeader');
let aside = document.getElementById('myAside');
let aside2 = document.getElementById('myAside2');

botonTexto.addEventListener("click", () => {
    aside.style.display = "none";
    aside2.style.display = "block";
});

botonImagen.addEventListener("click", () => {
    aside.style.display = "block";
    aside2.style.display = "none";
});
let icono = document.getElementById('icono');

let modoClaroOscuro = "Modo claro";
botonModo.addEventListener("click", () => {
    if (modoClaroOscuro === "Modo oscuro"){
        document.body.style.backgroundColor = "rgb(193, 201, 207)";
        document.body.style.color = "black";
        header.style.backgroundColor = "rgb(222, 223, 225)";
        aside.style.backgroundColor = "rgb(171, 172, 174)";
        aside2.style.backgroundColor = "rgb(171, 172, 174)";
        icono.textContent = modoClaroOscuro;
        modoClaroOscuro = "Modo claro";
    } else if (modoClaroOscuro === "Modo claro") {
        document.body.style.backgroundColor = "rgb(48, 52, 63)";
        document.body.style.color = "rgb(252, 249, 249)";
        header.style.backgroundColor = "rgb(25, 30, 43)";
        aside.style.backgroundColor = "rgb(37, 41, 53)";
        aside2.style.backgroundColor = "rgb(37, 41, 53)";
        icono.textContent = modoClaroOscuro;
        modoClaroOscuro = "Modo oscuro";
    }
})

/*Menú imágen*/

/*Agregar imágen con Url*/
document.getElementById('imageUrlInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        cargarImagen();
    }
});

function cargarImagen() {
    let imageUrl = document.getElementById('imageUrlInput').value;
    let imageDiv = document.getElementById('imageDiv');
    imageDiv.style.backgroundImage = "url('" + imageUrl + "')";
    document.getElementById('imageUrlInput').value = "";
}

/*Input Rango*/

/*Brillo*/
const brillo = document.getElementById('brillo');

brillo.addEventListener('change', function (event){
    let imageDiv = document.getElementById('imageDiv');
    imageDiv.style.filter=`brightness(${event.target.value}%)`
});

/*Opacidad*/
const opacidad = document.getElementById('opacidad');

opacidad.addEventListener('change', function (event){
    let imageDiv = document.getElementById('imageDiv');
    imageDiv.style.filter=`opacity(${event.target.value}%)`
});

/*Contraste*/
const contraste = document.getElementById('contraste');

contraste.addEventListener('change', function (event){
    let imageDiv = document.getElementById('imageDiv');
    imageDiv.style.filter=`contrast(${event.target.value}%)`
});

/*Desenfoque*/
const desenfoque = document.getElementById('desenfoque');

desenfoque.addEventListener('change', function (event){
    let imageDiv = document.getElementById('imageDiv');
    imageDiv.style.filter=`blur(${event.target.value}px)`
});

/*Escala De Grises*/
const escalaDeGrises = document.getElementById('escalaDeGrises');

escalaDeGrises.addEventListener('change', function (event){
    let imageDiv = document.getElementById('imageDiv');
    imageDiv.style.filter=`grayscale(${event.target.value}%)`
});

/*Sepia*/
const sepia = document.getElementById('sepia');

sepia.addEventListener('change', function (event){
    let imageDiv = document.getElementById('imageDiv');
    imageDiv.style.filter=`sepia(${event.target.value}%)`
});

/*HUE*/
const hue = document.getElementById('hue');

hue.addEventListener('change', function (event){
    let imageDiv = document.getElementById('imageDiv');
    imageDiv.style.filter=`hue-rotate(${event.target.value}deg)`
});

/*Saturado*/
const saturado = document.getElementById('saturado');

saturado.addEventListener('change', function (event){
    let imageDiv = document.getElementById('imageDiv');
    imageDiv.style.filter=`saturate(${event.target.value}%)`
});

/*Negativo*/
const negativo = document.getElementById('negativo');

negativo.addEventListener('change', function (event){
    let imageDiv = document.getElementById('imageDiv');
    imageDiv.style.filter=`invert(${event.target.value}%)`
});

/*Menú texto*/

