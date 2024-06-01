
function rgbColorGenerator() {
    let color = Math.floor(Math.random() * 255)
    return color
}

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

function generateColors(choice, repeat) {
    if (choice == 'hexa') {
        for (let ctr = 0; ctr <= repeat - 1; ctr++) {
            console.log(arrayOfHexaColors())
        }
    }
    if (choice == 'rgb') {
        for (let ctr = 0; ctr <= repeat - 1; ctr++) {
            let rgb = "rgb(" + rgbColorGenerator() + "," + rgbColorGenerator() + "," + rgbColorGenerator() + ")"
            console.log(rgb)
        }
    }

}


generateColors('hexa', 3)
generateColors('rgb', 4)




