
/* ------------------ FUNCTIONs ----------------------- */

//Sets and updates color every second
const changeColor = () => {
    challengeYear.style.color = getRandomColor()
    date.style.backgroundColor = getRandomColor()
    updateColor()
    setTimeout(changeColor, 1000)
}

const getRandomColor = () => {
    const LIMIT_VALUE = 256;
    const red = Math.floor(Math.random() * LIMIT_VALUE);
    const green = Math.floor(Math.random() * LIMIT_VALUE);
    const blue = Math.floor(Math.random() * LIMIT_VALUE);
    return `rgb(${red}, ${green}, ${blue})`;
}

const updateColor = () => {
    //Every time when called, challengeYear's color value would be different
    //As such, header1 would be updated
    header1.innerHTML = justinChallenges2020.description + ' in ' + challengeYear.outerHTML
}

const formatDate = () => {
    const months = ['January', 'February', 'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const now = new Date()
    const day = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
    const time = `${(now.getHours() < 10 ? '0' : '') + now.getHours()}:${(now.getMinutes() < 10 ? '0' : '') + now.getMinutes()}:${(now.getSeconds() < 10 ? '0' : '') + now.getSeconds()}`
    return day + ' ' + time
}

const updateTime = () => {
    date.textContent = formatDate()
    //Insert new element after h2Element and before UL element
    const h2Element = document.querySelector('h2')
    const ulElement = document.querySelector('ul')
    h2Element.parentNode.insertBefore(date, ulElement)

    setTimeout(updateTime, 1000)
}

/* ----------- LIST ELEMENTS-------------- */
const listsELements = (data) => {
    const list = document.createElement('li')
    const subjectStatus = document.createElement('span')

    //Properties
    list.style.padding = "20px"
    list.style.borderRadius = '5px'
    list.style.width = '800px'
    list.style.margin = '5px'
    list.style.listStyleType = 'none'
    list.style.display = 'flex'
    list.style.justifyContent = 'space-between'
    list.style.alignItems = 'center'

    //Content
    const wordsToRemove = '30 Days Of '
    const subject = data.name.substring(wordsToRemove.length)
    subjectStatus.textContent = data.status

    //Topics
    const topics = []
    for (const topic of data.topics) {
        topics.push(topic)
    }

    //Details Tab
    //Display topics for drop down
    const details = document.createElement('details')
    const summary = document.createElement('summary')
    summary.textContent = subject
    summary.style.fontWeight = '600'
    summary.style.fontFamily = 'Arial Light'
    details.appendChild(summary)



    //For each element of the array, add it on the details element
    //Make a <p> for each elemenet
    for (const topic of topics) {
        const paragraph = document.createElement('p')
        paragraph.style.display = 'flex'
        paragraph.style.flexDirection = 'column'
        paragraph.style.margin = '0px'
        paragraph.style.fontSize = '16px'
        paragraph.style.fontFamily = 'Arial Light'
        paragraph.style.fontWeight = '600'
        paragraph.textContent = topic
        details.appendChild(paragraph)
    }


    //Append details; summary and paragraph




    //Main text contents
    list.innerHTML = data.name + details.outerHTML + subjectStatus.outerHTML

    //Status if Done, ongoing, or coming
    let status = data.status.toLowerCase()
    switch (status) {
        case 'done':
            list.style.backgroundColor = '#5cff00'
            break
        case 'ongoing':
            list.style.backgroundColor = '#ffd600'
            break
        case 'coming':
            list.style.backgroundColor = '#ff6879'
            break
        default:
            console.error('No list')
    }


    return list
}

/* ---------------------------------------------------- */

const challengeYear = document.createElement('span')
challengeYear.textContent = justinChallenges2020.challengeYear
challengeYear.style.color = getRandomColor()
challengeYear.style.fontSize = '48px'


//Create First Main Header
const header1 = document.createElement('h1')
header1.style.color = 'black'
header1.style.fontSize = '28px'
header1.style.letterSpacing = '5px'
header1.style.marginBottom = '0px'
header1.innerHTML = justinChallenges2020.description + ' ' + challengeYear.outerHTML


//Wrapper Element
const wrapperElement = document.querySelector('.wrapper')
wrapperElement.style.display = 'flex'
wrapperElement.style.flexDirection = 'column'
wrapperElement.style.justifyContent = 'center'
wrapperElement.style.alignItems = 'center'
wrapperElement.style.fontFamily = 'Arial'
wrapperElement.appendChild(header1)

//Create a second header
const header2 = document.createElement('h2')
header2.innerHTML = justinChallenges2020.challengeSubtitle
header2.style.textDecoration = 'underline'
header2.style.fontSize = '18px'
header2.style.fontWeight = '100'
header2.style.color = 'white'
wrapperElement.appendChild(header2)


/* ---------------- TIME --------------- */
//Created a new span
//Tells current time that changes color every second
const date = document.createElement('span')
//Styles
date.style.backgroundColor = getRandomColor()
date.style.padding = '10px'
date.style.borderRadius = '2px'
//Change color and update time every second
date.textContent = formatDate()

updateTime()
changeColor()


/* ------------- LISTS CONTENT ---------------- */
const unorderedLists = document.createElement('ul')
wrapperElement.appendChild(unorderedLists)


const subjLength = justinChallenges2020.challenges.length

for (let subj = 0; subj < subjLength; subj++) {
    unorderedLists.appendChild(listsELements(justinChallenges2020.challenges[subj]))
}

/* ------------ PROFILE INFO LINKS--------------- */

const profileInfo = document.createElement('div')
profileInfo.id = 'profileInfo'
profileInfo.style.display = 'flex'
profileInfo.style.flexDirection = 'column'
profileInfo.style.alignItems = 'center'
profileInfo.style.maxWidth = '750px'
wrapperElement.appendChild(profileInfo)

/* ------------ PROFILE NAME */
const profileName = document.createElement('h1')
profileName.textContent = justinChallenges2020.author.firstName + ' ' + justinChallenges2020.author.lastName

//Font styling
profileName.style.color = 'black'
profileName.style.fontFamily = 'Arial Light'
profileName.style.fontSize = '28px'
profileName.style.letterSpacing = '0.5px'
profileName.style.fontWeight = '100'
profileName.style.margin = '0px 0px 7px 0px'

//Append Name to Profile Info DIV
profileInfo.appendChild(profileName)

//Social Links
const socialLinks = document.createElement('div')
socialLinks.style.margin = '0px 0px 20px 0px'
socialLinks.style.display = 'flex'
socialLinks.style.justifyContent = 'center'

const socialLinksLength = justinChallenges2020.author.socialLinks.length
for (let social = 0; social < socialLinksLength; social++) {

    //Create anchor element
    const urlSocial = document.createElement('a')

    //Set values
    urlSocial.innerHTML = justinChallenges2020.author.socialLinks[social].fontawesomeIcon
    urlSocial.href = justinChallenges2020.author.socialLinks[social].url

    //Styling font and margin
    urlSocial.style.textDecoration = 'none'
    urlSocial.style.color = 'black'
    urlSocial.style.fontSize = '25px'
    urlSocial.style.margin = '0 4px'

    //Append Social to Social Links DIV
    socialLinks.appendChild(urlSocial)
}

//Append Social Links to Profile Info DIV
profileInfo.appendChild(socialLinks)

/* ------------ BIO */
const bio = document.createElement('article')
bio.style.fontSize = '14px'
bio.style.textAlign = 'center'

const bioContent = document.createElement('p')
const formattedBio = justinChallenges2020.author.bio.replace(/P.S./g, '<b>P.S.</b>');
bioContent.innerHTML = formattedBio

bio.append(bioContent)

//Append bio to Profile Info DIV
profileInfo.append(bio)

/* --------------Qualifications  */
const qualDiv = document.createElement('div')
qualDiv.style.display = 'flex'
qualDiv.style.flexDirection = 'row'
qualDiv.style.minWidth = '100%'
qualDiv.style.justifyContent = 'space-between'


//Titles
const titles = document.createElement('ul')
titles.textContent = 'Titles'
titles.style.fontSize = '18px'
titles.style.fontWeight = '600'

for (let index = 0; index < justinChallenges2020.author.titles.length; index++) {
    const title = document.createElement('li')
    const titleIcon = document.createElement('span')
    titleIcon.style.width = '20px'
    const titleWord = document.createElement('span')
    //title.innerHTML = justinChallenges2020.author.titles[index][0] + '&nbsp' +  justinChallenges2020.author.titles[index][1]
    titleIcon.innerHTML = justinChallenges2020.author.titles[index][0]
    titleIcon.style.paddingRight = '5px'
    titleWord.innerHTML = justinChallenges2020.author.titles[index][1]

    title.appendChild(titleIcon)
    title.appendChild(titleWord)
    title.style.display = 'flex'
    title.style.flexDirection = 'row'
    title.style.margin = '0px'
    title.style.fontSize = '14px'
    title.style.fontWeight = '100'
    title.style.alignItems = 'center'
    titles.appendChild(title)
}
//Append Title
qualDiv.appendChild(titles)


//Skills
const skills = document.createElement('ul')
skills.textContent = 'Skills'
skills.style.fontSize = '18px'
skills.style.fontWeight = '600'
for (let index = 0; index < justinChallenges2020.author.skills.length; index++) {
    const skill = document.createElement('li')


    //Checkmark
    //From ChatGPT
    let checkmarkSpan = document.createElement('span')
    checkmarkSpan.classList.add('circle')
    checkmarkSpan.innerHTML = '<i class="fas fa-check checkmark"></i>'
    checkmarkSpan.style.width = '25px'


    const skillSpan = document.createElement('span')
    skillSpan.innerHTML = justinChallenges2020.author.skills[index]

    skill.innerHTML = checkmarkSpan.innerHTML + '&nbsp' + skillSpan.innerHTML
    skill.style.display = 'flex'
    skill.style.flexDirection = 'row'
    skill.style.fontSize = '14px'
    skill.style.fontWeight = '100'
    skill.style.margin = '0px'
    skill.style.alignItems = 'center'
    skills.appendChild(skill)
}
//Append SKills
qualDiv.appendChild(skills)


//Append
profileInfo.appendChild(qualDiv)

//Qualifications
const qualifications = document.createElement('ul')
qualifications.textContent = 'Qualifications'
qualifications.style.fontSize = '18px'
qualifications.style.fontWeight = '600'

for (let index = 0; index < justinChallenges2020.author.qualifications.length; index++) {
    const qualification = document.createElement('id')
    qualification.innerHTML = justinChallenges2020.author.qualifications[index]
    qualification.style.display = 'flex'
    qualification.style.flexDirection = 'column'
    qualification.style.fontSize = '14px'
    qualification.style.fontWeight = '100'
    qualifications.appendChild(qualification)
}


//Append
qualDiv.appendChild(qualifications)

//Set padding to 0
const ulFromProfileInfo = profileInfo.querySelectorAll('ul')
for (const ul of ulFromProfileInfo) {
    ul.style.padding = '0px'
}


//Keywords element
const keywords = document.createElement('div')
keywords.style.display = 'flex'
keywords.style.flex = '1'
keywords.style.minWidth = '100%'
keywords.style.justifyContent = 'start'
keywords.style.flexDirection = 'column'
keywords.style.alignItems = 'center'


//h1
const h1Keyword = document.createElement('h1')

h1Keyword.textContent = 'Keywords'
h1Keyword.style.alignSelf = 'start'
h1Keyword.style.fontSize = '26px'




keywords.appendChild(h1Keyword)


//Tags container
const keywordsTagContainer = document.createElement('div')
keywordsTagContainer.style.display = 'flex'
keywordsTagContainer.style.flex = '1'
keywordsTagContainer.style.flexWrap = 'wrap'
keywordsTagContainer.style.justifyContent = 'space-around'
keywordsTagContainer.style.maxWidth = '650px'

keywords.appendChild(keywordsTagContainer)

for (const keyword of justinChallenges2020.keywords) {
    const tag = document.createElement('span')
    tag.textContent = `# `+ keyword
    tag.style.backgroundColor = getRandomColor()
    tag.style.height = 'fit-content'
    tag.style.width = 'fit-content'
    tag.style.fontSize = '12px'
    tag.style.padding = '5px 10px'
    tag.style.borderRadius = '25px'
    tag.style.fontWeight = '600'
    tag.style.fontStyle = 'Italic'
    tag.style.margin = '5px'
    keywordsTagContainer.appendChild(tag)
}




/* const exampleTag = document.createElement('span')
const exampleTag2 = document.createElement('span')
exampleTag.textContent = '# Linear Algebra'
exampleTag.style.backgroundColor = getRandomColor()
exampleTag.style.width = 'fit-content'
exampleTag.style.padding = '5px 10px'
exampleTag.style.borderRadius = '25px'
exampleTag.style.fontWeight = '600'
exampleTag.style.fontStyle = 'Italic' */


/* keywordsTagContainer.appendChild(exampleTag)
keywordsTagContainer.appendChild(exampleTag2) */

profileInfo.appendChild(keywords)