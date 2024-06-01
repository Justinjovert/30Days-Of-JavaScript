
/* API */
const countriesAPI = 'https://restcountries.com/v2/all'


/* Top ten population */
const fetchPop = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()

        const populationList = new Map()
        updateCountriesTotal(countries.length)

        for (const country of countries) {
            populationList.set(country.name, country.population)
        }

        const listArr = Array.from(populationList)
        const sortedPopList = listArr.sort((a, b) => b[1] - a[1])

        //Total Population Testing
        let totalPopulation = 0
        sortedPopList.forEach(population => {
            totalPopulation = totalPopulation + population[1]
        })
        console.log('Total Population: ' + totalPopulation)
        console.log(sortedPopList[0])
        if(sortedPopList.unshift(['World', totalPopulation])){
            console.log(true)
        }
        console.log(sortedPopList.slice(0, 10))
        //

        return sortedPopList.slice(0, 10)

    }
    catch (err) {
        return console.error(err)
    }
}


/* Total Number of Countries */
const updateCountriesTotal = (countriesData) => {
    const totalCountries = document.getElementById('totalCountries')
    totalCountries.innerHTML = 'Currently, we have ' + countriesData + ' Countries'
}


/* Top ten languages */
const fetchLang = async () => {
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
        const sortByDesc = listArr.sort((a, b) => b[1] - a[1])
        return sortByDesc.slice(0, 10)
    } catch (err) {
        return console.error(err)
    }
}

/* Function that changes the phrase when the button is clicked */
/* 
    Option argument. 
                    0 for Population
                    1 for Language                    
*/
const phraseChanger = (option) => {
    const phrase = document.getElementById('phrase')
    option == 0
        ? phrase.innerHTML = '10 Most Populated Countries'
        : phrase.innerHTML = '10 Most Spoken Languages'
}


/* Function that creates the cart */
let previousChart = null
let barChart
let labelColor

const initChart = (myChart, labels, data, phraseLabel) => {

    if (previousChart) {
        previousChart.destroy()
    }

    barChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: phraseLabel,
                data: data,
                backgroundColor: 'orange',
                borderWidth: 0,
                barThickness: 40,
            }
            ]
        },
        options: {
            indexAxis: 'y',
            plugins: {
                legend: {
                    labels: {
                        color: 'rgb(100, 100, 100)'/* labelColor */
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,

                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        display: false,

                    },
                },
                y: {
                    grid: {
                        display: false,
                        zeroLineColor: 'transparent'
                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        align: 'center',
                    },
                    display: false
                },
            },
            maintainAspectRatio: false,
            responsive: true,

        }
    })

    previousChart = barChart
}

/* Display Labels of the chart */
const dataLabel = document.querySelector('#dataLabels')
const dataLabels = (label) => {
    dataLabel.innerHTML = ''
    for (let ctr = 0; ctr < label.length; ctr++) {
        let labelSpan = document.createElement('span')
        labelSpan.setAttribute('id', 'labelSpan')
        labelSpan.classList.add('dataSpan')
        labelSpan.textContent = label[ctr]

        dataLabel.appendChild(labelSpan)
    }
}

/* Dispaly data line of the chart */
const dataChart = document.querySelector('#dataChart')
const dataCharts = (data) => {
    dataChart.innerHTML = ''
    for (let ctr = 0; ctr < data.length; ctr++) {
        let dataSpan = document.createElement('span')
        dataSpan.setAttribute('id', 'dataSpan')
        dataSpan.classList.add('dataSpan')
        const formattedNumber = data[ctr].toLocaleString('en-US')
        dataSpan.textContent = formattedNumber

        dataChart.appendChild(dataSpan)
    }
}


/* Retrieve Data from API */
//Population, first tab
/* const resultPop = fetchPop()
resultPop.then(language => {

    const labels = language.map(([name]) => name);
    popLabelsArr = Array.from(labels)
    const data = language.map(([, count]) => count);
    popDataArr = Array.from(data)

    const phraseLabel = 'Population of Countries'
    dataLabels(popLabelsArr)
    initChart(popChart, popLabelsArr, popDataArr, phraseLabel)
    dataChart(popDataArr)
}) */


/* Move tab to footer tab */
const moveTabFooter = () => {
    let tab = document.getElementById('buttons')
    let footer = document.getElementById('footerContainer')
    if (tab && footer) {
        let tabButton = tab.querySelector('button')

        tab.classList.add('footerBar')
        footer.appendChild(tab)
    }
}

/* Move Footer Tab to top Tab */
const moveFooterTab = () => {
    let tab = document.getElementById('buttons')
    let topTab = document.getElementById('clickableContainer')
    let siblingElement = document.getElementById('phrase')
    if (tab && topTab) {
        tab.classList.remove('footerBar')
        topTab.insertBefore(tab, siblingElement)
    }
}


/* ---------------- CHANGE TAB COLOR -------------- */
//Population tab has ccButton-active by default
const tabPop = document.querySelector('#popButton')
tabPop.classList.add('ccButton-active')
const tabLang = document.querySelector('#langButton')

let previousButtonActive = tabPop
const changeTabColor = (buttonElement) => {
    if (previousButtonActive.classList.contains('ccButton-active')) {
        previousButtonActive.classList.remove('ccButton-active')
        previousButtonActive = buttonElement
        previousButtonActive.classList.add('ccButton-active')
    }
    else {
        console.error("Change Tab Color: Mission Failed.")
    }
}
/* ------------------------------------------------ */

let popLabelsArr = null
let popDataArr = null
let popChart = document.getElementById('populationChart').getContext('2d')

//Language, second Tab
let langLabelsArr = null
let langDataArr = null
let langChart = document.getElementById('languageChart').getContext('2d')


/* POPULATION AND LANGUAGE TABBING */
const populationTab = document.getElementById('population')
const languageTab = document.getElementById('languages')





/* ---------------- TOP TEN POPULATION ------------ */

tabPop.addEventListener('click', e => {
    changeTabColor(tabPop)

    phraseChanger(0)
    languageTab.style.display = 'none'
    populationTab.style.display = 'flex'
    const phraseLabel = 'Population of Countries'

    if (popLabelsArr == null) {
        const resultPop = fetchPop()
        resultPop.then(population => {

            const labels = population.map(([name]) => name);
            popLabelsArr = Array.from(labels)
            const data = population.map(([, count]) => count);
            popDataArr = Array.from(data)

            console.log(popLabelsArr)
            console.log(popDataArr)
            dataLabels(popLabelsArr)
            initChart(popChart, popLabelsArr, popDataArr, phraseLabel)
            dataCharts(popDataArr)
        })
    } else {
        dataLabels(popLabelsArr)
        initChart(popChart, popLabelsArr, popDataArr, phraseLabel)
        dataCharts(popDataArr)
    }


})
/* ------------------------------------------------ */


/* ---------------- TOP TEN LANGUAGE Fetch --------- */
tabLang.addEventListener('click', e => {


    dataLabel.innerHTML = ''
    dataChart.innerHTML = ''

    populationTab.style.display = 'none'
    languageTab.style.display = 'flex'
    changeTabColor(tabLang)
    phraseChanger(1)
    const phraseLabel = 'Most spoken languages'

    if (langLabelsArr == null) {
        const resultLang = fetchLang()
        resultLang.then(language => {
            const labels = language.map(([name]) => name);
            langLabelsArr = Array.from(labels)
            const data = language.map(([, count]) => count);
            langDataArr = Array.from(data)

            dataLabels(langLabelsArr)
            initChart(langChart, langLabelsArr, langDataArr, phraseLabel)
            dataCharts(langDataArr)
        })
    }
    else {
        dataLabels(langLabelsArr)
        initChart(langChart, langLabelsArr, langDataArr, phraseLabel)
        dataCharts(langDataArr)
    }


})
/* -------------------------------------------------- */

/* Dispatch population event listener */
tabPop.dispatchEvent(new Event('click'))


/*  Move DOM to footer  */
/*  Note: At this point of time, I don't know how to use media query
    to elements with event listeners
    Best solution I can think as of now. */

function tabResize() {
    let screenWidth = window.innerWidth
    if (screenWidth <= 576) {
        moveTabFooter()
    }
    else {
        moveFooterTab()
    }
}

tabResize()

window.addEventListener('resize', tabResize)


/* DarkMode LightMode */
const themeToggle = document.querySelector('#themeToggle')
let isDarkMode = false
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    isDarkMode = !isDarkMode
    updateChartColor()
})
/* 
const updateChartColor = () => {
    console.log("im in")
    labelColor = isDarkMode ? 'white' : 'rgb(100, 100, 100)'
    barChart.options.plugins.legend.labels.color = labelColor;
    barChart.update()
} */
/* ------------------ */