// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Feliz',
        numero: 67
    }
}

console.log(pessoa)
console.log(pessoa.endereco)

const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade:i} = pessoa
console.log(n, i)

const {endereco, cor} = pessoa
console.log(endereco, cor)
