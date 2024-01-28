// Funcão sem retorno.
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(8, 9);
imprimirSoma(5);

// Função com retorno
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 8));