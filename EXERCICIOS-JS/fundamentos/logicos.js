function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const compraTv32 = !!(trabalho ^ trabalho2)  // bitwise xor
    const compraTv32 = trabalho1 != trabalho2
    const manterSaudavel = !trabalho1 && !trabalho2

    return {comprarSorvete, comprarTv50, compraTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))