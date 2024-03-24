/*Modo claro/oscuro y cambio de aside*/
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
    // document.getElementById('imageUrlInput').value = "";
};
/*Color fondo imágen*/

let imageDiv = document.getElementById('imageDiv');
let colorFondoImagen = document.getElementById('colorFondoImagen');

colorFondoImagen.addEventListener('change', () =>{
    imageDiv.style.backgroundColor = colorFondoImagen.value;
});


/*Efecto fondo imágen*/


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

/*Input de entrada de texto*/
const textoSuperiorInput = document.getElementById('textoSuperiorInput');
const textoInferiorInput = document.getElementById('textoInferiorInput');
const textoSuperiorH2 = document.getElementById('textoSuperiorH2');
const textoInferiorH2 = document.getElementById('textoInferiorH2');

textoSuperiorInput.addEventListener('input', () => {
    textoSuperiorH2.textContent = textoSuperiorInput.value;
});

textoInferiorInput.addEventListener('input', () => {
    textoInferiorH2.textContent = textoInferiorInput.value;
});

/*Botones alinear texto*/
const botonAlinearIzquierda = document.getElementById('botonAlinearIzquierda');
const botonAlinearCentro = document.getElementById('botonAlinearCentro');
const botonAlinearDerecha = document.getElementById('botonAlinearDerecha');

const alinearTexto = (alinear) => {
    console.log(alinear.target);
    if (alinear.target.id === 'botonAlinearIzquierda'){
        textoSuperiorH2.style.textAlign = 'left';
        textoInferiorH2.style.textAlign = 'left';
    } else if (alinear.target.id === 'botonAlinearCentro'){
        textoSuperiorH2.style.textAlign = 'center';
        textoInferiorH2.style.textAlign = 'center';
    } else if (alinear.target.id === 'botonAlinearDerecha'){
        textoSuperiorH2.style.textAlign = 'right';
        textoInferiorH2.style.textAlign = 'right';
    }
}

botonAlinearIzquierda.addEventListener('click', alinearTexto);
botonAlinearCentro.addEventListener('click', alinearTexto);
botonAlinearDerecha.addEventListener('click', alinearTexto);