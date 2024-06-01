

/* const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const button = document.querySelector('button')



let bmi
button.addEventListener('input', () => {
    bmi = mass.value / height.value ** 2
    alert(`Your BMI is ${bmi.toFixed(2)}`)
    console.log(bmi)
}) */


/* const input = document.querySelector('#say')
const p = document.querySelector('p')

input.addEventListener('blur', e => {
    p.textContent = 'Field is required'
    p.style.color = 'red'
}) */


document.body.addEventListener('keypress', e => {
    alert(e.keyCode)
  })