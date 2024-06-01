
/* ---------------- FUNCTIONS ---------------- */
const generateDataElements = () => {
    //Code taken from chatGPT
    //Just shuffle numbers
    let data = [];

    for (let i = 0; i <= 101; i++) {
        data.push(i);
    }

    //Shuffle
    for (let i = data.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [data[i], data[j]] = [data[j], data[i]];
    }
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

    //second header
    const geth2Element = document.querySelector('h2')
    const secondHeader = geth2Element
    secondHeader.style.font = '20px'
    secondHeader.style.fontWeight = '100'

    secondHeader.style.textDecoration = 'underline'

    //Third header
    const getH3Element = document.querySelector('h3')
    const thirdHeader = getH3Element
    thirdHeader.style.font = '16px'
    thirdHeader.style.fontWeight = '100'
    thirdHeader.style.textDecoration = 'underline'

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

    if(number === undefined){
        box.style.backgroundColor = 'white'
    }
    return box
}


//Create a div for the main content
let wrapperParent = document.querySelector('.wrapper')
const container = document.createElement('div')
container.className = 'container'
container.style.display = 'flex'
container.style.flexDirection = 'column'
wrapperParent.appendChild(container)


allHeaders()
body()


const data = generateDataElements()
console.log(data)


const parentDiv = document.querySelector('.container')
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

