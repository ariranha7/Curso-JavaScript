const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[1], valores[3])
console.log(valores[4])

valores[4] = 1
valores[5] = 3.4
console.log(valores)
console.log(valores.length)
valores.push({id: 3}, false, null)
console.log(valores)
console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores)