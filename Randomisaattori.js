let ryhma = ["Aappo", "Antti", "Jan-Henrik", "Kimmo", "Matias", "Santeri", "Tomi"]
let ryhma1 = []
let ryhma2 = []
let viite = ryhma.length

for (let i = 0; i <= viite; i++) {
    if (ryhma.length == 0) break
    let rnd = Math.floor(Math.random() * ryhma.length)
    ryhma1[i] = ryhma[rnd]
    ryhma.splice(rnd, 1)
    if (ryhma.length == 0) break
    rnd = Math.floor(Math.random() * ryhma.length)
    ryhma2[i] = ryhma[rnd]
    ryhma.splice(rnd, 1)
}

console.log("Ryhmä 1 :")
console.log(ryhma1)
console.log("Ryhmä 2 :")
console.log(ryhma2)