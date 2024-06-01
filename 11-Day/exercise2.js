const userDest = ({
    name,
    scores,
    skills,
    age
}) => {

    const formattedSkills = skills.slice(0, -1).join(', ')
    userInfo = `His name is ${name} and ${age} years old, he/she scored ${scores}. His skills are ${formattedSkills} and ${skills[skills.length - 1]}`
    return userInfo
}


for (const user of users) {
    console.log(userDest(user))
}

//Find the persons who have less than two skills

const userSkills = ({
    name, skills
}) => {
    if(skills.length < 2){
        personInfo = `${name} has ${skills.length} skill`
        return personInfo
    }
}

let userSpecialSkill = new Set()

for (const user of users) {
    if(userSkills(user)){
        userSpecialSkill.add(userSkills(user))
    }
}

console.log(userSpecialSkill)