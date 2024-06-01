/* function fullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName)
}

fullName('Justin', 'Aguillon') */


/* function addNumber = (a,b) => {
    sum = a + b
    return sum
}

console.log(addNumber(5,6)) */


/* const addNumber = (a = 1, b = 1) => {
    sum = a + b
    return sum
}

console.log(addNumber())
 */

/* const areaOfRectangle = (length, width) => {
    let area = length * width
    return area
}

console.log(areaOfRectangle(5,6)) */


/* A volume of a rectangular prism is calculated as follows: 
volume = length x width x height. 
Write a function which calculates volumeOfRectPrism. */

/* 
const volumeCalc = (length, width, height) => {
    volume = length * width * height
    return volume 
}
console.log(volumeCalc(5,6,7)) */




/* function genRandomHex() {
    const maxsize = 6
    let hex = ''
    let hexChar
        = ['0', '1', '2', '3', '4', '5',
            '6', '7', '8', '9', 'a', 'b',
            'c', 'd', 'e', 'f']; 

    for(let ctr = 0; ctr <= maxsize; ctr++)
    {
        hex += hexChar[(Math.floor(Math.random() * 16))]
    }
    return hex
}

console.log('#'+genRandomHex()) */


/* function genRandomID() {
    const maxsize = 7
    let hex = ''
    let hexChar
        = ['0', '1', '2', '3', '4', '5',
            '6', '7', '8', '9', 'A', 'B',
            'C', 'D', 'E', 'F']; 

    for(let ctr = 0; ctr <= maxsize; ctr++)
    {
        hex += hexChar[(Math.floor(Math.random() * 16))]
    }
    return hex
}

console.log(genRandomID())
 */


/* function userIdGeneratedByUser(maxsize, N) {
    const hexChar = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];


    for(let i = 0; i < N; i++)
    {
        let hex = ''
        for (let ctr = 0; ctr <= maxsize-1; ctr++) {
            hex += hexChar[(Math.floor(Math.random() * hexChar.length))]
        }
        console.log(hex+"\n")
    }
}

let userPrompt1 = prompt('Enter how many characters', '')
let userPrompt2 = prompt('Enter how many IDs', '')

userIdGeneratedByUser(userPrompt1,userPrompt2)

 */


/* function rgbColorGenerator() {
    let color = Math.floor(Math.random() * 255)
    return color
}

console.log("rgb("+rgbColorGenerator()+","+rgbColorGenerator()+","+rgbColorGenerator()+")") */


/* // Returns RGB Color
function rgbColorGenerator() {
    let color = Math.floor(Math.random() * 255)
    return color
}

function changeColor() {
    const randomColor = "rgb("+rgbColorGenerator()+","+rgbColorGenerator()+","+rgbColorGenerator()+")"
    console.log(randomColor)
    const colorBox = document.getElementById("colorBox")
    colorBox.style.backgroundColor = randomColor
}

 */


/* Look for the index in hex code, and then get hex code and replace it with RGB code */



/* Call your function isEmpty, it takes a parameter and it checks if it is empty or not */

/* 
function isEmpty (parameter) {
    parameter == ''
        ? console.log('Empty')
        : console.log('Not Empty')

}

isEmpty('1')
isEmpty('')
let array = [0,2]
let string = " hello"
isEmpty(array)
isEmpty(string) */



/* Call your function sum, it takes any number of arguments and it returns the sum. */

/* const sum = (...args) => {
    let sum = 0
    for (const element of args) 
    {
        sum += element
    }
    return sum
    
}

console.log(sum(3,5,6))
console.log(sum(8,1,2))
console.log(sum(13,15,16))
 */


/* Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. 
Check if all the array items are number types. If not give return reasonable feedback. */


const sumOfArrayItems = (args) =>
{
    let sum = 0
    const containsNonInteger = args.some(element => !Number.isInteger(element));
    
    if (containsNonInteger) {
        console.log('The array contains at least one non-integer element.');
        return false
      } else {
          for (let ctr = 0; ctr <= args.length-1; ctr++)
          {
              sum = sum + parseInt(args[ctr])
          }
          //return sum
          return sum/args.length
      }

}


let Array1 = [1,2,3]
let Array2 = [1,'2',3]
let Array3 = ['string', 2, 3]
console.log(sumOfArrayItems(Array1))
console.log(sumOfArrayItems(Array2))
console.log(sumOfArrayItems(Array3))


/* Write a function called modifyArray takes array as parameter and 
modifies the fifth item of the array and return the array. 
If the array length is less than five it return 'item not found'.
 */

const modifyArray = (arr) => {
    if(arr.length < 5)
    {
        console.log("It seems there is a lack of elements of the Array")
        return
    }
    arr[4] = arr[4].toUpperCase()
    console.log(arr)
}

let array = ['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']
let array2 = ['Google', 'Facebook','Apple', 'Amazon']
modifyArray(array)
modifyArray(array2)