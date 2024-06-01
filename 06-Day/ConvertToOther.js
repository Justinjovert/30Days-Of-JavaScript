
/* Returns Hexa color */
function arrayOfHexaColors() {
    const maxsize = 6
    let hex = '#'
    let hexChar
        = ['0', '1', '2', '3', '4', '5',
            '6', '7', '8', '9', 'A', 'B',
            'C', 'D', 'E', 'F'];

    for (let ctr = 0; ctr <= maxsize - 1; ctr++) {
        hex += hexChar[(Math.floor(Math.random() * 16))]
    }
    return hex
}


function rgbColorGenerator() {
    let color = Math.floor(Math.random() * 255)
    return color
}

//Convert to Hex and return Hex code
function deliverRGBCode(rgbCode) {
    const removeChar= /[rgb()]/g;
    rgbCode.replace(removeChar,'')
    let rgbArray = rgbCode.replace(removeChar,'').split(',')
    let hexCode = '#'
    let hexChar
        = ['0', '1', '2', '3', '4', '5',
            '6', '7', '8', '9', 'A', 'B',
            'C', 'D', 'E', 'F'];

    for(let ctr = 0; ctr <= rgbArray.length -1; ctr++)
    {
        let product = rgbArray[ctr]/16
        const integerPart = Math.floor(product);
        const decimalPart = product - integerPart;
        let secondValue = decimalPart*16
        hexCode += (hexChar[integerPart])
        hexCode += (hexChar[secondValue])
    }
    return hexCode
}


/* Change it to RGB */
function changeToRGB(hexCodeAr) {
    let hexChar
        = ['0', '1', '2', '3', '4', '5',
            '6', '7', '8', '9', 'A', 'B',
            'C', 'D', 'E', 'F'];
    for (let ctr = 0; ctr <= hexCodeAr.length - 1; ctr++) {
        //Compare element to hexChar and change its value with its index

        for (let i = 0; i <= hexChar.length - 1; i++) {
            if (hexCodeAr[ctr] == hexChar[i]) {
                hexCodeAr[ctr] = i
                break
            }
        }
    }
    return hexCodeAr
}

const convertToColorCode = (array) => {
    console.log(array)
    return (array[0] * 16) + (array[1])
}

function deliverHexCode(hexCode) {
    console.log(hexCode)
    let a = hexCode.toUpperCase()
    let hexCodeAr = a.split('')
    hexCodeAr.shift()
    console.log(hexCodeAr)
    console.log(changeToRGB(hexCodeAr))
    let red = hexCodeAr.slice(0, 2)
    let green = hexCodeAr.slice(2, 4)
    let blue = hexCodeAr.slice(4, 6)
    let rgb = "rgb(" + convertToColorCode(red) + "," + convertToColorCode(green) + "," + convertToColorCode(blue) + ")"
    return rgb
}

function changeColorToRGB() {
    const randomColor = arrayOfHexaColors()
    /* deliverHexCode(randomColor) */
    const rgbConverted = deliverHexCode(randomColor)
    console.log(rgbConverted)
    // Apply the random color to the HTML element
    const colorBox1 = document.getElementById("colorBox1")
    const colorBox2 = document.getElementById("colorBox2")
    colorBox1.style.backgroundColor = randomColor
    colorBox2.style.backgroundColor = rgbConverted
}



// Generate a random RGB Color
// Convert RGB Color to Hex Code
function changeColorToHex() {
    const randomRGBColor = "rgb(" + rgbColorGenerator() + "," + rgbColorGenerator() + "," + rgbColorGenerator() + ")"
    const hexConverted = deliverRGBCode(randomRGBColor)    

    //When called, it returns RGB color
    const colorBox2 = document.getElementById("colorBox2")
    colorBox2.style.backgroundColor = randomRGBColor
    
    //Change first box color with hex color
    const colorBox1 = document.getElementById("colorBox1")
    colorBox1.style.backgroundColor = hexConverted
}