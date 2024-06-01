/* 
The year color is changing every 1 second
The date and time background color is changing every on seconds
Completed challenge has background green
Ongoing challenge has background yellow
Coming challenges have background red 
*/


const changeColor = () => {
    lastWord.style.color = getRandomColor()
    date.style.backgroundColor = getRandomColor()
    updateColor()
    setTimeout(changeColor, 1000)
}

const getRandomColor = () => {
    const LIMIT_VALUE = 256;
    const red = Math.floor(Math.random() * LIMIT_VALUE);
    const green = Math.floor(Math.random() * LIMIT_VALUE);
    const blue = Math.floor(Math.random() * LIMIT_VALUE);
    return `rgb(${red}, ${green}, ${blue})`;
}

const updateColor = () => {
    const modifiedText = arrayOfH1.join(' ') + ' ' + lastWord.outerHTML
    h1Element[0].innerHTML = modifiedText

}

//Control whole content spacing
const wrapper = () => {
    const allElements = document.querySelectorAll('body')
    allElements.forEach(element => {
        element.style.fontFamily = 'Arial'
        element.style.display = 'flex'
        element.style.flexDirection = 'column'
        element.style.alignItems = 'center'
    });
}
//Align items inside wrapper
const secondWrapper = () => {
    const allElements = document.querySelectorAll('.wrapper')
    allElements.forEach(element => {
        element.style.display = 'flex'
        element.style.flexDirection = 'column'
        element.style.alignItems = 'center'
    });
}



const formatDate = () => {
    const months = ['January', 'February', 'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const now = new Date()
    const day = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
    const time = `${(now.getHours() < 10 ? '0' : '') + now.getHours()}:${(now.getMinutes() < 10 ? '0' : '') + now.getMinutes()}:${(now.getSeconds() < 10 ? '0' : '') + now.getSeconds()}`
    return day + ' ' + time
}

const updateTime = () => {
    date.textContent = formatDate()
    //Insert new element after h2Element and before UL element
    const h2Element = document.querySelector('h2')
    const ulElement = document.querySelector('ul')
    h2Element.parentNode.insertBefore(date, ulElement)
   
    setTimeout(updateTime, 1000)
}


/* ----------- LIST ELEMENTS-------------- */
const listsELements = (list) =>{
    list.style.padding = "20px"
    list.style.borderRadius = '5px'
    list.style.width = '500px'
    list.style.margin = '2px'
    list.style.listStyleType = 'none'
    let lastWord = list.textContent.split(' ').pop()
    lastWord = lastWord.toLowerCase()
    switch(lastWord){
        case 'done':
            list.style.backgroundColor = '#5cff00'
            break
        case 'ongoing':
            list.style.backgroundColor = '#ffd600'
            break
        case 'coming':
            list.style.backgroundColor = '#ff6879'
            break
        default:
            console.error('No list')
    }
}




/* ---------------- TIME --------------- */
//Created a new span
//Tells current time that changes color every second
const date = document.createElement('span')
//Styles
date.style.backgroundColor = getRandomColor()
date.style.padding = '10px'
date.style.borderRadius = '2px'
//Change color and update time every second
date.textContent = formatDate()
updateTime()

/* -------------- h1 ELEMENT ------------ */
const h1Element = document.getElementsByTagName('h1')
const arrayOfH1 = Array.from(h1Element[0].textContent.split(' '))

//Replace name
arrayOfH1[0] = 'Justin'
arrayOfH1[1] = 'Aguillon'


//Get last Word
const lastWord = document.createElement('span')
lastWord.textContent = arrayOfH1.pop()
lastWord.style.fontSize = '68px'
lastWord.style.color = getRandomColor()
wrapper()
secondWrapper()
changeColor()


/* -------------- h2 ELEMENT ------------ */
//30DaysOfJavaScript Challenge
const getSecondHeader = document.getElementsByTagName('h2')
const secondHeader = getSecondHeader[0]
secondHeader.style.fontSize = '20px'
secondHeader.style.fontWeight = '100'
secondHeader.style.textDecoration = 'underline'



/* -------------- UL ELEMENT ------------ */
const getLI = document.getElementsByTagName('li')
for(const li of getLI){
    listsELements(li)
}


