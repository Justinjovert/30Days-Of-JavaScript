

/* Exercises: Level 1 */
/* Create an empty object called dog */
/* Add name, legs, color, age and bark properties for the dog object. 
The bark property is a method which return woof woof */
/* Get name, legs, color, age and bark value from the dog object */
/* Set new properties the dog object: breed, getDogInfo */


const dog = {}

console.log(dog)

dog.name = 'Bravo'
dog.legs = '4'
dog.color = 'Black'
dog.age = 7
console.log(dog)

dog.WooFWooF = function(){
    return 'woof woof'
}

console.log(dog.WooFWooF())
console.log(dog.name)
const copyDog = Object.values(dog)
console.log(copyDog)

dog.breed = 'Dachshund'

dog.getDogInfo = function(){
    return `My name is ${dog.name} and I am ${dog.age}. I have ${dog.legs} paws and I am ${dog.color}. I am of ${dog.breed} kind!`
}

console.log(dog.getDogInfo())