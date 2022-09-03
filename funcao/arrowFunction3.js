let comparaThis = function(param) {
    console.log(this === param)
}

comparaThis(global)

const obj = {}

comparaThis = comparaThis.bind(obj)
comparaThis(global)
comparaThis(this)

let comparaThisArrow = param => console.log(this === param)
comparaThisArrow(module.exports)

comparaThisArrow = comparaThisArrow.bind(obj)
comparaThisArrow(obj)

comparaThisArrow(module.exports)
