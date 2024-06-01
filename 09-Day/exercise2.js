const localcountries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]


//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

/* const totalPrice = products.map(product => product.price).filter(element => Number.isInteger(element)).reduce((a, b) => { return a + b })
console.log(totalPrice) */

//Find the sum of price of products using only reduce reduce(callback))


/* const totalPriceReduce = products.reduce((a, b) => {
    const price = parseInt(b.price)
    if (!isNaN(price)) {
        return a + price
    }
    return a
}, 0)

console.log(totalPriceReduce)
 */

/* Declare a function called categorizeCountries which returns an array of countries 
which have some common pattern(you find the countries array in this repository as 
    countries.js(eg 'land', 'ia', 'island','stan')). */


/* const categorizeCountries = (pattern) => {
    const land = countries.filter(country => (country.toLowerCase()).includes('land'))
    console.log(land)
    const ia = countries.filter(country => (country.toLowerCase()).includes('ia'))
    console.log(ia)
    const island = countries.filter(country => (country.toLowerCase()).includes('island'))
    console.log(island)
    const stan = countries.filter(country => (country.toLowerCase()).includes('stan'))
    console.log(stan)

    const countriesPattern = countries.filter(country => pattern.test(country))
    console.log(countriesPattern)
}

const regex = /land|ia|island|stan/i
categorizeCountries(regex) */


/* Create a function which return an array of objects, 
which is the letter and the number of times the letter use to start with a name of a country. */

const countryWithNamountofXchar = (countriesObj) => {
    console.log(countriesObj)

    

    let resultObj = []
    for (const country of countriesObj) {
        let firstChar = ''
        let count = 0
        for (const char in country) {
            //Acquire first character of the country
            firstChar = country[0]

            //Check if it repeats
            let currentChar = country[char].toUpperCase()
            if(currentChar == firstChar){
                count++
            }
        }
        resultObj.push({
            country: country,
            firstCharacter: firstChar,
            NofTimesUsed: count
        })
    }
    return resultObj
}


/* console.log(countryWithNamountofXchar(countries)) */


/* Declare a getFirstTenCountries function and return an array of ten countries. 
Use different functional programming to work on the countries.js array */

const getFirstTenCountries = (amount, countries) => {
    const tenCountries = countries.slice(0, amount)
    return tenCountries
}

const getLastTenCountries = (amount, countries) => {
    const lastTen = countries.slice(countries.length - amount, countries.length)
    return lastTen
}


/* console.log(getFirstTenCountries(10, countries))
console.log(getLastTenCountries(10, countries)) */


//Find out which letter is used many times as initial for a country name 
//from the countries array (eg. Finland, Fiji, France etc)

const countryInitialCount = (countries) => {
    let countryInitials = []
    for(const country of countries){
        countryInitials.push(country[0])
    }


    let mostFrequentInitial = {}
    let maxCount = 0

    countryWithMostCount = countryInitials.reduce((mostFreq, current) => {
        if(mostFrequentInitial[current]){
            mostFrequentInitial[current]++
        }
        else{
            mostFrequentInitial[current] = 1
        }
        if(mostFrequentInitial[current] > mostFrequentInitial[mostFreq])
        {
            return current
        }
        else{
            maxCount = mostFrequentInitial[mostFreq]
            return mostFreq
        }
    }, countryInitials[0])

    console.log(`There are ${maxCount} countries that starts with ${countryWithMostCount}, and is the most used as Initial.`)
}

countryInitialCount(countries)