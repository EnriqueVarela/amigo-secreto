// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarTextoElemento(elemento,texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    console.log(nombre);
    console.log(nombre == "");
    if (nombre == ""){
        return alert("numero no valido");
    } else{
        amigos.push(nombre);
        console.log(amigos);
        agregarTextoElemento("listaAmigos", `${amigos}`);
        limpiarCaja();
    }
    }
    


function limpiarCaja(){
    agregarTextoElemento("amigo", "");
}

agregarAmigo();
