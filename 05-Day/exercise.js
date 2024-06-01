/* const array = []

console.log(array) */



/* const array = ['1', '2', '3', '4', '5']
for (let ctr = 0; ctr <= array.length; ctr++)
{
    ctr%2 == 0
        ? console.log(array[ctr])
        : console.log()
} */

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const itCompanies = string.split(', ')

/* middleElement = Math.floor(itCompanies.length/2)


console.log(itCompanies[0])
console.log(itCompanies[middleElement])  
console.log(itCompanies[itCompanies.length - 1])
 */

/* let sentence = itCompanies.join(', ')
console.log(sentence+' are big IT Companies')

 */

/* let isExist = itCompanies.indexOf('Jam')
isExist >= 0
    ? console.log("It exists")
    : console.log("It does not exist")

console.log(isExist) */

/* console.log(itCompanies.sort()) 

let doubleO = []
for(let ctr = 0; ctr <= itCompanies.length - 1; ctr++)
{
    let oCtr = 0
    for(let spellCtr = 0; spellCtr <= itCompanies[ctr].length - 1; spellCtr++)
    {
        //console.log(itCompanies[ctr][spellCtr])
        if(itCompanies[ctr][spellCtr] == 'o')
            {
                oCtr += 1
            }
    }
    if (oCtr >= 2){
        doubleO.push(itCompanies[ctr])
    }
}
console.log(doubleO) */

/* console.log(itCompanies.reverse())  */

/* console.log(itCompanies.slice(0, 2))
let a = itCompanies.length - 3
console.log(itCompanies.slice(a, itCompanies.length -1))
let middle = itCompanies.length / 2
console.log(itCompanies.slice(middle - 1, middle + 1)) */


/* console.log(itCompanies.shift())
console.log(itCompanies.pop())
let middleElement = Math.floor(itCompanies.length/2)
console.log(itCompanies.splice(middleElement,  1, 'NotApple'))
console.log(itCompanies) */
/* 
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

fullStack = frontEnd.concat(backEnd)

console.log(fullStack) */


/* const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages.sort())
console.log(`Min age is ${ages[0]}, max age is ${ages[ages.length-1]}`)
let median = (ages[ages.length/2] + ages[ages.length/2 + 1]) / 2
console.log(`Median is: ${median}`)

let sum = 0
for(let ctr = 0; ctr <= ages.length - 1; ctr++)
{
    sum += ages[ctr]
}
console.log(`Average is: ${sum/ages.length}`)
console.log(`Range is ${ages[ages.length-1] - ages[0]}`) */


/* console.log(countries.slice(0, 10))
let middle = Math.floor(countries.length/2)
console.log(countries[middle]) */


/* Divide the countries array into two equal arrays if it is even. 
If countries array is not even , one more country for the first half. */

console.log(countries.length)

const firstHalf = []
const secondHalf = []

let middleElement = Math.ceil(countries.length/2)
console.log(middleElement)


let ctr = 0
for(ctr; ctr <= middleElement - 1; ctr++)
{
    firstHalf.push(countries[ctr])
}

for(ctr; ctr <= countries.length - 1; ctr++)
{
    secondHalf.push(countries[ctr])
}
console.log(firstHalf)
console.log(secondHalf)



