// Armazenando uma funcão em uma variavel
const imprimirSoma = function(a, b) {
    console.log(a + b);
} 

imprimirSoma(10, 5);

const soma = function(a, b) {
    return a + b;
}

console.log(soma(5, 10));

// Armazenando uma funcao arrow em uma variavel
const sub = (a, b) => {
    return a + b;
}

console.log(sub(8, 7));

// Retorno implícito
const sb = (a, b) => a - b;
console.log(sb(8, 7));

const imprimir2 = a => console.log('Legal');

imprimir2();