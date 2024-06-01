
//Darkmode
const darkModeButton = document.querySelector('.darkMode')
darkModeButton.addEventListener('click', () => {
    darkModeButton.classList.toggle('active')
    document.body.classList.toggle('dark')
    console.log('darkmode')
})


//Name
const name = document.querySelector(".name")
const fullName = justinChallenges2020.author.firstName + ' ' + justinChallenges2020.author.lastName
name.innerHTML = fullName


//Titles
const titleDiv = document.querySelector('.titles')
const titleLogo = document.createElement('span')
const titleText = document.createElement('span')
titleText.classList.add('titleText')
const titles = justinChallenges2020.author.titles


titleLogo.innerHTML = titles[0][0]
titleText.innerHTML = titles[0][1]
titleDiv.appendChild(titleLogo)
titleDiv.appendChild(titleText)
setTimeout(() => {
    titleText.classList.toggle('active')
}, 10);

//Loops through the title
//By removing the last element
//And inserting it on the first element
//current always at 0, 
//that displays the current first element in the DOM
const loopTitles = () => {
    const lastElement = titles.pop()
    titles.unshift(lastElement)
    titleLogo.innerHTML = titles[0][0]
    titleText.innerHTML = titles[0][1]
    titleText.classList.toggle('active')
    setTimeout(() => {
        titleText.classList.toggle('active')
    }, 0);
    
}
setInterval(loopTitles, 2000)


//Bio
const bio = document.querySelector('.bio')
bio.innerHTML = justinChallenges2020.author.bio


/* //Teach */


//Generates a random color for the span
const colorGenerator = () => {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    const color = 'rgb(' + red + ',' + green + ',' + blue + ')'
    return color
}


const teach = document.querySelector('.teach')
const teachSpan = document.createElement('span')
teachSpan.classList.add('teachSpan')
teachSpan.classList.add('active')
teachSpan.style.color = colorGenerator()

const keywords = justinChallenges2020.keywords
teachSpan.innerHTML = keywords[0]
teach.appendChild(teachSpan)


// Default active
// Turns off active to make opacity 0
// Turns on immediately to start transition to opacity 1
const loopKeywords = () => {
    teachSpan.classList.toggle('active')
    setTimeout(() => {
        teachSpan.classList.toggle('active')
    }, 10)
    const lastElement = keywords.pop()
    keywords.unshift(lastElement)
    teachSpan.style.color = colorGenerator()
    teachSpan.innerHTML = keywords[0]
}
setInterval(loopKeywords, 1500)