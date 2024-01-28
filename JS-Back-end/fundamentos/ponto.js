console.log(typeof console);
console.log(Math.ceil(6.1)); //Arredonda para cima.
console.log(Math.floor(6.1)); //Arredonda para baixo.

function Obj(nome) {
    this.nome = nome;
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);