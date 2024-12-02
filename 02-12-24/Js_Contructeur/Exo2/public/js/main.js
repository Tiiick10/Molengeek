class Personnage {
    constructor(age, nom, ville){

    this.age = age
    this.nom = nom
    this.ville = ville
    this.sePresenter = () => {
        console.log(`Bonjour, je suis ${this.nom}`)

    }

  }

}


let Fabian = new Personnage (28, "Fabian", "Farciennes")
let Random = new Personnage (35, "Proute", "Jambes")

Fabian.sePresenter()
Random.sePresenter()