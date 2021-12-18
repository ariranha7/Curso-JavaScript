// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 6, 7, 8, 1)
imprimirSoma()

// função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())

// Meu treinamento

function nota(a, b) {
    console.log(a + b)
}
nota(67, 89)

function nota2(a, b) {
    return(a + b)
}
console.log(nota2(100, 50))