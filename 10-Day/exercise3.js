



//How many languages are there in the countries data file

const countries = countries_data
const totalLanguages = new Set()

for(const country of countries){
    //Loop for Languages since it is an array
    for(const lang of country.languages){
        totalLanguages.add(lang)
    }
}


//console.log(`There are ${totalLanguages.size} languages`)
console.log(totalLanguages)



//Use the countries data to find the 10 most spoken languages:

const mostSpokenLang = new Map()

for(const country of countries){
    //Loop for languages array
    for(const lang of country.languages){
        if(mostSpokenLang.has(lang)){
            mostSpokenLang.set(lang, mostSpokenLang.get(lang) + 1)
        }else{
            let count = 1
            mostSpokenLang.set(lang, count)
        }
    }
}


//console.log(mostSpokenLang)

const MapArray = Array.from(mostSpokenLang)
MapArray.sort((a, b) => b[1] - a[1])

console.log(MapArray.slice(0, 10))