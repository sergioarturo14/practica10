function contarLetras() {
    // Obtenemos el valor del input de texto
    var texto = document.getElementById("texto").value;

    // Convertimos el texto a minúsculas
    texto = texto.toLowerCase();

    // Creamos un objeto para almacenar la cantidad de veces que se repite cada letra
    var contador = {};

    // Recorremos el texto letra por letra
    for (var i = 0; i < texto.length; i++) {
        var letra = texto.charAt(i);

        // Si la letra es una letra del alfabeto, la agregamos al contador
        if (/[a-z]/.test(letra)) {
            if (contador[letra]) {
                contador[letra]++;
            } else {
                contador[letra] = 1;
            }
        }
    }

    // Mostramos el resultado en la página
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    for (var letra in contador) {
        resultadoDiv.innerHTML += letra + ": " + contador[letra] + "<br>";
    }
}