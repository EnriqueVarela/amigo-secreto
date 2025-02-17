let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre == ""){
        return alert("Nombre no valido");
    } else{
        amigos.push(nombre);
        limpiarCaja();
    }

    mostrarElementos();
    return;
}
    

function limpiarCaja(){
    let valorCaja = document.getElementById("amigo");
    valorCaja.value = "";
    return;
}

function mostrarElementos() {
    let contenedor = document.getElementById("listaAmigos"); 
    contenedor.innerHTML = ""; 
    
    let contenido = "";

    for( let i=0;i<amigos.length; i++){
        contenido += `<li>${amigos[i]}</li>`;
    }

    contenedor.innerHTML = contenido;
    return;
}

function sortearAmigo(){
    if (amigos == 0){
        return alert("No hay amigos para sortear");
    } else{
        let numeroSorteo = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[numeroSorteo];
        let contenedor = document.getElementById("resultado")
        contenedor.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
        limpiarPantalla();
        return;
    }
}

function limpiarPantalla() {
    contenido = document.getElementById("listaAmigos")
    contenido.innerHTML = "";
    return;
}
