// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazendo uma função arrow em uma variável
const soma = (a, b) => {
    console.log(a + b)
}
soma(2, 3)

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

// Meu treinamento
const nota = function(a, b) {
    console.log(a + b)
}
nota(67, 75)

const nota2 = (a, b) => {
    console.log(a + b)
}
nota2(45, 45)

const nota3 = (a, b) => a - b
console.log(nota3(2, 2))

const nota4 = (a, b) => console.log(a - b)
nota4(4, 2)