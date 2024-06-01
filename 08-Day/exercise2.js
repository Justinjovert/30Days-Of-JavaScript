/* Find the person who has many skills in the users object */
/* Count logged in users, 
count users having greater than equal to 50 points from the following object. */

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

/* let result = Object.keys(users).reduce((a, b) => (users[a].skills.length > users[b].skills.length) ? a : b)
console.log(result) */

/* let result = Object.keys(users).reduce((previous, current) => 
    users[previous].skills.length > users[current].skills.length
        ? previous
        : current
)
console.log(result) */


/* const loggedStatus = () => {
    let a = Object.values(users)
    return a
}
 */
/* let a = Object.values(users).filter(users => users.isLoggedIn).length
console.log(a)
let b = Object.values(users).filter(users => users.points >= 50)
console.log(b)
let c = Object.values(users).filter(users => users.age >= 25)
console.log(c)
 */

/* let MERN = []
for(const user in users)
{
    if(users[user].skills.includes('MongoDB', 'Express', 'React', 'Node'))
    {
        MERN.push(user)
    }
}
const lastElement = MERN[MERN.length-1]
MERN[MERN.length-1] = null
let string = ''
console.log(MERN.length)
MERN.length -1 == 1
    ? string = MERN.join('')
    : string = MERN.join(`, `)
console.log(`MERN stacked developer: ${string} and ${lastElement}`) */


/* Set your name in the users object without modifying the original users object */

const copyUsers = Object.assign({}, users)
copyUsers.Justin = copyUsers.Alex
copyUsers.Justin.email = 'justinjoags@gmail.com'
copyUsers.Justin.age = 25
console.log(copyUsers.Justin)
console.log(copyUsers.Alex)

const a = Object.assign({}, Object.keys(copyUsers))
console.log(a)

console.log(users)
for(const user in users)
{
    console.log(`${user}, ${Object.keys(users[user])}`)
    /* let b = Object.entries(users[user])
    console.log(b) */
}


/* const myObject = {
    key1: {
        name: "justin",
        age: 20
    },
    key2: 'value2',
    key3: 'value3'
  };
  
  Object.keys(myObject).forEach(function (key) {    
    const value = myObject[key];
    if(value instanceof Object){
        console.log(`Key: ${key}, Value: ${Object.keys(value)}`);
    }
    else{
        console.log(`Key: ${key}, Value: ${value}`);
    }
  }); */
  


const allValues = Object.values(copyUsers)
console.log(allValues)
