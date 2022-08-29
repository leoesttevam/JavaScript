function tratarErro(erro){
    throw 10
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErro(e)
    } finally{
        console.log('Final')
    }
    
}

const obj = { name: 'Roberto' }
imprimirNome(obj)