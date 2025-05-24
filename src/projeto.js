function jogador(vitoria = 0, derrota = 0) {
  let saldovitorias = vitoria - derrota
  let rank;
  if (saldovitorias <= 10) {
    rank = "ferro"
  }
  else if (saldovitorias >= 11 && saldovitorias <= 20) {
    rank = "bronze"
  }
  else if (saldovitorias >= 21 && saldovitorias <= 50) {
    rank = "prata"

  }
  else if (saldovitorias >= 51 && saldovitorias <= 80) {
    rank = "ouro"

  }
  else if (saldovitorias >= 81 && saldovitorias <= 90) {
    rank = "diamante"
  }
  else if (saldovitorias >= 91 && saldovitorias <= 100) {
    rank = "lendario"
  }
  else if (saldovitorias >= 101) {
    rank = "imortal"
  }
  return (`o saldo de vitorias é ${saldovitorias} e o rank do jogador é ${rank}`)
}
const resultado = jogador()
console.log(resultado)