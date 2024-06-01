const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return color = 'rgb(' + r + ',' + g + ',' + b + ')'
}


//text properties
const randomFunction = () => {

    //Fonts
    const fonts = [
        "Arial",
        "Helvetica",
        "Times New Roman",
        "Courier New",
        "Verdana",
        "Georgia",
        "Palatino",
        "Garamond",
        "Bookman",
        "Comic Sans MS",
        "Trebuchet MS",
        "Arial Black",
        "Impact",
        "Lucida Console",
        "Lucida Sans Unicode",
        "Tahoma",
        "Geneva",
        "MS Sans Serif",
        "MS Serif",
        "Apple Chancery",
        "Zapf Chancery",
        "Futura",
        "Century Gothic",
        "Optima",
        "Avant Garde",
        "Gill Sans",
        "Copperplate",
        "Baskerville",
        "Rockwell",
        "Franklin Gothic",
        "ITC Officina Sans",
        "Seravek",
        "Avenir",
        "Bodoni",
        "Didot",
        "Minion",
        "Myriad",
        "Hoefler Text",
        "Futura",
        "Frutiger",
        "Univers",
        "Fira Sans",
        "Open Sans",
        "Roboto",
        "Lato",
        "Montserrat",
        "Raleway",
        "Ubuntu",
        "Noto Sans",
        "Poppins",
        "Droid Sans",
        "Oswald",
        "Merriweather",
        "Playfair Display",
        "Cormorant",
        "EB Garamond",
        "Libre Baskerville",
        "Josefin Sans",
        "Karla"
      ];

    const fontWeight = [100, 400, 600, 900]

    const randomIndexFont = Math.floor(Math.random() * fonts.length)
    const randomIndexWeight = Math.floor(Math.random() * fontWeight.length)

    const texts = document.querySelectorAll('.text')
    texts.forEach(text => {
        const combinedSpan = document.createElement('span')
        for (const letter of text.textContent) {
            const letterSpan = document.createElement('span')
            letterSpan.innerHTML = letter
            letterSpan.style.color = getRandomColor()
            combinedSpan.appendChild(letterSpan)
        }
        text.innerHTML = combinedSpan.outerHTML
        console.log(text.textContent)
        text.style.fontFamily = fonts[randomIndexFont]
        text.style.fontWeight = fontWeight[randomIndexWeight]
    });
    const mainContainer = document.querySelector('.main-container')
    mainContainer.style.backgroundColor = getRandomColor()
    
}

setInterval(() => {
    const texts = document.querySelectorAll('.text')
    texts.forEach(text => {
        text.classList.toggle('opacity')
    })
    randomFunction()
    setTimeout(() => {
        texts.forEach(text => {
            console.log('removed')
            text.classList.toggle('opacity')
        })
    }, 2000);
}, 3000);


//background color 
const background = document.querySelector('.main-container')
background.style.backgroundColor = getRandomColor()