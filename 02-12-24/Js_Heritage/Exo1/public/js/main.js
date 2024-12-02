class Person {

  constructor(nom, age) {

    this.age = age
    this.nom = nom
    this.introduce = () => {
      console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans`)

    }

  }

}

class Student extends Person {

  constructor(nom, age, school) {

    super(nom, age)
    this.school = school
    this.study = () => {
      console.log(`${this.nom} étudie à ${this.school}`)

    }

  }

}

let Fabian = new Student ("Fabian", 28, "Oxford")

Fabian.introduce()
Fabian.study()