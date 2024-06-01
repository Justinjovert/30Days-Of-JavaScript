
/* ---------------- FUNCTIONS ---------------- */
const generateDataElements = (numbersOfElement) => {
    //Code taken from chatGPT
    //Just shuffle numbers
    let data = [];

    for (let i = 0; i <= numbersOfElement; i++) {
        data.push(i);
    }

    //Shuffle
    /* for (let i = data.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [data[i], data[j]] = [data[j], data[i]];
    } */
    return data
}

//Center all elements
const body = () => {
    const allElements = document.querySelectorAll('body')
    allElements.forEach(element => {
        element.style.fontFamily = 'Arial light'
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

const allHeaders = () => {
    //All header elements
    const allHeaders = document.querySelectorAll('h1,h2,h3')
    allHeaders.forEach(header => {
        header.style.margin = '0px'
    })

    //First Header
    const geth1Element = document.querySelector('h1')
    const firstHeader = geth1Element
    firstHeader.style.color = 'lightgreen'

    //second header
    const geth2Element = document.querySelector('h2')
    const secondHeader = geth2Element
    secondHeader.style.fontSize = '18px'
    secondHeader.style.fontWeight = '100'

    //Third header
    const getH3Element = document.querySelector('h3')
    const thirdHeader = getH3Element
    thirdHeader.style.font = '14px'
    thirdHeader.style.fontWeight = '100'

}

const isPrime = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const createBox = (number) => {
    //Create Div
    const box = document.createElement('div')
    //Fix styling
    box.style.height = "100px"
    box.style.width = '150px'
    box.style.margin = '3px'
    box.style.borderRadius = '2px'
    box.style.display = 'flex'
    box.style.justifyContent = 'center'
    box.style.alignItems = 'center'

    //Fix Font styling
    box.textContent = number
    box.style.color = 'white'
    box.style.fontFamily = 'Arial'
    box.style.fontSize = '62px'


    //Conditions
    //Number is even, odd, or prime
    //Prime code taken from ChatGPT
    if (number % 2 == 0) {
        box.style.backgroundColor = '#21bf73'
    } else {
        box.style.backgroundColor = '#fddb3a'
    }

    if (isPrime(number)) {
        box.style.backgroundColor = '#fd5e53'
    }

    if (number === undefined) {
        box.style.backgroundColor = 'white'
    }
    return box
}

//Display
const displayBoxes = (data) => {

    if (data === undefined || data === null) {
        console.log('space')
    }
    else{
        const parentDiv = document.querySelector('.container')
        parentDiv.innerHTML = ''
        const columns = 6
        const rows = Math.ceil(data.length / columns)

        for (let i = 0; i < rows; i++) {
            let row = document.createElement('div')
            row.style.display = 'flex'
            row.style.flexDirection = 'row'
            for (let j = 0; j < columns; j++) {
                row.appendChild(createBox(data[j]))
            }
            data.splice(0, columns)
            parentDiv.appendChild(row)
        }
}
    }
    


//Wrapper Container
let wrapperParent = document.querySelector('.wrapper')


//Create simple div
const simpleDiv = document.createElement('div')
const inputFeedback = document.createElement('p')

simpleDiv.appendChild(inputFeedback)

//Create input field
const inputContainer = document.createElement('div')
const input = document.createElement('input')
const button = document.createElement('button')


//Input Container
inputContainer.style.margin = '10px 0px 30px 0px'

//Input field
input.style.width = '600px'
input.style.border = '2px solid limegreen'
input.style.padding = '8px 15px'
input.style.fontSize = '20px'

//Button Field
//Styling
button.style.width = 'fit-content'
button.style.margin = '0px 10px'
button.style.padding = '8px 10px'
button.style.backgroundColor = '#47b866'
button.style.color = 'white'
button.style.fontSize = '22px'
button.style.border = '0px'
button.style.cursor = 'pointer'

//Content
button.textContent = 'Generate Numbers'


//Append input, input container, and button
inputContainer.appendChild(input)
inputContainer.appendChild(button)
simpleDiv.appendChild(inputContainer)
wrapperParent.appendChild(simpleDiv)

//Main container
const container = document.createElement('div')
container.className = 'container'
container.style.display = 'flex'
container.style.flexDirection = 'column'
wrapperParent.appendChild(container)





allHeaders()
body()


let numbersOfElement
let data

//Event listener
button.addEventListener('click', () => {
    if (isNaN(input.value)) {
        inputFeedback.textContent = 'Input must be an integer'
        inputFeedback.style.color = 'red'
        inputFeedback.style.fontSize = '14px'
    }
    else {
        inputFeedback.innerHTML = ''
        if(input.value != ''){
            numbersOfElement = input.value
        console.log(numbersOfElement)
        data = generateDataElements(numbersOfElement)
        console.log(data)
        displayBoxes(data)
        }
        
    }
})



