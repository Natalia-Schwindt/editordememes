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
const opacidad = document.getElementById('opacidad');
const contraste = document.getElementById('contraste');
const desenfoque = document.getElementById('desenfoque');
const escalaDeGrises = document.getElementById('escalaDeGrises');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const saturado = document.getElementById('saturado');
const negativo = document.getElementById('negativo');

brillo.addEventListener('change', aplicarFiltros);
opacidad.addEventListener('change', aplicarFiltros);
contraste.addEventListener('change', aplicarFiltros);
desenfoque.addEventListener('change', aplicarFiltros);
escalaDeGrises.addEventListener('change', aplicarFiltros);
sepia.addEventListener('change', aplicarFiltros);
hue.addEventListener('change', aplicarFiltros);
saturado.addEventListener('change', aplicarFiltros);
negativo.addEventListener('change', aplicarFiltros);

function aplicarFiltros(){
    let filtroString ='';

    if (brillo.value !== '100'){
    filtroString += `brightness(${brillo.value}%) `;
}
if (opacidad.value !== '100'){
    filtroString += `opacity(${opacidad.value}%) `;
}
if (contraste.value !== '100'){
    filtroString += `contrast(${contraste.value}%) `;
}
if (desenfoque.value !== '0'){
    filtroString += `blur(${desenfoque.value}px) `;
}
if (escalaDeGrises.value !== '0'){
    filtroString += `grayscale(${escalaDeGrises.value}%) `;
}
if (sepia.value !== '0'){
    filtroString += `sepia(${sepia.value}%) `;
}
if (hue.value !== '0'){
    filtroString += `hue-rotate(${hue.value}deg) `;
}
if (saturado.value !== '100'){
    filtroString += `saturate(${saturado.value}%) `;
}
if (negativo.value !== '100'){
    filtroString += `invert(${negativo.value}%) `;
}
    imageDiv.style.filter = filtroString.trim();
}

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

/*checkbox superior e inferior*/
const sinTextoSuperior = document.getElementById('sinTextoSuperior');
const sinTextoInferior = document.getElementById('sinTextoInferior');

sinTextoSuperior.addEventListener('click', () => {
    if (sinTextoSuperior.checked){
        textoSuperiorH2.style.display = "none";
    } else {
        textoSuperiorH2.style.display = "block";
    }
});

sinTextoInferior.addEventListener('click', () => {
    if (sinTextoInferior.checked){
        textoInferiorH2.style.display = "none";
    } else {
        textoInferiorH2.style.display = "block";
    }
});

/*checkbox fonfo transparente*/
const fondoTransparente = document.getElementById('fondoTransparente');
const fondo = document.getElementById('fondo');

fondoTransparente.addEventListener('click', () => {
    if (fondoTransparente.checked){
        fondo.style.backgroundColor = "rgba(255,255,255,0)";
    } else {
        fondo.style.backgroundColor = "rgb(255, 255, 255)";
    }
});

/*Botones alinear texto*/
const botonAlinearIzquierda = document.getElementById('botonAlinearIzquierda');
const botonAlinearCentro = document.getElementById('botonAlinearCentro');
const botonAlinearDerecha = document.getElementById('botonAlinearDerecha');

const alinearTexto = (alinear) => {
    if (alinear.target.id === 'botonAlinearIzquierda'){
        fondo.style.alignItems = 'start';
        fondo.style.alignItems = 'start';
    } else if (alinear.target.id === 'botonAlinearCentro'){
        fondo.style.alignItems = 'center';
        fondo.style.alignItems = 'center';
    } else if (alinear.target.id === 'botonAlinearDerecha'){
        fondo.style.alignItems = 'end';
        fondo.style.alignItems = 'end';
    }
}

botonAlinearIzquierda.addEventListener('click', (event)=>alinearTexto(event));
botonAlinearCentro.addEventListener('click', (event)=>alinearTexto(event));
botonAlinearDerecha.addEventListener('click', (event)=>alinearTexto(event));

/*Menú cambiar fuente*/
const menuFuente = document.getElementById('fuente');
const arial = document.getElementById('arial');
const arialblack = document.getElementById('arialblack');
const americantypewriter = document.getElementById('americantypewriter');
const andalemono = document.getElementById('andalemono');
const comicsanMs = document.getElementById('comicsansMs');
const helvetica = document.getElementById('helvetica');
const impact = document.getElementById('impact');
const verdana = document.getElementById('verdana');
const timesnewroman = document.getElementById('timesnewroman');

menuFuente.addEventListener('change', () => {
    cambiarFuente(menuFuente);
});

const cambiarFuente = (menuFuente) => {
    if (menuFuente.value === 'arial'){
        textoSuperiorH2.style.fontFamily = 'arial';
        textoInferiorH2.style.fontFamily = 'arial';
    }
    if (menuFuente.value === 'arialblack'){
        textoSuperiorH2.style.fontFamily = 'arial black';
        textoInferiorH2.style.fontFamily = 'arial black';
    }
    if (menuFuente.value === 'americantypewriter'){
        textoSuperiorH2.style.fontFamily = 'american typewriter';
        textoInferiorH2.style.fontFamily = 'american typewriter';
    }
    if (menuFuente.value === 'andalemono'){
        textoSuperiorH2.style.fontFamily = 'andale mono';
        textoInferiorH2.style.fontFamily = 'andale mono';
    }
    if (menuFuente.value === 'comicsansMs'){
        textoSuperiorH2.style.fontFamily = 'comic sans Ms';
        textoInferiorH2.style.fontFamily = 'comic sans Ms';
    }
    if (menuFuente.value === 'helvetica'){
        textoSuperiorH2.style.fontFamily = 'helvetica';
        textoInferiorH2.style.fontFamily = 'helvetica';
    }
    if (menuFuente.value === 'impact'){
        textoSuperiorH2.style.fontFamily = 'impact';
        textoInferiorH2.style.fontFamily = 'impact';
    }
    if (menuFuente.value === 'verdana'){
        textoSuperiorH2.style.fontFamily = 'verdana';
        textoInferiorH2.style.fontFamily = 'verdana';
    }
    if (menuFuente.value === 'timesnewroman'){
        textoSuperiorH2.style.fontFamily = 'times new roman';
        textoInferiorH2.style.fontFamily = 'times new roman';
    }
}

/*Cambiar tamaño de fuente*/
const tamanioFuente = document.getElementById('tamanioFuente');

tamanioFuente.addEventListener('change', () =>{
    textoSuperiorH2.style.fontSize = tamanioFuente.value + 'px';
    textoInferiorH2.style.fontSize = tamanioFuente.value + 'px';
});

/*Menú cambiar color fondo imágen*/
const efectoFondoImagen = document.getElementById('efectoFondoImagen');
const ninguno = document.getElementById('ninguno');
const aclarar = document.getElementById('aclarar');
const oscurecer = document.getElementById('ocurecer');
const diferencia = document.getElementById('diferencia');
const luminosidad = document.getElementById('luminosidad');
const multiplicar = document.getElementById('multiplicar');

efectoFondoImagen.addEventListener('change', () => {
    modificarColor(efectoFondoImagen);
});

const modificarColor = (efectoFondoImagen) => {
    if (efectoFondoImagen.value === 'ninguno'){
        imageDiv.style.backgroundBlendMode = 'normal';
    }
    if (efectoFondoImagen.value === 'aclarar'){
        imageDiv.style.backgroundBlendMode = 'lighten';
    }
    if (efectoFondoImagen.value === 'ocurecer'){
        imageDiv.style.backgroundBlendMode = 'darken';
    }
    if (efectoFondoImagen.value === 'diferencia'){
        imageDiv.style.backgroundBlendMode = 'difference';
    }
    if (efectoFondoImagen.value === 'luminosidad'){
        imageDiv.style.backgroundBlendMode = 'luminosity';
    }
    if (efectoFondoImagen.value === 'multiplicar'){
        imageDiv.style.backgroundBlendMode = 'multiply';
    }
}

/*Menú desplegable interliniado*/
const interliniado = document.getElementById('interliniado');
const ceroPuntoOcho = document.getElementById('ceroPuntoOcho');
const uno = document.getElementById('uno');
const unoPuntoDos = document.getElementById('unoPuntoDos');
const unoPuntoCinco = document.getElementById('unoPuntoCinco');
const dos = document.getElementById('dos');
const dosPuntoCinco = document.getElementById('dosPuntoCinco');

interliniado.addEventListener('change', () => {
    cambiarInterliniado(interliniado);
});

const cambiarInterliniado = (interliniado) => {
    if (interliniado.value === 'ceroPuntoOcho'){
        textoSuperiorH2.style.lineHeight  = '0.8';
        textoInferiorH2.style.lineHeight  = '0.8';
    }
    if (interliniado.value === 'uno'){
        textoSuperiorH2.style.lineHeight  = '1';
        textoInferiorH2.style.lineHeight  = '1';
    }
    if (interliniado.value === 'unoPuntoDos'){
        textoSuperiorH2.style.lineHeight  = '1.2';
        textoInferiorH2.style.lineHeight  = '1.2';
    }
    if (interliniado.value === 'unoPuntoCinco'){
        textoSuperiorH2.style.lineHeight  = '1.5';
        textoInferiorH2.style.lineHeight  = '1.5';
    }
    if (interliniado.value === 'dos'){
        textoSuperiorH2.style.lineHeight  = '2';
        textoInferiorH2.style.lineHeight  = '2';
    }
    if (interliniado.value === 'dosPuntoCinco'){
        textoSuperiorH2.style.lineHeight  = '2.5';
        textoInferiorH2.style.lineHeight  = '2.5';
    }
}