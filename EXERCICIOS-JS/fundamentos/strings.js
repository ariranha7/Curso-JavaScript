const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!')) // pode-se concatenar com vírgul Tmbem
console.log(escola.replace(3, 'e'))
console.log('Ana,Maria,José'.split(','))

// a partir daqui, farei exercícios por conta
const nome = 'DIEGO OLIVEIRA'
console.log(nome)
console.log(nome.charAt(0))
console.log(nome.charAt(5))
console.log(nome.charAt(4))
console.log(nome.charAt(7))
console.log(nome.indexOf('E'))
console.log(nome.substring(1))
console.log(nome.substring(2, 7))
console.log('Diego'.concat('Oliveira'))
console.log('Diego', 'Oliveira')
console.log(nome.replace('D', 'T'))
console.log('DiegowOliveira'.split('w'))