const a = 7;
let b = 3;

b += a; // b = b + a
console.log(b);

b -= 4; // b = b - 4
console.log(b);

b *= 2; // b = b * 2
console.log(b);

b /= 2; // b = b / 2
console.log(b);

b %= 2; // b = b % 2
console.log(b);

// Operador ternário
const resultado = function(nota) {

    return nota >= 7 ? 'Aprovado' : 'Reprovado';

}

console.log(resultado(6));