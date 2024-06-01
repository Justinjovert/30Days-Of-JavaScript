
//Sort countries by name, by capital, by population


const sortByName = countries_data.sort((a, b) => a.name.localeCompare(b.name))

/* console.log(sortByName) */

const sortByCapital = countries_data.sort((a, b) => {
    if (a.capital && b.capital) {
        return a.capital.localeCompare(b.capital)
    }
    else if (a.capital) {
        return 1
    }
    else if (b.capital) {
        return -1
    }
    else {
        return 0
    }

})

/* for(const country in sortByCapital){
    if(sortByCapital[country].capital != undefined){
        console.log(`${sortByCapital[country].capital}, ${sortByCapital[country].name}`)
    }
    else{
        console.log(`No capital, ${sortByCapital[country].name}`)
    }
} */


/* for(const country in countries_data){
    console.log(`${countries_data[country].name} has ${countries_data[country].population} population`)
} */

const sortByPopulation = countries_data.sort((a, b) => {
    return b.population - a.population
})
/* 
console.log(sortByPopulation)
 */

const mostSpokenLang = (countries, n) => {
    const languages = {}


    for (let country = 0; country < countries.length - 1; country++) {
        let langs = countries[country].languages


        /* //For loop in case of multiple languages in one country
        for (const lang in langs) {
            let langObj = {}

            //Find the index of the current language on the languages array
            const index = languages.findIndex(obj => obj.language === langs[lang])

            //If language already exists
            if ((languages[index]) && (languages[index].language == langs[lang])) {
                languages[index].count += 1
            }
            //If it doesn't, add to the array and let count be 1
            else {
                langObj.language = langs[lang]
                langObj.count = 1
                languages.push(langObj)
            }
        } */
        for (const lang of langs) {
            languages[lang] = (languages[lang] || 0) + 1;
          }        
    }

    //From my code above, to this concise code from ChatGPT
    const languagesArray = Object.keys(languages).map((language => ({
        language,
        count: languages[language]
    })))

    sortDescend = languagesArray.sort((a, b) => {
        return b.count - a.count
    })
    for (let ctr = 0; ctr < n; ctr++) {
        console.log(sortDescend[ctr])
    }

}

/* numberOfLanguages = 10
mostSpokenLang(countries_data, numberOfLanguages) */


//Use countries_data.js file 
// create a function which create the ten most populated countries


const populatedCountries = (countries, n) => {
    const sortByPopDesc = countries.sort((a, b) => {
        return b.population - a.population
    })

    for(let ctr = 0; ctr < n; ctr++){
        console.log(`${sortByPopDesc[ctr].name} has ${sortByPopDesc[ctr].population} population`)
    }
}


numberOfCountries = 3
populatedCountries(countries_data, numberOfCountries)