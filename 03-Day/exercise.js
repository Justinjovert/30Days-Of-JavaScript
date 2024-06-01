/* let number = prompt('Enter number', 'number goes here')
alert(number)
 */


/* const agree = confirm('Are you sure you like to delete? ')
alert(agree) // result will be true or false based on what you click on the dialog box */

/* const now = new Date()
alert(now) */



/* Declare firstName, lastName, country, city, age, isMarried, year variable 
and assign value to it and use the typeof operator to check different data types. */

/* let firstName = 'Justin'
let lastName = 'Aguillon'
let country = 'PH'
let city = 'CDO'
let age = 25
let isMarried = false
let year = 2022

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year)) */


/* Boolean value is either true or false.

    i. Write three JavaScript statement which provide truthy value.
    ii. Write three JavaScript statement which provide falsy value. */

/* let isTrue = true

isTrue
    ? console.log("Write three JavaScript statement which provide truthy value.")
    : console.log("Write three JavaScript statement which provide falsy value.")

isTrue = false

isTrue
    ? console.log("Write three JavaScript statement which provide truthy value.")
    : console.log("Write three JavaScript statement which provide falsy value.")
 */
/* 
const now = new Date()
console.log(now.getTime()) */




/* Write a script that prompt the user to enter base and height of the triangle 
and calculate an area of a triangle (area = 0.5 x b x h). */

/* let base = prompt('Enter base', '')
let height = prompt('Enter height', '')
let area = 0.5 * base * height
alert('Area is '+(0.5 * base * height)) */

/* Write a script that prompt the user to enter side a, side b, and side c of the triangle and 
and calculate the perimeter of triangle (perimeter = a + b + c) */


/* let sideA = prompt("Enter Side A:", "")
let sideB = prompt("Enter Side B:", "")
let sideC = prompt("Enter Side C:", "")
let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC)

alert(perimeter) */

/* Get length and width using prompt and calculate an area of 
rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) */
/* let length = prompt("Enter Length:", "")
let width = prompt("Enter Width:", "")

let area = length * width
let perimeter = 2 * (parseInt(length) + parent(width))

alert('Area is '+area+'\nPerimeter is '+perimeter) */


/* If the length of your name is greater than 7 say, 
your name is long else say your name is short. */

/* let name = 'JustinJo'

name.length <= 7
    ? console.log("Your name is shorter than 7 characters")
    : console.log('Your name is longer than 7 characters') */


/* Compare your first name length and your family name length 
and you should get this output */
/* 
let firstName = 'Justin'
let lastName = 'Aguillon'

firstName.length > lastName.length
    ? console.log("Your first name, " +firstName+ ", is longer than your last name, " +lastName)
    : console.log("Your last name, " +lastName+ ", is longer than your first name, "+firstName) */


/* Declare two variables myAge and yourAge 
and assign them initial values and myAge and yourAge. */
/* Does not account for same age */

/* let myAge = 25
let yourAge = 250

myAge > yourAge
    ? console.log("I am " +(myAge - yourAge)+ " older than you")
    : console.log("You are " +(yourAge - myAge)+ " older than me") */



/* Using prompt get the year the user was born 
and if the user is 18 or above allow the user to drive 
if not tell the user to wait a certain amount of years. */

/* let birthYear = prompt('Enter birth year', '')

let age = 2023-birthYear
age >= 18
    ? alert("You are " +age+ ". You are old enough to drive")
    : alert("You are " +age+ ". You are not old enough to drive. Wait "+(18-age)+ " year(s).") */


/* Write a script that prompt the user to enter number of years. 
Calculate the number of seconds a person can live. 
Assume some one lives just hundred years */
/* 31,556,952 seconds = 1 year */


/* let age = prompt('Enter age', '')
console.log("You lived " +(age * 31556952)+" seconds") */


/* Create a human readable time format using the Date time object

i. YYYY-MM-DD HH:mm
ii. DD-MM-YYYY HH:mm
iii. DD/MM/YYYY HH:mm
 */

/* const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()


console.log('i. ' +year+'-'+month+'-'+date+' '+hours+':'+minutes)
console.log(`i. ${year}-${month}-${date} ${hours}:${minutes}`)
console.log(`ii. ${date}-${month}-${year} ${hours}:${minutes}`)
console.log(`iii. ${date}/${month}/${year} ${hours}:${minutes}`) */

