const resultado1 = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado1(8))

const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado2(5))

function resultado3(nota) {
    console.log(nota >= 7 ? 'Aprovado' : 'Reprovado')
}
resultado3(9)

function resultado4(nota) {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado4(5))

const resultado5 = function (nota) {
    console.log(nota >= 7 ? 'Aprovado' : 'Reprovado')
}
resultado5(6.5)

const resultado6 = function (nota) {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado6(8))