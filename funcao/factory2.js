function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2496.42))
console.log(criarProduto('iPad', 3256.99))