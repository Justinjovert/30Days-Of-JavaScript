





/* Create an array that stores objects
 * Objects holds the data of the players
 * Data consists of name, date creation, country, and score */
let playersArray = []
let playerID = 2
let feedback = document.querySelector('#feedbackField')

//Starting Data for sample
const insertStartingData = () => {
    const player1 = {
        id: 0,
        firstName: 'Martha',
        dateCreated: 'April 16, 2024',
        lastName: 'Sky',
        country: 'FINLAND',
        score: '85'
    }
    const player2 = {
        id: 1,
        firstName: 'Mark',
        dateCreated: 'April 16, 2024',
        lastName: 'Grey',
        country: 'FINLAND',
        score: '95'
    }

    playersArray.push(player1)
    playersArray.push(player2)
    let playersJSON = JSON.stringify(playersArray, undefined, 4)
    localStorage.setItem('Players', playersJSON)
    //console.log(localStorage.getItem('Players'))
}


//Get current date
const getDate = () => {
    const currentDate = new Date();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const month = currentDate.getMonth()
    const day = currentDate.getDate()
    const year = currentDate.getFullYear()

    const today = `${monthNames[month]} ${day}, ${year}`
    return today
}

//Leaderboard
const leaderboard = document.querySelector('.leaderboard')
//If score is higher than the other, move up else move down
//If same, as is
const updateLeaderboard = () => {
    const scoreboards = document.querySelectorAll('.scoreboard')
    const sortScoreboard = Array.from(scoreboards)
    sortScoreboard.sort((a, b) => {
        return b.querySelector('#score').innerHTML - a.querySelector('#score').innerHTML
    })
    sortScoreboard.forEach(scoreboard => {
        leaderboard.insertBefore(scoreboard, null)
    })
}
updateLeaderboard()

//Add data to HTML
let uid = 0
const createElement = (newPlayerObj) => {
    const scoreboard = document.querySelector('#id0')
    leaderboard.appendChild(scoreboard.cloneNode(true))

    //Select contents
    let fullName = scoreboard.querySelector('.fullName')
    let dateCreated = scoreboard.querySelector('.dateCreated')
    let country = scoreboard.querySelector('#country')
    let score = scoreboard.querySelector('#score')

    //Change content
    fullName.innerHTML = newPlayerObj.firstName + ' ' + newPlayerObj.lastName
    dateCreated.innerHTML = getDate()
    country.innerHTML = newPlayerObj.country
    score.innerHTML = newPlayerObj.score

    scoreboard.style.display = "flex"
    scoreboard.id = uid
    uid += 1
    leaderboard.appendChild(scoreboard)
    updateLeaderboard()
}

//Function that parses 
const parseDATA = () => {
    let dataSTRINGIFY = localStorage.getItem('Players')
    let dataJSON = JSON.parse(dataSTRINGIFY, undefined, 4)
    return dataJSON
}

//Function that stringify
const stringifyDATA = (dataJSON) => {
    const stringifyDATA = JSON.stringify(dataJSON, undefined, 4)
    localStorage.setItem('Players', stringifyDATA)
}


//Create an object of data
//And push it into the array
//Store Array to localStorage
const addData = (firstName, lastName, country, score) => {
    //Player object
    const newPlayer = {
        id: playerID,
        firstName: firstName,
        dateCreated: getDate(),
        lastName: lastName,
        country: country,
        score: score
    }
    //Retrieve Array from localStorage
    //Parse it, push the data, stringify, and put it again on localStorage
    let updatedPlayers = parseDATA()
    //Check if player exists using first name and last name
    let fullName = newPlayer.firstName + newPlayer.lastName
    const doesExist = updatedPlayers.some(player => player.firstName + player.lastName == fullName)
    if (doesExist) {
        feedback.innerHTML = 'Player already exists'
        return
    }
    updatedPlayers.push(newPlayer)
    stringifyDATA(updatedPlayers)
    createElement(newPlayer)
    playerID += 1
}

//Delete data
//Fetch array from localStrage
//Pop data
const deleteData = (fullName) => {
    let playersArray = parseDATA()
    for (let i = 0; i < playersArray.length; i++) {
        if (fullName === playersArray[i].firstName + ' ' + playersArray[i].lastName) {
            playersArray.splice(i, 1)
        }
    }
    stringifyDATA(playersArray)
}

/* Input fields */
const addPlayer = document.querySelector('.input-addPlayer')
addPlayer.addEventListener('click', () => {
    // Checks if the input fields are empty, otherwise feedback 
    const inputFields = document.querySelectorAll('.input-field')

    const fieldNotEmpty = Array.from(inputFields).every(field => field.value !== '')

    if (fieldNotEmpty) {
        //If score is higher than 100, return
        if (inputFields[3].value > 100) {
            feedback.innerHTML = 'Maximum score is 100'
            return
        }
        //Add variables
        let firstName = inputFields[0].value;
        let lastName = inputFields[1].value;
        let country = inputFields[2].value;
        let score = inputFields[3].value;
        //Remove danger
        inputFields.forEach(field => {
            field.classList.remove('input-field-danger')
        })
        addData(firstName, lastName, country, score)
    }
    else {
        inputFields.forEach(field => {
            if (field.value == '') {
                feedback.innerHTML = 'All fields are required'
                field.classList.add('input-field-danger')
            }
            else {
                field.classList.remove('input-field-danger')
            }
        })
    }
})


//Checks if there already exists data
insertStartingData()
if (playersArray != null) {
    playersArray.forEach(player => {
        createElement(player)
    })

}

const sampleFunction = (argument) => {
    return moveDownKeyframes = `
        @keyframes moveDown-${argument} {
            0% { transform: translateY(0px) translateX(0px); }
            25% {transform: translateY(${argument * 0.25}px)  translateX(10px); }
            50% {transform: translateY(${argument * 0.50}px) translateX(20px);}
            75% {transform: translateY(${argument * 0.75}px) translateX(10px);}
            100% {transform: translateY(${argument}px) translateX(0px);}
        }`

}

//Checks new bounding client rect
const checkAll = () => {
    const scoreboards = document.querySelectorAll(".scoreboard")
    let scoreboardsArray = Array.from(scoreboards)

    let rectArray = scoreboardsArray.map(element => element.getBoundingClientRect())
    rectArray.forEach(element => {
        console.log('element top: ', element.top)
    })
}

const move = (above, current) => {
    //checkAll()
    const furthest = above[above.length - 1]
    const furtestRect = furthest.getBoundingClientRect()
    const currentRect = current.getBoundingClientRect()
    const moveUpDiv = furtestRect.top - currentRect.top
    /* const moveDownDiv = currentRect.top - furthest.top */

    //Loop array and get bounding client
    //Move down index by - 1 or + 1
    const rectArray = above.map(element => element.getBoundingClientRect())
    let newArrayTest = []
    //From top to down
    for (let i = rectArray.length - 1; i >= 0; i--) {

        if (!rectArray[i - 1]) {
            newArrayTest[0] = parseInt(currentRect.top) - parseInt(rectArray[i].top)
            break
        } else {
            newArrayTest[i] = parseInt(rectArray[i - 1].top) - parseInt(rectArray[i].top)
        }
    }
    const moveUpKeyframes = `
        @keyframes moveUp {
            0% {transform: translateY(0px) translateX(0px);}
            25{ 25% {transform: translateY(${moveUpDiv * 0.25}px)  translateX(-10px);}}
            50% {transform: translateY(${moveUpDiv * 0.50}px) translateX(-20px);}
            75% {transform: translateY(${moveUpDiv * 0.75}px) translateX(-10px);}
            100% {transform: translateY(${moveUpDiv}px) translateX(0px);}
        }`

    var style = document.createElement('style');
    document.head.appendChild(style);

    // Add the keyframes to the <style> element
    style.sheet.insertRule(moveUpKeyframes, 0);
    /* style.sheet.insertRule(moveDownKeyframes, 1); */

    current.classList.add('moveUp')
    current.classList.add('move-up')


    //classlist add for each element in rectArray
    for (let index = 0; index < above.length; index++) {
        style.sheet.insertRule(sampleFunction(newArrayTest[index]), index + 1);
        above[index].classList.add(`moveDown-${newArrayTest[index]}`)
        above[index].style.animation = `moveDown-${newArrayTest[index]} 0.5s linear`
    }

    /* current.addEventListener('animationend', () => {
        for (let index = 0; index < above.length; index++) {
            above[index].classList.remove(`moveDown-${newArrayTest[index]}`)
            above[index].style.animation = ''
        }
    }) */
    setTimeout(() => {
        for (let index = 0; index < above.length; index++) {
            above[index].classList.remove(`moveDown-${newArrayTest[index]}`)
            above[index].style.animation = ''
        }
    }, 500);


    return current
}


//Checks if player has higher or lower score
const climbPlayer = (ladder, thisPlayer) => {
    let ladderArr = Array.from(ladder)
    console.log("Ladder Array: ", ladderArr)
    let index = ladderArr.indexOf(thisPlayer)

    let currentPlayer = parseInt(ladderArr[index].querySelector('#score').innerHTML)
    let belowPlayer = parseInt(ladderArr[index + 1].querySelector('#score').innerHTML)
    let abovePlayer
    if (ladderArr[index - 1] !== undefined) {
        abovePlayer = parseInt(ladderArr[index - 1].querySelector('#score').innerHTML)
    }

    if (currentPlayer > abovePlayer) {
        console.log("Move Player above")
        let i = 1
        //Make an array consisting of above players nodes OR array map/filter
        //Pass it as an argument for function
        //Loop each array and add animation
        //Return and remove all animation
        //Insert each above player
        const aboveArray = []
        while (parseInt(ladderArr[index - i].querySelector('#score').innerHTML) < currentPlayer) {
            aboveArray.push(ladderArr[index - i])
            if (ladderArr[index - (i + 1)]) {
                i++
            }
            else {
                break
            }
        }
        thisPlayer = move(aboveArray, thisPlayer)
        /* thisPlayer = move(ladderArr[index - 1], thisPlayer) */
        //While current player has a higher score than above, insert
        //Cases where there are multiple same scores above the player
        //After transition ends, manipulate DOM
        setTimeout(() => {
            thisPlayer.classList.remove('moveUp')
            thisPlayer.classList.remove('move-up')


            //While i amount of players have lower score than current player
            //Keep inserting
            let ctr = 1
            while (parseInt(ladderArr[index - ctr].querySelector('#score').innerHTML) < currentPlayer) {
                leaderboard.insertBefore(thisPlayer, ladderArr[index - ctr])
                ladderArr[index - ctr].classList.remove('moveDown')
                ladderArr[index - ctr].classList.remove('move-down')
                console.log("MOVE UP SUCCESSFUL")

                if (ladderArr[index - (ctr + 1)]) {
                    ctr++
                }
                else {
                    break
                }

            }
        }, 500);
        /* thisPlayer.addEventListener('animationend', () => {
            thisPlayer.classList.remove('moveUp')
            thisPlayer.classList.remove('move-up')


            //While i amount of players have lower score than current player
            //Keep inserting
            let ctr = 1
            while (parseInt(ladderArr[index - ctr].querySelector('#score').innerHTML) < currentPlayer) {
                leaderboard.insertBefore(thisPlayer, ladderArr[index - ctr])
                ladderArr[index - ctr].classList.remove('moveDown')
                ladderArr[index - ctr].classList.remove('move-down')
                console.log("MOVE UP SUCCESSFUL")

                if (ladderArr[index - (ctr + 1)]) {
                    ctr++
                }
                else {
                    break
                }

            }
            thisPlayer.removeEventListener('animationend', () => {})
        }) */

    }
    else if (belowPlayer > currentPlayer) {
        let i = 1

        const aboveArray = []
        while (parseInt(ladderArr[index + i].querySelector('#score').innerHTML) > currentPlayer) {
            aboveArray.push(ladderArr[index + i])
            if (ladderArr[index + (i + 1)]) {
                i++
            }
            else {
                break
            }
        }
        thisPlayer = move(aboveArray, thisPlayer)

        setTimeout(() => {
            thisPlayer.classList.remove('moveUp')
            thisPlayer.classList.remove('move-up')


            //While i amount of players have lower score than current player
            //Keep inserting
            let ctr = 1
            while (parseInt(ladderArr[index + ctr].querySelector('#score').innerHTML) > currentPlayer) {
                leaderboard.insertBefore(ladderArr[index + ctr], thisPlayer)
                ladderArr[index + ctr].classList.remove('moveDown')
                ladderArr[index + ctr].classList.remove('move-down')
                console.log("MOVE DOWN SUCCESSFUL")

                if (ladderArr[index + (ctr + 1)]) {
                    ctr++
                }
                else {
                    break
                }

            }
        }, 500);
        /* thisPlayer.addEventListener('animationend', () => {
            thisPlayer.classList.remove('moveUp')
            thisPlayer.classList.remove('move-up')


            //While i amount of players have lower score than current player
            //Keep inserting
            let ctr = 1
            while (parseInt(ladderArr[index + ctr].querySelector('#score').innerHTML) > currentPlayer) {
                leaderboard.insertBefore(ladderArr[index + ctr], thisPlayer)
                ladderArr[index + ctr].classList.remove('moveDown')
                ladderArr[index + ctr].classList.remove('move-down')
                console.log("MOVE DOWN SUCCESSFUL")

                if (ladderArr[index + (ctr + 1)]) {
                    ctr++
                }
                else {
                    break
                }

            }
            thisPlayer.removeEventListener('animationend', () => {})
        }) */

        //
        /*         while (parseInt(ladderArr[index + i].querySelector('#score').innerHTML) > currentPlayer) {
                    leaderboard.insertBefore(ladderArr[index + i], thisPlayer)
                    i++
                } */
    }
}


// Increase or decrease score
leaderboard.addEventListener('click', event => {
    const ladder = leaderboard.querySelectorAll('.scoreboard')
    //Checks if the clicked is a button, return if not
    const isButton = event.target.closest('button')
    if (isButton === null) {
        return
    }
    //Traces the player scoreboard node
    //Do this if this, do that if that
    const thisPlayer = isButton.parentNode.parentNode
    const scoreofPlayer = thisPlayer.querySelector('#score')
    if (isButton.id === 'deleteButton') {
        //Also delete data from localStorage
        const fullName = thisPlayer.querySelector('.fullName')
        deleteData(fullName.textContent)
        leaderboard.removeChild(thisPlayer)
    }
    if (isButton.id === 'increaseScore') {
        if (parseInt(scoreofPlayer.innerHTML) + 5 > 100) {
            scoreofPlayer.innerHTML = 100
        }
        else {
            scoreofPlayer.innerHTML = parseInt(scoreofPlayer.innerHTML) + 5
        }
        climbPlayer(ladder, thisPlayer)
    }
    else if (isButton.id === 'decreaseScore') {
        if (parseInt(scoreofPlayer.innerHTML) - 5 < 0) {
            scoreofPlayer.innerHTML = 0
        }
        else {
            scoreofPlayer.innerHTML = parseInt(scoreofPlayer.innerHTML) - 5
        }
        climbPlayer(ladder, thisPlayer)
    }
})

