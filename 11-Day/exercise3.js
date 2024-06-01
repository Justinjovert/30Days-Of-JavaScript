//Destructure the countries object print name, capital, population and languages of all countries


const countryDestructure = ({
    name, capital, population, languages
}) => {
    if (languages.length > 1) {
        languagesFormat = languages.slice(0, -1).join(', ')
        lastLanguage = ` and ${languages[languages.length - 1]}`
        totalLanguage = `languages; ` + languagesFormat + lastLanguage
    }
    else {
        totalLanguage = `language; ` + languages
    }
    let countryInfo = `${name}'s capital is ${capital} and it has ${languages.length} ${totalLanguage}. It has ${population} population.`
    return countryInfo
}

/* for(const country of countries_data){
    console.log(countryDestructure(country))
} */



//A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
//Destructure the following array name to name, skills array to skills, 
//scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.


const juniorDev = ([
    name, skills, scores
]) => {
    skillsFormat = skills.slice(0, -1).join(', ')
    let sentenceStructure = `${name} has ${skills.length} skills: ${skillsFormat} and ${skills[skills.length - 1]}. Javascript Score is ${scores[2]}. React Score is ${scores[3]}`
    return sentenceStructure
}


const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
console.log(juniorDev(student))


const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]


const convertArrayToObj = ([name, skills, scores]) => {
    const studentObj = {
        name: name,
        skills: skills,
        scores: scores
    }
    return studentObj
}


let ArrayOfObjects = []
for (const student of students) {
    ArrayOfObjects.push(convertArrayToObj(student))
}

//console.log(ArrayOfObjects)

/* Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets */


const studentObj = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const addSkills = ({
    skills
}, [
    frontEnd, backEnd, dataBase, dataScience
]) => {
    skills.frontEnd.push(frontEnd)
    skills.backEnd.push(backEnd)
    skills.dataBase.push(dataBase)
    skills.dataScience.push(dataScience)
    console.log(skills)
}

const newStudent = { ...studentObj }

skillsToAddArray = [{ skill: 'Bootstrap ', level: 10 }, { skill: 'Express', level: 9 }, { skill: 'SQL', level: 8 }, 'SQL']

addSkills(newStudent, skillsToAddArray)