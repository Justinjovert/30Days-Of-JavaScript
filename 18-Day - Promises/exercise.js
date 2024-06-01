
//Name of country, capital, languages, population and area.

const countriesAPI = 'https://restcountries.com/v2/all'

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            let languageList = []
            country.languages.forEach(language => {
                languageList.push(language.name)
            })
            let languageFormat = ''
            if(languageList.length > 1){
                languageFormat = languageList.slice(0, -1).join(', ')
                languageList.length == 2
                    ? languageFormat = languageFormat + ' and ' + languageList[languageList.length - 1]
                    : languageFormat = languageFormat + ', and ' + languageList[languageList.length - 1]
            }
            else{
                languageFormat = languageList[0]
            }

            console.log(`Country Name: ${country.name}, Capital: ${country.capital}, Languages: ${languageFormat}, Population: ${country.population}, Area: ${country.area}`)
        })
    })
    .catch(error => console.error(error))


