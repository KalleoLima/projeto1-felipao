let nome = "lekfera"
let xp = 2001
let rank;

if (xp <= 1000) {
  console.log("ferro")
  rank = "ferro"
}

else if (xp >= 1001 && xp <= 2000) {
  console.log("bronze")
  rank = "broze"
}

else if (xp >= 2001 && xp <= 6000) {
  console.log("prata")
  rank = "prata"
}

else if (xp >= 6001 && xp <= 7000) {
  console.log("ouro")
  rank = "ouro"
}

else if (xp >= 7001 && xp <= 8000) {
  console.log("platina")
  rank = "platina"
}

else if (xp >= 8001 && xp <= 9000) {
  console.log("ascendente")
  rank = "ascendente"
}

else if (xp >= 9001 && xp <= 10000) {
  console.log("imortal")
  rank = "imortal"
}

else if (xp > 10000) {
  console.log("radiante")
  rank = "radiante"
}

