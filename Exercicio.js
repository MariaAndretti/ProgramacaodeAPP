const prompt = require("prompt-sync")()

let alturas = []

N = prompt("Quantas alturas você vai cadastrar: ")

for (let i = 0; i < N; i++){
    let suaAltura = prompt("Qual sua altura: ")
    alturas.push(suaAltura)
}

console.log(alturas)