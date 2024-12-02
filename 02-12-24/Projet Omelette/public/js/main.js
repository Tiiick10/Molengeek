// Personnage + méthodes (déplacer, payer, couper)

let personnage = {

  nom: "Pierre",
  lieu: "maison",
  argent: 50,
  mainDroite: [],
  mainGauche: [],

  se_deplacer(destination) {

    this.lieu = destination
    console.log(`${this.nom} se dirige vers ${destination}`)

  },

  payerArticle(article) {

      if (this.argent >= article.prix) {
          this.argent -= article.prix
          console.log(`${this.nom} a acheté ${article.nom} pour ${article.prix}€`)
          this.mainDroite.push(article)

      } else {

          console.log("Pas assez d'argent !")

      }

  },

  couper(ingredient, outil) {

      if (ingredient.etats.includes('entier')) {
          ingredient.etats.shift()
          ingredient.etats.push(outil.action)
          console.log(`${ingredient.nom} a été ${outil.action} avec ${outil.nom}`)

      } else {

          console.log(`${ingredient.nom} est déjà ${ingredient.etats[0]}`)

      }

  }

}

// Maison

let maison = {

  nom: "maison",
  personnes: []

}

// Couteau + mouleur

let couteau = {

  nom: "couteau",
  action: "coupé"

}

let mouleur = {

  nom: "mouleur",
  action: "moulu"

}

// Ingrédients + état

let oignon = { 

  nom: "oignon",
  etats: ["entier"], 
  prix: 2 

}

let oeuf = { 

  nom: "oeuf", 
  etats: ["entier"], 
  prix: 1 

}

let epice = { 
  
  nom: "épice", 
  etats: ["moulu"], 
  prix: 3 

}

let fromage = { 
  
  nom: "fromage", 
  etats: ["entier"], 
  prix: 2 

}

// Epicerie

let epicerie = {
  
  nom: "épicerie",
  personnes: [],
  paniers: [{ type: "panier", contenu: [] }],
  ingredients: [oignon, oeuf, epice, fromage]

}

// Poele

let poele = {

  nom: "poêle",
  contenu: [],

  cuire() {

    setTimeout(() => {
      console.log(`${this.contenu} est cuit`)
    }, 4000)
    
  }

}

// Bol

let bol = {

  contenu: [],

  melanger(nomDuMelange) {

    this.contenu = [{ nom: nomDuMelange, etats: ["pas cuit"], prix: 0 }]

  }

}

// OMELETTE

console.log(personnage.nom + " est actuellement à la " + personnage.lieu)
personnage.se_deplacer("l'épicerie")
personnage.mainDroite.push(epicerie.paniers[0])
console.log(`${personnage.nom} prend un panier et le place dans sa main droite`)

for (let ingredient of epicerie.ingredients) {

  console.log(`${personnage.nom} prend un(e) ${ingredient.nom} dans le panier`)
  let ingredientCopie = { ...ingredient }
  personnage.mainDroite[0].contenu.push(ingredientCopie)
  personnage.payerArticle(ingredient)
  console.log(`${personnage.nom} a payé ${ingredient.prix}€. Il reste ${personnage.argent}€`)

}

personnage.se_deplacer("maison")
console.log(`${personnage.nom} est maintenant à la maison`)

// Ingrédients dans le bol

for (let ingredient of personnage.mainDroite[0].contenu) {

  console.log(`${personnage.nom} met ${ingredient.nom} dans le bol`)
  bol.contenu.push(ingredient)
  let index = personnage.mainDroite[0].contenu.indexOf(ingredient)
  personnage.mainDroite[0].contenu.splice(index, 1)

}

// Rapporter le panier

personnage.se_deplacer("l'épicerie")
console.log(`${personnage.nom} remet son panier à l'épicerie`)
epicerie.paniers.push(personnage.mainDroite[0])
personnage.mainDroite.pop()

// Retourner à la maison pour cuisiner

personnage.se_deplacer("la maison")
console.log(`${personnage.nom} retourne à la maison pour cuisiner`)

// Couper les ingrédients dans le bol si nécessaire

for (let ingredient of bol.contenu) {

  if (ingredient.etats[0] === "entier") {

    personnage.couper(ingredient, couteau)

  } else {

    console.log(`${ingredient.nom} est déjà ${ingredient.etats[0]}`)

  }

}

// Mélanger

bol.melanger("omelette")
console.log(`Les ingrédients sont mélangés pour former une ${bol.contenu[0].nom}`)

// Vider le bol dans la poêle

poele.contenu.push(bol.contenu[0])
bol.contenu = []
console.log(`${personnage.nom} verse l'omelette dans la poêle`)

// Cuire

// poele.cuire()

setTimeout(() => {
  console.log("Notre omelette est cuite :)")
}, 4000)
