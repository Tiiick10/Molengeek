class Lieu {

    constructor(nom) {

        this.nom = nom
        this.personnes = []

    }

}


let maison = new Lieu("Maison")
let molengeek = new Lieu("MolenGeek")
let snack = new Lieu("Snack")

class Personnage {

    constructor(nom, argent) {

        this.nom = nom
        this.argent = argent

    }

    seDeplacer(bus, lieu) {

        if (bus.embarquer(this)) {
            lieu.personnes.push(this)
            console.log(`${this.nom} est arrivé à ${lieu.nom}`)

        }

    }

}


class Bus {


    constructor() {

        this.personnes = []
        this.caisse = 0

    }


    embarquer(personne) {

        let prix = 2.8

        if (personne.argent >= prix) {
            personne.argent -= prix
            this.caisse += prix
            this.personnes.push(personne)
            console.log(`${personne.nom} est monté dans le bus.`)

            return true

        } else {

            console.log(`${personne.nom} n'a pas assez d'argent pour prendre le bus.`)

            return false

        }

    }

}


let bus = new Bus()
let personnage = new Personnage("Pierre", 20)

console.log("8h00 : Départ de Maison")
personnage.seDeplacer(bus, molengeek)

console.log("12h30 : Départ de MolenGeek pour le snack")
personnage.seDeplacer(bus, snack)

console.log("13h30 : Retour à MolenGeek à pied")
molengeek.personnes.push(personnage)

console.log("16h45 : Retour à la Maison")
personnage.seDeplacer(bus, maison)

console.log(`Il reste à ${personnage.nom} ${personnage.argent}€.`)
console.log(`La caisse du bus contient ${bus.caisse}€.`)
