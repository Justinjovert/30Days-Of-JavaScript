//Read the countries api and count total number of languages in the world used as officials.




const countriesAPI = 'https://restcountries.com/v2/all'


const fetchData = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()

        const languageList = new Map()
        for (const country of countries) {
            for (const language of country.languages) {

                if (languageList.has(language.name)) {
                    languageList.set(language.name, languageList.get(language.name) + 1)
                }
                else {
                    languageList.set(language.name, 1)
                }
            }
        }

        const listArr = Array.from(languageList)
        const sortByDesc = listArr.sort((a, b) =>  b[1] - a[1])

        console.log(sortByDesc.slice(0, 10))


    } catch (err) {
        console.error(err)
    }
}
console.log('===== async and await')
fetchData()