let doblo = function (a) {
    return 2 * a
}

//ArrowFunction
doblo = (a) => {
    return 2 * a
}

doblo = a => 2 * a //return implícito
console.log(Math.PI)

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'

ola = _ => 'Olá' //Possui um param
console.log(ola())