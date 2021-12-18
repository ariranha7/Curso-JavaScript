// números
const raio = 5.5
const areaCirc = Math.PI * Math.pow(raio, 2)
console.log(areaCirc)
console.log(areaCirc.toFixed(1))
console.log(areaCirc.toString(2))
console.log(Number.isInteger(areaCirc))
console.log(Number.isFinite(areaCirc))
// strings
const nome = 'DIEGO OLIVEIRA'
console.log(nome.charAt(0))
console.log(nome.substring(2))
console.log(nome.substring(1,3))
console.log(nome.indexOf('V'))
console.log(nome.concat('PRIMEIRO') + 'azul'.concat('CAMPEÃO'))
console.log(nome.replace('V', 'W'))
console.log('diego, CLASSE'.split(','))
// template strings
const alunos = 'DIEGO' + 'MARY'
const professores = 'jesus ' + 'maria ' + 'josé '
const tutores = `
os melhores prof
${professores}
!!!`
console.log(professores)
console.log(tutores)
const up = texto => texto.toUpperCase()
console.log(up(professores))