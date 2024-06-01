const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


countries.forEach(country => {
    console.log(country)
});

names.forEach(element => {
    console.log(element)
});

const uppercaseCountries = countries.map(country => country.toUpperCase())
console.log(uppercaseCountries)

const countriesLength = countries.map(country => country.length)
console.log(countriesLength)

const squared = numbers.map(number => number ** 2)
console.log(squared)

const uppercaseNames = names.map(name => name.toUpperCase())
console.log(uppercaseNames)



//Use map to map the products array to its corresponding prices.
const sortByPrice = (a, b) => {
    return a - b
}

const sortProducts = products.map(product => product.price)
sortProducts.sort(function(a, b) {
    return a - b
})
console.log(sortProducts)


//Use filter to filter out countries containing land.
const countryWithLand = countries.filter(country => (country.toLowerCase()).includes('land'))
console.log(countryWithLand)

//Use filter to filter out countries having six character.
//Use filter to filter out countries containing six letters and more in the country array.
const countryWithSixChar = countries.filter(country => country.length >= 6)
console.log(countryWithSixChar)

//Use filter to filter out only prices with values.
const filterPrice = products.filter(product => product.price !== '')
console.log(filterPrice)

//Use reduce to sum all the numbers in the numbers array.
let sum = 0
const sumOfArray = numbers.reduce(num => sum+= num)
console.log(sumOfArray)

//Use reduce to concatenate all the countries and to produce this sentence: 
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
//country.concat(", ")
const sentence = countries.reduce((previousC, currentC, index) => {
    if(index == countries.length -1)
    {
        return previousC + ', and ' + currentC
    }
    else{
        return previousC + ', ' + currentC
    }
},'Estonia')
console.log(sentence + ` are north European countries`)

//Use some to check if some names' length greater than seven in names array
const great7 = names.some(name => name.length >= 7)
console.log(great7)

const areAllLand = countries.every(country => (country.toLowerCase()).includes('land'))
console.log(areAllLand)


const firstSix = countries.find(country => country.length==6)

console.log(firstSix)

const firstSixIndex = countries.findIndex(country => country.length == 6)
console.log(firstSixIndex)



const findCountry = (string) => {
    const isThisCountry = countries.findIndex((country) => country == string)
    console.log(isThisCountry)
}

findCountry('Norway')
findCountry('Russia')