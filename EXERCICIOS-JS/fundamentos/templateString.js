const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
//console.log(concatenacao)
const template = `
Olá
Rebeca!`
console.log(concatenacao, template)
// expressões
console.log(`1 + 1 = ${1 + 1}`)
// exemplo com função
const up = texto => texto.toUpperCase()
console.log(up('diego'))
console.log(`Ei.... ${up('cuidado')}`)