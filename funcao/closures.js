//Closures é o escorpo criado quando uma função e declarada
//Esse escopo permite a função acessar e manipular variáveis externas á função

//Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())