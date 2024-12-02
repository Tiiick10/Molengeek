
class Objet {

    constructor(nom, prix) {
        this.nom = nom
        this.prix = prix
    }

}

let pomme = new Objet("Pomme", 1.5)
let livre = new Objet("Livre", 8.90)

let boite = [pomme, livre]

class Personnage {

    constructor(nom, argent) {
        this.nom = nom
        this.sac = []
        this.argent = argent

    }

    prendre(objet) {

        this.sac.push(objet)
        boite = boite.filter(o => o !== objet)
        console.log(`${this.nom} a pris ${objet.nom}`)

    }

    acheter(vendeur, objet) {

        if (this.argent >= objet.prix) {
            this.argent -= objet.prix
            vendeur.argent += objet.prix
            this.sac.push(objet)
            vendeur.sac = vendeur.sac.filter(o => o !== objet)
            console.log(`${this.nom} a acheté ${objet.nom} à ${vendeur.nom}`)

        } else {

            console.log(`${this.nom} n'a pas assez d'argent pour acheter ${objet.nom}`)
        }
    }
}

let bernadette = new Personnage("Bernadette", 20)
let bobby = new Personnage("Bobby", 15)

bernadette.prendre(pomme)
bobby.prendre(livre)

bobby.acheter(bernadette, pomme)