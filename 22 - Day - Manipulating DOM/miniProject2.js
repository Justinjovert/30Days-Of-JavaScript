//Center all elements
const body = () => {
    const allElements = document.querySelectorAll('body')
    allElements.forEach(element => {
        element.style.fontFamily = 'Arial'
        element.style.display = 'flex'
        element.style.flexDirection = 'column'
        element.style.alignItems = 'center'
    });

    const wrapper = document.querySelectorAll('.wrapper')
    wrapper.forEach(element => {
        element.style.display = 'flex'
        element.style.flexDirection = 'column'
        element.style.alignItems = 'center'

    })
}

const allHeaders = (totalCountries) => {
    //All header elements
    const allHeaders = document.querySelectorAll('h1,h2,h3')
    allHeaders.forEach(header => {
        header.style.margin = '0px'
        header.style.margin = '0px'
    })

    //First Header
    const geth1Element = document.querySelector('h1')
    const firstHeader = geth1Element
    firstHeader.style.letterSpacing = '5px'
    firstHeader.style.fontSize = '68px'
    firstHeader.style.marginBottom = '5px'

    //second header
    const geth2Element = document.querySelector('h2')
    const secondHeader = geth2Element
    secondHeader.style.fontSize = '16px'
    secondHeader.style.fontWeight = '100'


    //Third header
    const getH3Element = document.querySelector('h3')
    const thirdHeader = getH3Element
    thirdHeader.style.fontSize = '16px'
    thirdHeader.style.fontWeight = '100'

    //Total Number of Countries
    const numberOfCountries = document.createElement('span')
    numberOfCountries.textContent = `Total Number of Countries: ${totalCountries}`
    numberOfCountries.style.fontSize = '20px'
    numberOfCountries.style.fontWeight = 'bold'
    numberOfCountries.style.marginBottom = '3px'

    //Insert element after 'WORLD COUNTRIES LIST' and before '30DayChallenge'
    firstHeader.parentNode.insertBefore(numberOfCountries, secondHeader)
}

//Create Box for each country
const createBox = (country) => {
    const box = document.createElement('div')

    //Font styling
    box.textContent = country
    box.style.fontSize = '18px'
    box.style.fontWeight = 'bold'

    //Box properties
    box.style.width = '150px'
    box.style.height = '150px'
    box.style.backgroundColor = 'white'
    box.style.border = '2px solid #e4e6e4'
    box.style.borderRadius = '5px'
    box.style.display = 'flex'
    box.style.justifyContent = 'center'
    box.style.alignItems = 'center'
    box.style.textAlign = 'center'
    box.style.margin = '5px'

    return box
}

const countriesAPI = 'https://restcountries.com/v3.1/all'
async function fetchData() {
    try {
        const response = await fetch(countriesAPI)

        if (!response.ok) {
            throw new Error(`HTTP ERROR! Status: ${response.status}`)
        }

        const countries = await response.json()

        //Put total countries
        allHeaders(countries.length)

        //Sort countries
        //Taken from ChatGPT
        const sortCountries = countries.sort((a, b) => {
            const nameA = a.name.common.toUpperCase();
            const nameB = b.name.common.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })

        const columns = 6
        const rows = Math.ceil(countries.length / columns)

        for (let row = 0; row < rows; row++) {
            let rows = document.createElement('div')
            rows.style.display = 'flex'
            rows.style.flexDirection = 'row'
            for (let country = 0; country < columns; country++) {
                if (countries[country]) {
                    rows.appendChild(createBox(sortCountries[country].name.common))
                }
                else {
                    break
                }
            }
            countries.splice(0, columns)
            container.appendChild(rows)
        }
    }
    catch (error) {
        console.error("Error fetching data", error)
    }
}

fetchData()
body()

const container = document.createElement('div')
container.id = 'container'
container.className = 'container'
container.style.display = 'flex'
container.style.flexDirection = 'column'
container.style.marginTop = '3rem'

const wrapperParent = document.querySelector('.wrapper')
wrapperParent.appendChild(container)

