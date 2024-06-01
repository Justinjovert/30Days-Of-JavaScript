

//Create an Animal class. The class will have name, age, color, legs properties and create different methods
//Create a Dog and Cat child class from the Animal Class.
//


class Animal {
    constructor(name, age, color, legs){
        this.name = name,
        this.age = age,
        this.color = color,
        this.legs = legs
    }
    saySomething(){
        console.log(`My name is ${this.name}. I am ${this.color} and I have ${this.legs} paws! I am ${this.age} years old!`)
    }
}

class Dog extends Animal{
    constructor(name, age, color, legs, gender){
        super(name, age, color, legs)
        this.name = `Lycan`
        this.gender = gender
    }
    saySomething(){
        let pronouns = this.gender == `Male` ? 'He' : 'She' 
        let secondary = this.gender == `Male` ? 'his' : 'her'
    
        console.log(`${pronouns} is a Dog, and ${secondary} name is ${this.name}. ${pronouns} is ${this.color} and ${pronouns} has ${this.legs} paws! ${pronouns} is ${this.age} years old!`)
    }
}

class Cat extends Animal{
    saySomething(){
        console.log(`I am a Cat, and my name is ${this.name}. I am ${this.color} and I have ${this.legs} paws! I am ${this.age} years old!`)
    }
}



const dog = new Dog(`Bravo`, 5, `Black`, 4, 'Male')
const cat = new Cat(`Alpha`, 4, `Brown`, 4)

dog.saySomething()
cat.saySomething()