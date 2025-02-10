// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para actualizar el contenido de un elemento en el DOM
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para añadir un nombre a la lista de amigos
function adicionarnombre() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios adicionales

    // Verifica si el campo de entrada está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre al array
    input.value = ""; // Limpia el campo de entrada

    actualizarListaAmigos(); // Actualiza la lista visible en la página
    return;
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista actual

    // Recorre el array de amigos y crea elementos <li> para cada uno
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });

    return;
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpia el resultado previo

    // Verifica si la lista de amigos está vacía
    if (amigos.length === 0) {
        asignarTextoElemento('#resultado', 'No hay amigos en la lista para sortear.');
        return;
    }

    // Genera un índice aleatorio para seleccionar un amigo
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Muestra el amigo sorteado en el DOM
    asignarTextoElemento('#resultado', `Amigo sorteado: ${amigoSorteado}`);
    return;
}
