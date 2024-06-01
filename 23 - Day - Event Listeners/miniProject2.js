


const body = document.body

const wrapper = document.querySelector('.wrapper')
const feedback = document.querySelector('.feedback')

const asciiBox = document.createElement('div')


wrapper.appendChild(asciiBox)


body.addEventListener('keydown', e => {


    feedback.classList.add('feedBackP')

    const key = document.createElement('p')
    key.classList.add('feedBackP')
    key.textContent = e.key
    key.style.color = 'limegreen'
    key.style.textShadow = '1px 1px 0px gray'

    const string = 'You pressed '
    feedback.textContent = string
    feedback.appendChild(key)


    //Styling
    asciiBox.style.height = '150px'
    asciiBox.style.width = '120px'
    asciiBox.style.border = '1px solid lightgray'
    asciiBox.style.fontSize = '48px'
    asciiBox.style.fontFamily = 'Comic Sans MS, cursive'
    asciiBox.style.fontWeight = '800'
    asciiBox.style.textShadow = '1px 1px 0px gray'
    asciiBox.style.color = 'limegreen'
    asciiBox.style.display = 'flex'
    asciiBox.style.justifyContent = 'center'
    asciiBox.style.alignItems = 'center'
    asciiBox.style.borderRadius = '10px'
    asciiBox.style.boxShadow = '0px 0px 5px lightgray'
    asciiBox.textContent = e.which


})

