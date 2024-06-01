


//Update how many countries total
const updateHeader = (data) => {
    const totalCountries = document.getElementById('totalCountries')
    totalCountries.innerHTML = `There are a total of ${data} countries`
}

//Push all countries into an array 
//Sort the countries fetched from restAPI
const sortCountries = (countries) => {
    let countriesArray = []
    for (const country of countries) {
        const localObject = {
            name: country.name.common,
            capital: country.capital[0],
            languages: country.languages,
            population: country.population,
            flag: country.flags.png
        }
        countriesArray.push(localObject)
    }
    //Sort countries by name on default
    countriesArray.sort((a, b) => a.name.localeCompare(b.name))
    return countriesArray
}


let searchBarSorted
const updateSearchedBarSorted = () => {
    // Will filter DOMs that are shown
    // Create a map and set its values to the data 
    // update global variable for chart.js to use
    const allDivs = document.querySelectorAll('.card')
    let currentDivs = Array.from(allDivs).filter(div => {
        return div.style.display !== 'none'
    })

    const populationList = new Map()
    for (const div of currentDivs) {
        populationList.set(div.id, div.querySelector('.card-details').getAttribute('data-population'))

    }
    let listArr = Array.from(populationList)
    searchBarSorted = listArr.sort((a, b) => b[1] - a[1])
    searchBarSorted.unshift(['WORLD', WORLD])
    console.log(searchBarSorted)
    tabPop.dispatchEvent(new Event('click'))
}


//Fetch function
const countriesAPI = 'https://restcountries.com/v3.1/all'

let allCountries
let WORLD = 0
const fetchCountries = async () => {
    try {
        const response = await fetch(countriesAPI)
        const data = await response.json()

        const countries = data.filter(country => { return country.independent || country.independent === undefined })
        const sortedCountries = sortCountries(countries)
        allCountries = sortedCountries
        allCountries.forEach(country => {
            WORLD += country.population
        })
        updateHeader(countries.length)
        return sortedCountries
    }
    catch (error) {
        return console.error(error)
    }
}


const createCard = (country) => {
    const countryContainer = document.querySelector('.country-container')
    const card = document.createElement('div')
    card.classList.add('card')

    const flagContainer = document.createElement('div')
    const flagPNG = document.createElement('img')

    const cardDetails = document.createElement('div')
    const countryName = document.createElement('span')
    const capital = document.createElement('span')
    const languages = document.createElement('span')
    const population = document.createElement('span')


    flagContainer.classList.add('card-flag')
    countryName.classList.add('card-span', 'country-name')
    capital.classList.add('card-span')
    languages.classList.add('card-span')
    population.classList.add('card-span')
    cardDetails.classList.add('card-details')

    const languagesObj = country.languages


    //Format language array to a string
    let string = ''
    let keys = Object.keys(languagesObj)
    const objValues = Object.values(languagesObj)

    //IF conditions for multiple languages
    for (let index = 0; index < keys.length; index++) {
        if (Object.keys(keys).length <= 1) {
            string = languagesObj[keys[index]]
        }
        else if (Object.keys(keys).length == 2) {
            string = languagesObj[keys[index]] + ' and ' + languagesObj[keys[1]]
            break
        }
        else if (Object.keys(keys).length > 2) {
            if (index == Object.keys(keys).length - 1) {
                string += ' and ' + languagesObj[keys[index]]
            }
            else {
                string += languagesObj[keys[index]] + ', '
            }
        }

    }

    //Flag
    flagPNG.src = country.flag
    flagPNG.alt = 'Country Flag'

    countryName.innerHTML = country.name
    capital.innerHTML = 'Capital: ' + country.capital
    languages.innerHTML = 'Languages: ' + string
    population.innerHTML = 'Population: ' + country.population.toLocaleString()
    cardDetails.dataset.capital = country.capital
    cardDetails.dataset.languages = objValues
    cardDetails.dataset.population = country.population


    //Set ID
    card.id = country.name

    //Append
    flagContainer.appendChild(flagPNG)
    card.appendChild(flagContainer)
    card.appendChild(countryName)
    cardDetails.appendChild(capital)
    cardDetails.appendChild(languages)
    cardDetails.appendChild(population)
    card.appendChild(cardDetails)
    countryContainer.appendChild(card)
}

const resultFetch = fetchCountries()
resultFetch.then(data => {
    data.forEach(eachData => {
        createCard(eachData)
    })
    updateSearchedBarSorted()
})


/* ---------- Search function */

const feedbackFunction = (data) => {
    const feedback = document.getElementById('feedback')
    if(data >= 195){
        feedback.innerHTML = ''
    }
    else{
        feedback.innerHTML = `${data} countries satisfied the search criteria`
    }
}

//Search DIVs
const searchCountries = (filteredCountries) => {
    let numberOfResults = 0
    const selectAllCards = document.querySelectorAll('.card')
    selectAllCards.forEach(card => {
        const cardCapital = card.querySelector('.card-details').getAttribute('data-capital')
        if (filteredCountries.includes(card.id) || filteredCountries.includes(cardCapital)) {
            card.style.display = 'flex'
            numberOfResults++
        }
        else {
            card.style.display = 'none'
        }
    })
    feedbackFunction(numberOfResults)
}


//Input event listener
const searchBar = document.querySelector('.search-bar')
searchBar.addEventListener('input', text => {
    console.log('hi')
    let filteredCountries = []
    let input = text.target.value
    //Using array and get name
    allCountries.forEach(country => {
        if (country.name.toLowerCase().includes(input.toLowerCase())) {
            filteredCountries.push(country.name)
        }
        if (country.capital.toLowerCase().includes(input.toLowerCase())) {
            filteredCountries.push(country.capital)
        }
        //Extract values from object and check if country has the searched language
        //If yes, push country to the array for sorting
        let languages = Object.values(country.languages)
        languages.forEach(element => {
            if(element.toLowerCase().includes(input.toLowerCase())){
                filteredCountries.push(country.name)
            }
        })
    })
    searchCountries(filteredCountries)
    updateSearchedBarSorted()

    //Use filter function and return the object
    /* let filterArray = allCountries.filter(country => {
        if (country.name.toLowerCase().includes(input.toLowerCase())) {
            return country
        }
    })
 */

    /* // Will filter DOMs that are shown
    // Create a map and set its values to the data 
    // update global variable for chart.js to use
    const allDivs = document.querySelectorAll('.card')
    let currentDivs = Array.from(allDivs).filter(div => {
        return div.style.display !== 'none'
    })

    const populationList = new Map()
    for (const div of currentDivs) {
        populationList.set(div.id, div.querySelector('.card-details').getAttribute('data-population'))

    }
    let listArr = Array.from(populationList) */
    //listArr.unshift('World', WORLD)
    /* searchBarSorted = listArr.sort((a, b) => b[1] - a[1])
    searchBarSorted.unshift(['World', WORLD])

    Dispatch population event listener
    tabPop.dispatchEvent(new Event('click')) */
})


/* ------------Sorting ---------- */

//Sort countries by name
//Ascending or descending
const isSorted = (data) => {
    if(typeof data[0] === 'string'){
        for (let index = 0; index < data.length - 1; index++) {
            if ((data[index].localeCompare(data[index + 1], 'en', { sensitivity: 'base' }) > 0)) {
                console.log(`${data[index]} should be lower than ${data[index + 1]}`)
                return false;
            }
        }
    }
    else if(typeof data[0] === 'number'){
        for (let index = 0; index < data.length - 1; index++) {
            if ((data[index] < data[index + 1])) {
                console.log(`${data[index]} < ${data[index + 1]}`)
                return false;
            }
        }
    }
    return true
}

// Sort By name, capital, or population
const countryContainer = document.querySelector('.country-container')

const sortByName = document.getElementById('sortByName')
sortByName.addEventListener('click', () => {
    const allDivs = document.querySelectorAll('.card')
    let currentDivs = Array.from(allDivs).filter(div => {
        return div.style.display !== 'none'
    })

    let dataToSort = []
    currentDivs.forEach(div => {
        dataToSort.push(div.id)
    })
    if (isSorted(dataToSort)) {
        console.log("Yey, I'm sorted!")
        const reverseDiv = Array.from(currentDivs).reverse()
        countryContainer.append(...reverseDiv)
    }
    else {
        console.log("No, I'm not sorted...")
        currentDivs = currentDivs.sort((a, b) => a.id.localeCompare(b.id, 'en', { sensitivity: 'base' }))
        countryContainer.append(...currentDivs)
    }

})

const sortByCapital = document.getElementById('sortByCapital')
sortByCapital.addEventListener('click', () => {
    //Get all divs and filter them by what is shown(searched)
    const allDivs = document.querySelectorAll('.card')
    let currentDivs = Array.from(allDivs).filter(div => {
        return div.style.display !== 'none'
    })

    let dataToSort = []
    currentDivs.forEach(div => {
        dataToSort.push(div.querySelector('.card-details').getAttribute('data-capital'))
    })
    if (isSorted(dataToSort)) {
        console.log("Sorted by capital")
        const reverseDiv = Array.from(currentDivs).reverse()
        countryContainer.append(...reverseDiv)
    }
    else {
        console.log("Not sorted by capital")
        currentDivs.sort((a, b) => a.querySelector('.card-details').getAttribute('data-capital').localeCompare(b.querySelector('.card-details').getAttribute('data-capital')))
        countryContainer.append(...currentDivs)
    }
})

//Sort by population
const sortByPopulation = document.getElementById('sortByPopulation')
sortByPopulation.addEventListener('click', () => {
    //Get all divs and filter them by what is shown(searched)
    const allDivs = document.querySelectorAll('.card')
    let currentDivs = Array.from(allDivs).filter(div => {
        return div.style.display !== 'none'
    })

    let dataToSort = []
    currentDivs.forEach(div => {
        dataToSort.push(parseInt(div.querySelector('.card-details').getAttribute('data-population')))
    })
    if(isSorted(dataToSort)){
        console.log("Sorted by Population")
        const reverseDiv = Array.from(currentDivs).reverse()
        countryContainer.append(...reverseDiv)
    }
    else{
        console.log("Not sorted by population")
        currentDivs.sort((a, b) => parseInt(b.querySelector('.card-details').getAttribute('data-population')) - (parseInt(a.querySelector('.card-details').getAttribute('data-population'))))
        countryContainer.append(...currentDivs)
    }
})


//Scroll into chart
const goToChart = document.getElementById('goToChart')
const scrollHere = document.getElementById('chart-container')
goToChart.addEventListener('click', () => {
    scrollHere.scrollIntoView({behavior: 'smooth'})
})

//Go back to the top
const goTop = document.getElementById('goUp')
const scrollTop = document.querySelector('.header')
goTop.addEventListener('click', () => {
    scrollTop.scrollIntoView({behavior: 'smooth'})
})