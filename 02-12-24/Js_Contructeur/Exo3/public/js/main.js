// lieux

let maison = {
	nom: "maison",
	contenu: [],
}

let epicerie = {
	nom: "epicerie",
	contenu: [],
	ingredients: [],
}

let cuisine = {
	nom: "cuisine",
	contenu: [],
	ingredients: [],
}

class lieux {
    constructor(nom, contenu, ingredients){

        this.nom = nom
        this.contenu = contenu
        this.ingredients = ingredients

    }

}

let Maison = new lieux("maison", "")
let Epicerie = new lieux("epicerie", "", "")
let Cuisine = new lieux("cuisine", "", "")

// ingredients

let poivron = {
	nom: 'poivron',
	etat: 'entier',
	prix:  1 ,
}

let oignon = {
	nom: 'oignon',
	etat: 'entier',
	prix:  2 ,
}

let oeuf = {
	nom: 'oeuf',
	etat: 'entier',
	prix:  4 ,
}

let epice = {
	nom: 'epice',
	etat: 'moulu',
	prix:  3.25 ,
}

let paprika = {
	nom: 'paprika',
	etat: 'moulu',
	prix:  1.5 ,
}

let fromage = {
	nom: 'fromage',
	etat: 'coupé',
	prix:  1.6 ,
}

class ingredients {
    constructor(nom, etat, prix){

        this.nom = nom
        this.etat = etat
        this.prix = prix
        
    }

}

let Poivron = new ingredients("poivron", "entier", 1)
let Oignon = new ingredients("oignon", "entier", 2)
let Oeuf = new ingredients("oeuf", "entier", 4)
let Epice = new ingredients("epice", "moulu", 3.5)
let Paprika = new ingredients("paprika", "moulu", 1.5)
let Fromage = new ingredients("fromage", "coupé", 1.6)


// Personne

class Personnage {
    
    constructor(nom, lieu, argent, panier) {

        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.panier = panier

    }

    se_deplacer(destination) {

        this.lieu = destination

        console.log(`${this.nom} se déplace vers ${destination}`)

    }

    payer(montant) {

        if (this.argent >= montant) {

            this.argent -= montant

            console.log(`${this.nom} a payé ${montant}€. Il vous reste ${this.argent}€.`)

        } else {

            console.log(`${this.nom} n'a pas assez d'argent pour payer ${montant}€.`)

        }

    }

    couper(objet, outil) {

        console.log(`${this.nom} utilise ${outil} pour couper ${objet}.`)

    }

}


let personnage = new Personnage("Maxime", "néant", 100, [])

personnage.se_deplacer("le marché")
personnage.payer(20)
personnage.couper("une branche", "un couteau")

console.log(personnage)
