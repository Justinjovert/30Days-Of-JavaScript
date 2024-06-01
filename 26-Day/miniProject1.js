/* DarkMode LightMode */
const themeToggle = document.querySelector('#themeToggle')
let isDarkMode = false
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    isDarkMode = !isDarkMode
})




/* --------- Main content -------------------------------------------- */
/* Everything in the content div container, 
    write javascript code in this part 
*/
const countriesWrapper = document.querySelector('.contentWrapper')

/* Function that fetches the country the user interacted with */

const fetchCountry = async (countryCode, countryDiv, countryName) => {
    //Search country through cca3 code, which is the ID of the country set up
    const searchCCA3 = `https://restcountries.com/v3.1/alpha?codes=${countryCode}`
    try {
        const response = await fetch(searchCCA3)
        const data = await response.json()

        // Only for readability
        // Not referenced anywhere
        const country = {
            cca3ID: data[0].cca3,
            official: data[0].name.official,
            capital: data[0].capital,
            population: data[0].population,
            continents: data[0].continents,
            languages: data[0].languages,
            flag: data[0].flags.png,
            maps: data[0].maps.googleMaps
        }
        let languagesObj = data[0].languages

        // Used setTimeout as a workaround because data is 
        // displayed when transition has not ended
        // Using event listener 'transitionend' does not work 
        // as it intentionally transitions width first and then height

        setTimeout(() => {
            //Organize Language array
            let string = ''
            let keys = Object.keys(languagesObj)
            //Add Condition that if more than 1, then add 'and' before the last
            for (let ctr = 0; ctr < keys.length; ctr++) {
                if (Object.keys(keys).length <= 1) {
                    string = languagesObj[keys[ctr]]
                }
                else if (Object.keys(keys).length == 2) {
                    string = languagesObj[keys[ctr]] + ' and ' + languagesObj[keys[1]]
                    break
                }
                else if (Object.keys(keys).length > 2) {
                    if (ctr == Object.keys(keys).length - 1) {
                        string += ' and ' + languagesObj[keys[ctr]]
                    }
                    else {
                        string += languagesObj[keys[ctr]] + ', '
                    }
                }
            }


            //Country Name DIV
            const cca3Span = document.createElement('span')
            const flagPNG = document.createElement('img')

            flagPNG.src = data[0].flags.png
            flagPNG.alt = 'Country Flag'

            cca3Span.innerHTML = '(' + data[0].cca3 + ')'
            //flagSpan.innerHTML = data[0].flags.png

            countryName.appendChild(cca3Span)
            countryName.appendChild(flagPNG)

            //Country Details
            const official = document.createElement('span')
            const capital = document.createElement('span')
            const population = document.createElement('span')
            const continents = document.createElement('span')
            const languages = document.createElement('span')


            //Apply innerHTML
            official.innerHTML = 'Official: ' + data[0].name.official
            capital.innerHTML = 'Capital: ' + data[0].capital
            population.innerHTML = 'Population: ' + data[0].population.toLocaleString()
            continents.innerHTML = 'Continent: ' + data[0].continents
            languages.innerHTML = 'Languages: ' + string

            countryDiv.appendChild(official)
            countryDiv.appendChild(capital)
            countryDiv.appendChild(population)
            countryDiv.appendChild(continents)
            countryDiv.appendChild(languages)

            const googleMapsAnchor = document.createElement('a')
            const googleMapsIMG = document.createElement('img')


            googleMapsAnchor.target = '_blank'
            googleMapsAnchor.href = data[0].maps.googleMaps
            googleMapsAnchor.style.alignSelf = 'center'

            googleMapsIMG.src = 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg'
            googleMapsIMG.classList.add('googleMaps')

            googleMapsAnchor.appendChild(googleMapsIMG)
            countryDiv.appendChild(googleMapsAnchor)
            countryDiv.classList.add('show')
        }, 500)
    }
    catch (err) {
        return console.error(err)
    }
}


/* Loop all data and create a div with class 'box' for each data*/
const createBox = (dataArray) => {
    for (const data of dataArray) {
        //Create a container for the country
        let countryBox = document.createElement('div')
        countryBox.id = data.cca3
        countryBox.classList.add('box')
        //Create a container for the country name
        let countryName = document.createElement('div')
        countryName.classList.add('countryName')
        let span = document.createElement('span')
        span.id = data.name
        span.classList.add('countrySpan')
        span.innerHTML = data.name.toUpperCase()
        //Append country name container to country box container
        countryName.appendChild(span)
        countryBox.appendChild(countryName)
        countriesWrapper.appendChild(countryBox)
    }
}

/* Function that controls the grid span so it transitions smoothly */
const smoothTransition = (element, column, row) => {
    if (element.classList.contains('active')) {
        /* console.log("Step 2: Success") */
        element.style.gridColumn = 'span 2'
        element.style.gridRow = 'span 2'
    }
    else if (!element.classList.contains('active') && column == 'span 2' && row == 'span 2') {
        /* console.log('Step 3: Success') */
        const transitionEndHandler = () => {
            /* console.log('Step 5: Success') */
            element.style.gridColumn = 'span 1'
            element.style.gridRow = 'span 1'
            element.removeEventListener('transitionend', transitionEndHandler)
        }
        setTimeout(() => {
            element.addEventListener('transitionend', transitionEndHandler)
        }, 400)
    }
    else {
        console.error('All steps failed')
    }
}


    
/* If a country is interacted, switch to a div that has details of that country */
countriesWrapper.addEventListener('click', function (e) {

    // Finds the ancestor element with the class 'box'
    // Regardless if the clicked element is child or grandchild
    const countryElement = e.target.closest('.box')
    const gridSpan = window.getComputedStyle(countryElement);
    let gridColumn = gridSpan.getPropertyValue('grid-column')
    let gridRow = gridSpan.getPropertyValue('grid-row')

    // If the class is active and has been interacted again
    // Hide the details
    if (countryElement.classList.contains('active')) {
        countryElement.classList.toggle('active')
        const countryDetails = countryElement.querySelector('.countryDetails')
        const countryName = countryElement.querySelector('.countryName')
        const countrySpan = countryName.querySelector('.countrySpan')

        const childElements = countryName.children
        smoothTransition(countryElement, gridColumn, gridRow)
        for (const child of childElements) {
            child.style.display = 'none'
        }
        countrySpan.style.display = 'block'

        countryDetails.style.display = 'none'
        countryDetails.classList.remove('show')

    }
    // If data has already been fetched, show div
    // Else create a div and fetch data
    else if (countryElement) {
        //Searches country with the ID and toggle class
        const countryID = countryElement.id
        countryElement.classList.toggle('active')

        smoothTransition(countryElement, gridColumn, gridRow)
        //If there exists a div with class 'countryDetails' with display: none;
        //Display the div 
        if (countryElement.querySelector('.countryDetails')) {
            //Display the cca3 and Flag of the country
            const countryName = countryElement.querySelector('.countryName')
            const childElements = countryName.children

            setTimeout(() => {
                for (const child of childElements) {
                    child.style.display = 'block'
                }
                //Display the details of the country
                const countryDetails = countryElement.querySelector('.countryDetails')
                countryDetails.style.display = 'flex'
                setTimeout(() =>{
                    countryDetails.classList.add('show')
                },10)
            }, 500)
        }
        //Else create a new div with class and fetch data from API
        else {
            smoothTransition(countryElement, gridColumn, gridRow)
            const countryName = countryElement.querySelector('.countryName')
            const countryDetails = document.createElement('div')
            //Use data and add spans of the data
            fetchCountry(countryID, countryDetails, countryName)
            countryDetails.classList.add('countryDetails')
            countryElement.appendChild(countryDetails)
        }

    }
    else {
        console.error('Country Not Found')
    }

})

/* ------------------------------------------------------------- */


/* ------------Fetches restAPI countries------------------  */
// Push all countries into an array by data[index].name.common
// And sort the countries fetched from restAPI
const sortCountries = (countries) => {
    let countriesArray = []
    for (const country of countries) {
        const local = {
            name: country.name.common,
            cca3: country.cca3
        }
        countriesArray.push(local)
    }
    countriesArray.sort((a, b) => a.name.localeCompare(b.name))
    return countriesArray
}

let selectAllDiv
let allCountries
countriesAPI = 'https://restcountries.com/v3.1/all'
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data = data.filter(country => { return country.independent || country.independent === undefined})
        const sortedCountries = sortCountries(data)
        allCountries = sortedCountries
        createBox(sortedCountries)
        selectAllDiv = countriesWrapper.querySelectorAll('.box')
        const totalCountries = document.querySelector('.subHeader')
        totalCountries.innerHTML = 'Total Number of Countries: ' + data.length
    })
    .catch(error => console.error(error))


/* -------------------------------------------------------- */


/* ----------------------Search Function --------------------- */
const inputField = document.getElementById('inputField')
const swButton = document.getElementById('startingWord')
const saButton = document.getElementById('startAny')
const sortOrder = document.getElementById('sortOrder')
const ASCENDING = document.getElementById('ASC')
const DESCENDING = document.getElementById('DSC')



/* Search DIVs with the same user input and ID */
const searchedCountries = (filteredCountries) => {
    let filteredData = []
    filteredCountries.forEach(country => {
        filteredData.push(country.name)
    })
    /* console.log("Filtered Data: "+ filteredData) */
    //Select all divs, and set each div to display none
    //If it is one of the filtered countries, display
    //With this setup, if the user interacts with a backspace or erase all input
    //it will automatically display all divs
    selectAllDiv.forEach(div => {
        const spanElement = div.querySelector('span')
        if (filteredData.includes(spanElement.id)) {
            div.style.display = 'flex'
        }
        else {
            div.style.display = 'none'
        }
    })

}

/* Event listener for input field */
// Searches the country if it matches the inputted text
/* -------------Number of countries feedback--------------- */
let activeButton = swButton
const ccFeedback = document.querySelector('#countryCountFeedback')
const localSpan = document.createElement('span')
const inputSpan = document.createElement('span')
const outputSpan = document.createElement('span')


localSpan.innerHTML = 'Countries Starting With '
inputSpan.classList.add('inputData')
outputSpan.classList.add('outputData')



/* -------------------------------------------------------- */
let filteredCountries
inputField.addEventListener('input', e => {
    let input = e.target.value
    filteredCountries = startsWith(input)
    searchedCountries(filteredCountries)
    if (activeButton == swButton) {
        inputSpan.innerHTML = input.toUpperCase()
        outputSpan.innerHTML = filteredCountries.length
        localSpan.innerHTML = 'Countries starting with ' + inputSpan.outerHTML + ' are ' + outputSpan.outerHTML
    }
    else if (activeButton == saButton) {
        inputSpan.innerHTML = input.toUpperCase()
        outputSpan.innerHTML = filteredCountries.length
        localSpan.innerHTML = 'Countries containing ' + inputSpan.outerHTML + ' are ' + outputSpan.outerHTML
    }
    if (input == '') {
        localSpan.innerHTML = ''
    }
    ccFeedback.appendChild(localSpan)
})

/* Search button filter
    Changes color when other button is clicked and vice versa
    Defaults starting word
*/
// sw = starting With / sa = starting Any
swButton.addEventListener('click', e => {
    activeButton = swButton
    swButton.disabled = true
    saButton.disabled = false
    saButton.style.backgroundColor = '#895be6'
    swButton.style.backgroundColor = '#482f79'
    inputField.dispatchEvent(new Event('input'))
})
saButton.addEventListener('click', e => {
    activeButton = saButton
    swButton.disabled = false
    saButton.disabled = true
    swButton.style.backgroundColor = '#895be6'
    saButton.style.backgroundColor = '#482f79'
    inputField.dispatchEvent(new Event('input'))
})

// Sort Order function
// Returns ascending or descending
const sortOrderADR = () => {
    const currentDiv = countriesWrapper.querySelectorAll('.box')

    const reversedDivs = Array.from(currentDiv)
    reversedDivs.forEach(div => {
        //countriesWrapper.appendChild(div)
        countriesWrapper.insertBefore(div, countriesWrapper.firstChild)
    })
}

//Sort Order event listener
sortOrder.addEventListener('click', e => {
    //Toggle between the two SVGs
    ASCENDING.classList.toggle('toggle')
    DESCENDING.classList.toggle('toggle')

    sortOrderADR()
})



/* Return countries that starts with user input */
const startsWith = (userInput) => {

    const filterFunction = activeButton === swButton
        ? (country) => country.name.toLowerCase().startsWith(userInput.toLowerCase())
        : (country) => country.name.toLowerCase().includes(userInput.toLowerCase())
 
    return allCountries.filter(filterFunction)
}
/* -------------------------------------------------------- */



/* Searchbar shrinks when sticky
    by using event listener*/
/* const searchWrapper = document.querySelector('.searchWrapper')

let wrapperOffsetTop = searchWrapper.offsetTop;

window.addEventListener('scroll', function () {
    //if(window.getComputedStyle(searchWrapper).position === 'sticky')
    let scrollPosition = window.scrollY;
    if (scrollPosition >= wrapperOffsetTop) {
        searchWrapper.classList.add('searchBarSticky')
    }
    else {
        searchWrapper.classList.remove('searchBarSticky')
    }
}) */

// If the div is clicked, toggle to .active class
// Adjust to span 2,
// If the div is clicked and is active
// Adjust dimensions back to original, 150px in this case
// Set the span back to auto after transition
// Delete the event listener to avoid unnecessary calls