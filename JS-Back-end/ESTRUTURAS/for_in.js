const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for(i in notas) {
    console.log(`Nota ${i} = ${notas[i]}`);
}

console.log();

const Pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributo in Pessoa) {
    console.log(`${atributo} = ${Pessoa[atributo]}`);
}