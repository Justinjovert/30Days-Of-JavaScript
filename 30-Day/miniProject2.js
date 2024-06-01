

const formButton = document.getElementById('form-button')


//Creates a span as an error message
const createErrorMessage = (olderSibling) => {
    olderSibling.style.outline = '2px solid red'
    const form = document.getElementById('form')
    const span = document.createElement('span')
    span.classList.add('error-message')
    form.insertBefore(span, olderSibling.nextSibling)
    return span
}


//Checks if input is valid
//Will create an error message if not
//Else return true with outline green as valid
const isValidExp = (regExp, node, errorMsg) => {
    if (!regExp.test(node.value)) {
        if (node.nextElementSibling.tagName !== 'SPAN') {
            const errorMsgSpan = createErrorMessage(node)
            errorMsgSpan.textContent = errorMsg
        }
        return false
    }
    else {
        if (node.nextElementSibling.tagName === 'SPAN') {
            node.nextSibling.remove()
        }
        node.style.outline = '2px solid limegreen'
        return true
    }
}

formButton.addEventListener('click', event => {

    event.preventDefault()
    let isValid = []

    // Values
    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const telephone = document.getElementById('telephone')
    const bio = document.getElementById('bio')


    //Regular Expressions
    const nameRegExp = /^[A-Za-z\s]{3,}$/
    const emailPattern = /^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/g
    const passwordPattern = /^(?=.*[@\-_\.])(?=.*[A-Z])(?=.*[\d])[A-Za-z\d@\-_\.]{6,}$/
    const telephonePattern = /^\d{3}-\d{3}-\d{4}$/g
    const bioPattern = /^[A-Za-z\s]{3,}$/g

    //Error Messages for each field
    const nameMsg =  ' name must be alphanumeric and contains 3 - 16 characters'
    const emailMsg = 'Email must be a valid address, e.g. example@example.com'
    const passwordMsg = 'Password must be alphanumeric(@._ and - are also allowed) and between 6- 20 characters'
    const phoneMsg = 'A valid Telephone number (11 digits and 333-333-3334)'
    const bioMsg = 'Bio must contain only alphabetic, underscore, hyphens, and be 8 - 50 characters'


    //Push to array if return is true or false
    isValid.push(isValidExp(nameRegExp, firstName, 'First' + nameMsg))
    isValid.push(isValidExp(nameRegExp, lastName, 'Last' + nameMsg))
    isValid.push(isValidExp(emailPattern, email, emailMsg))
    isValid.push(isValidExp(passwordPattern, password, passwordMsg))
    isValid.push(isValidExp(telephonePattern, telephone, phoneMsg))
    isValid.push(isValidExp(bioPattern, bio, bioMsg))

    //Every element must be true to submit
    if(isValid.every(element => element === true)){
        setTimeout(() => {
            alert("Form has been submitted successfully")
        }, 2000);
    }
})
