// par Nome/Valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

console.log(saudacao, exec())

// Objetos são grupos aninhados de pares  nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua da Felicidade',
        numero: 34
    }
}
console.log(Cliente)