let nomeHero = "ninja"

class hero {
  constructor({ tipo, nome, idade }) {
    this.tipo = tipo
    this.nome = nome
    this.idade = idade


    if (this.tipo === "mago") {
      this.ataque = "usou magia"
    }
    else if (this.tipo === "monge") {
      this.ataque = "usou artes marciais"
    }
    else if (this.tipo == "guerreiro")
      this.ataque = "espada"
    else {
      this.ataque = "shuriken"
    }
  }

}
function decisao() {
  switch (nomeHero) {

    case "mago":
      seuHero = new hero({ tipo: "mago", nome: "usuario1", idade: 18 })
      break

    case "monge":
      seuHero = new hero({ tipo: "monge", nome: "usuario2", idade: 20 })
      break

    case "guerreiro":
      seuHero = new hero({ tipo: "guerreiro", nome: "usuario3", idade: 25 })
      break

    case "ninja":
      seuHero = new hero({ tipo: "ninja", nome: "usuario4", idade: 35 })
      break
  }
}
decisao()
if (seuHero) {
  console.log(`o ${seuHero.tipo} atacou usando ${seuHero.ataque}`)
}
