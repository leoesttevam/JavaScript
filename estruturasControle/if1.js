function soBoa(nota){
    if(nota >= 7){
        return 'Aprovado com nota ' + nota;
    }
}

console.log(soBoa(8))

function verdade(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}

verdade()
verdade(null)
verdade(undefined)
verdade(NaN)
verdade('')
verdade(0)
verdade(-1)
verdade(' ')
verdade('?')
verdade([])
verdade([1, 2])
verdade({})