//Variables de objetos capturados
const botonImagen = document.getElementById('botonImagen');
const botonTexto = document.getElementById('botonTexto');
const aside = document.getElementById('myAside');
const aside2 = document.getElementById('myAside2');
const botonModo = document.getElementById('botonModo');
const header = document.getElementById('miHeader');
const icono = document.getElementById('icono');
const imageDiv = document.getElementById('imageDiv');
const colorFondoImagen = document.getElementById('colorFondoImagen');
const efectoFondoImagen = document.getElementById('efectoFondoImagen');
const ninguno = document.getElementById('ninguno');
const aclarar = document.getElementById('aclarar');
const oscurecer = document.getElementById('ocurecer');
const diferencia = document.getElementById('diferencia');
const luminosidad = document.getElementById('luminosidad');
const multiplicar = document.getElementById('multiplicar');
const brillo = document.getElementById('brillo');
const opacidad = document.getElementById('opacidad');
const contraste = document.getElementById('contraste');
const desenfoque = document.getElementById('desenfoque');
const escalaDeGrises = document.getElementById('escalaDeGrises');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const saturado = document.getElementById('saturado');
const negativo = document.getElementById('negativo');
const botonRestablecerFiltros = document.getElementById('botonRestablecerFiltros');
const textoSuperiorInput = document.getElementById('textoSuperiorInput');
const textoInferiorInput = document.getElementById('textoInferiorInput');
const textoSuperiorH2 = document.getElementById('textoSuperiorH2');
const textoInferiorH2 = document.getElementById('textoInferiorH2');
const sinTextoSuperior = document.getElementById('sinTextoSuperior');
const sinTextoInferior = document.getElementById('sinTextoInferior');
const colorTexto = document.getElementById('colorTexto');
const colorFondoTexto = document.getElementById('colorFondoTexto');
const fondoTransparente = document.getElementById('fondoTransparente');
const fondo = document.getElementById('fondo');
const botonAlinearIzquierda = document.getElementById('botonAlinearIzquierda');
const botonAlinearCentro = document.getElementById('botonAlinearCentro');
const botonAlinearDerecha = document.getElementById('botonAlinearDerecha');
const menuFuente = document.getElementById('fuente');
const arial = document.getElementById('arial');
const arialBlack = document.getElementById('arialBlack');
const americanTypewriter = document.getElementById('americanTypewriter');
const andaleMono = document.getElementById('andaleMono');
const comicSanMs = document.getElementById('comicSansMs');
const helvetica = document.getElementById('helvetica');
const impact = document.getElementById('impact');
const verdana = document.getElementById('verdana');
const timesNewRoman = document.getElementById('timesNewRoman');
const tamanioFuente = document.getElementById('tamanioFuente');
const botonContornoNinguno = document. getElementById('ninguno');
const botonContornoClaro = document.getElementById('claro');
const botonContornoOscuro = document.getElementById('oscuro');
const espaciado = document.getElementById('espaciado');
const interliniado = document.getElementById('interliniado');
const ceroPuntoOcho = document.getElementById('ceroPuntoOcho');
const uno = document.getElementById('uno');
const unoPuntoDos = document.getElementById('unoPuntoDos');
const unoPuntoCinco = document.getElementById('unoPuntoCinco');
const dos = document.getElementById('dos');
const dosPuntoCinco = document.getElementById('dosPuntoCinco');

 /*cambio de aside Imágen y texto*/
botonTexto.addEventListener("click", () => {
    aside.style.display = "none";
    aside2.style.display = "block";
});

botonImagen.addEventListener("click", () => {
    aside.style.display = "block";
    aside2.style.display = "none";
});

/*Modo claro/oscuro*/
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
        textoSuperiorH2.style.color = "black"
        textoInferiorH2.style.color = "black"
        icono.textContent = modoClaroOscuro;
        modoClaroOscuro = "Modo oscuro";
    }
});

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
colorFondoImagen.addEventListener('change', () =>{
    imageDiv.style.backgroundColor = colorFondoImagen.value;
});

/*Menú combinar color de fondo e imágen*/
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
    if (efectoFondoImagen.value === 'oscurecer'){
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
};

/*Efectos de filtros de la imágen*/
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

    if (brillo.value !== '1'){
        filtroString += `brightness(${brillo.value}) `;
}
    if (opacidad.value !== '1'){
        filtroString += `opacity(${opacidad.value}) `;
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
    if (negativo.value !== '0'){
        filtroString += `invert(${negativo.value})`;
}
    imageDiv.style.filter = filtroString.trim();
};

/*Botón restablecer filtros*/
botonRestablecerFiltros.addEventListener('click', ()=> {

    brillo.value = '1';
    opacidad.value = '1';
    contraste.value = '100';
    desenfoque.value = '0';
    escalaDeGrises.value = '0';
    sepia.value = '0';
    hue.value = '0';
    saturado.value = '100';
    negativo.value = '0';
    aplicarFiltros();
});

/*Menú texto*/
/*Input de entrada de texto superior e inferior*/
textoSuperiorInput.addEventListener('input', () => {
    textoSuperiorH2.textContent = textoSuperiorInput.value;
});

textoInferiorInput.addEventListener('input', () => {
    textoInferiorH2.textContent = textoInferiorInput.value;
});

/*checkbox superior e inferior*/
sinTextoSuperior.addEventListener('click', () => {
    if (sinTextoSuperior.checked){
        textoSuperiorH2.style.visibility = "hidden";
    } else {
        textoSuperiorH2.style.visibility = "visible";
    }
});

sinTextoInferior.addEventListener('click', () => {
    if (sinTextoInferior.checked){
        textoInferiorH2.style.visibility = "hidden";
    } else {
        textoInferiorH2.style.visibility = "visible";
    }
});

/*Menú cambiar fuente*/
menuFuente.addEventListener('change', () => {
    cambiarFuente(menuFuente);
});

const cambiarFuente = (menuFuente) => {
    if (menuFuente.value === 'arial'){
        textoSuperiorH2.style.fontFamily = 'arial';
        textoInferiorH2.style.fontFamily = 'arial';
    }
    if (menuFuente.value === 'arialBlack'){
        textoSuperiorH2.style.fontFamily = 'arial black';
        textoInferiorH2.style.fontFamily = 'arial black';
    }
    if (menuFuente.value === 'americanTypewriter'){
        textoSuperiorH2.style.fontFamily = 'american typewriter';
        textoInferiorH2.style.fontFamily = 'american typewriter';
    }
    if (menuFuente.value === 'andaleMono'){
        textoSuperiorH2.style.fontFamily = "'Andale Mono', monospace";
        textoInferiorH2.style.fontFamily = "'Andale Mono', monospace";
    }
    if (menuFuente.value === 'comicSansMs'){
        textoSuperiorH2.style.fontFamily = 'comic sans ms';
        textoInfergiiorH2.style.fontFamily = 'comic sans ms';
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
    if (menuFuente.value === 'timesNewRoman'){
        textoSuperiorH2.style.fontFamily = 'times new roman';
        textoInferiorH2.style.fontFamily = 'times new roman';
    }
}

/*Cambiar tamaño de fuente*/
tamanioFuente.addEventListener('change', () =>{
    textoSuperiorH2.style.fontSize = tamanioFuente.value + 'px';
    textoInferiorH2.style.fontSize = tamanioFuente.value + 'px';
});

/*Botones alinear texto*/
botonAlinearIzquierda.addEventListener('click', () => {
    textoSuperiorH2.style.alignItems = 'start';
    textoInferiorH2.style.alignItems = 'start';
});

botonAlinearCentro.addEventListener('click', () => {
    textoSuperiorH2.style.alignItems = 'center';
    textoInferiorH2.style.alignItems = 'center';
});

botonAlinearDerecha.addEventListener('click', () => {
    textoSuperiorH2.style.alignItems = 'end';
    textoInferiorH2.style.alignItems = 'end';
});

/*cambiar color del texto*/
colorTexto.addEventListener('change', () => {
    textoSuperiorH2.style.color = colorTexto.value;
    textoInferiorH2.style.color = colorTexto.value;
})

/*cambiar color del fondo texto*/
colorFondoTexto.addEventListener('change', () => {
    textoSuperiorH2.style.backgroundColor = colorFondoTexto.value;
    textoInferiorH2.style.backgroundColor = colorFondoTexto.value;
    colorFondoOriginal = colorFondoTexto.value;
})

/*checkbox fondo transparente*/
fondoTransparente.addEventListener('click', () => {
    if (fondoTransparente.checked){
        fondo.style.backgroundColor = "transparent";
        textoSuperiorH2.style.backgroundColor = "transparent";
        textoInferiorH2.style.backgroundColor = "transparent";
    } else {
        fondo.style.backgroundColor = 'white';
        textoSuperiorH2.style.backgroundColor = colorFondoOriginal;
        textoInferiorH2.style.backgroundColor = colorFondoOriginal;
    }
});

/*Menú texto contorno*/
botonContornoNinguno.addEventListener('click', () => {
    textoSuperiorH2.style.textShadow = 'none';
    textoInferiorH2.style.textShadow = 'none';
});

botonContornoClaro.addEventListener('click', () => {
    textoSuperiorH2.style.textShadow = '1px 1px 2px rgba(0,0,0,0.5)';
    textoInferiorH2.style.textShadow = '1px 1px 2px rgba(0,0,0,0.5)';
});

botonContornoOscuro.addEventListener('click', () => {
    textoSuperiorH2.style.textShadow = '1px 1px 2px rgba(0,0,0,1)';
    textoInferiorH2.style.textShadow = '1px 1px 2px rgba(0,0,0,1)';
});

/*Menú texto espaciado*/
espaciado.addEventListener('change', () => {
    textoSuperiorH2.style.letterSpacing = espaciado.value + 'px';
    textoInferiorH2.style.letterSpacing = espaciado.value + 'px';
});

/*Menú texto interliniado*/
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

/*Botón descargar meme*/
btnDownload.addEventListener('click', () => {
    new Promise((resolve, reject) => {
        html2canvas(document.getElementById('fondo'), {
            useCORS: true,
            onrendered: canvas => {
                resolve(canvas);
            },
            width: window.innerWidth,
            height: window.innerHeight
        });
    }).then(canvas => {
        var a = document.createElement('a');
        a.download = 'captured.png';
        a.href = canvas.toDataURL('image/png');
        a.click();
    });
});