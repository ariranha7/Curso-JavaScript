const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2);
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total/(peso1 + peso2)
console.log(media)

console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)
console.log(typeof Number)

// a partir daqui, são exercícios que resolvi fazer para praticar

let massa = 10.400000
let altura = 1.300000
let largura = 20

console.log(Number.isInteger(massa))
console.log(Number.isInteger(altura))
console.log(Number.isInteger(largura))
console.log(media.toFixed(3))
console.log(altura.toFixed(5))
console.log(massa.toFixed(1))
console.log(Number.isInteger(massa))