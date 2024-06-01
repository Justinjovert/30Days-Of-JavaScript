//Update code
//const and let
//Different functions
//Event listener

const displayErrorValue = (value) => {

    //Delete elements to display message
    if(document.getElementById('container')){
        let parentElement = document.getElementById('container')
        parentElement.remove()
    }
    
    if(!document.body.querySelector('#dmContainer')){
        //Center div
        const container = document.createElement('div')
        container.setAttribute('id', 'dmContainer')
        container.style.display = 'flex'
        container.style.justifyContent = 'center'
    
        //Font styling
        const displayMessage = document.createElement('span')
        displayMessage.setAttribute('id', 'displayMessage')
        displayMessage.style.color = 'white'
        displayMessage.style.fontFamily = 'Arial'
        displayMessage.style.fontWeight = '700'
        displayMessage.style.fontSize = '30px'
    
        if (value === 'empty') {
            displayMessage.textContent = "Please insert a mass value"
        }
        else if (value === '!number'){
            displayMessage.textContent = "Please input a number"
        }
        else if (value === 'planet'){
            displayMessage.textContent = "Please select a planet"
        }
    
        document.body.appendChild(container)
        container.appendChild(displayMessage)
    }
    else{
        const displayMessage = document.querySelector('#displayMessage') 

        if (value === 'empty') {
            displayMessage.textContent = "Please insert a mass value"
        }
        else if (value === '!number'){
            displayMessage.textContent = "Please input a number"
        }
        else if (value === 'planet'){
            displayMessage.textContent = "Please select a planet"
        }
    }
    
}


const calculateWeight = (massInput, gravity) => {
    return massInput.value * gravity
}

//IMG PATH
const displayPlanet = (selectedPlanet) => {
    return `./images/${selectedPlanet}.png`
}

const calculate = document.getElementById('calculate')
calculate.addEventListener('click', e => {

    //Selected Planet
    const planetSelect = document.getElementById('planetSelect')
    const selectedPlanet = planetSelect.value
    const massInput = document.getElementById('massInput')
    const gravity = planetSelect.options[planetSelect.selectedIndex].getAttribute('data-gravity')
    
    const content = document.getElementById('content')

    
    if (massInput.value === '') {
        displayErrorValue('empty')
        return
    }

    if (isNaN(parseInt(massInput.value, 10))) {
        displayErrorValue('!number')
        return
    }

    if (selectedPlanet == '') {
        displayErrorValue('planet')
        return
    }



    //Create a div if it has not been created
    if (content.querySelector('#container')) {
        planetImage.src = displayPlanet(selectedPlanet)

        const spanElement = weightContainer.querySelector('#weightSentence')
        spanElement.textContent = "The weight of the " + selectedPlanet.toUpperCase()

        const weight = weightContainer.querySelector('#weight')
        let force = calculateWeight(massInput,gravity)
        weight.textContent = force.toFixed(2) + ' N'

    }
    else {
        const container = document.createElement('container')
        container.setAttribute('id', 'container')
        container.className = 'container'

        const wrapper = document.createElement('wrapper')
        wrapper.className = 'wrapper'


        //Create a div containing a message if mass is empty


        //Get div with id weightContainer
        //Container has span elements
        //Display content by changing span element

        //Create new div with class container
        const weightContainer = document.createElement('div')
        weightContainer.setAttribute('id', 'weightContainer')
        weightContainer.className = 'weightContainer'

        //Create IMG div
        const planetImage = document.createElement('img')
        planetImage.setAttribute('id', 'planetImage')


        //If span exists, change sentence
        //Else create new span element
        const newSpan = document.createElement('span')
        newSpan.setAttribute('id', 'weightSentence')
        newSpan.textContent = "The weight of the " + selectedPlanet.toUpperCase()

        const newDiv = document.createElement('div')
        newDiv.setAttribute('id', 'weight')
        newDiv.className = 'weight'

        let force = calculateWeight(massInput, gravity)
        newDiv.textContent = force.toFixed(2) + ' N'

        weightContainer.appendChild(newSpan)
        weightContainer.appendChild(newDiv)


        //Planet images
        planetImage.src = displayPlanet(selectedPlanet)

        //Append
        wrapper.appendChild(planetImage)
        wrapper.appendChild(weightContainer)
        container.appendChild(wrapper)
        content.appendChild(container)
    }
})