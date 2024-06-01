const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];


const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

/* a. Create a function called signUp which allows user to add to the collection. 
If user exists, inform the user that he has already an account.
*/

/* Create a function called signIn which allows user to sign in to the application */
/* 
function generateID() {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    let length = 6

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }

    return result;
}

//Code straight from ChatGPT
function generateRandomValues() {
    const randomBoolean = Math.random() < 0.5;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1.
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const currentTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
    return { randomBoolean, currentTime }
}


function signIn(usernameInput, passwordInput) {
    for (const user in users) {
        if (users[user].username == usernameInput) {
            if (users[user].password == passwordInput) {
                return console.log(`Successfully logged in! Welcome, ${users[user].username}!`)
            }
            else {
                return console.log(`Wrong Password`)
            }
        }
        else if (user == users.length - 1) {
            console.log(`${usernameInput}\nWrong username or password.\nPlease try again.`)
        }
    }
}

function signUp(usernameInput, emailInput, passwordInput) {
    //Check if username already exists
    //Return if not
    for (const user in users) {
        if (users[user].username == usernameInput) {
            return console.log(`${usernameInput} already exists! Please try another username`)
        }
        else {
            continue
        }
    }
    let id = generateID()

    // Check if id already exists. ID must be unique
    // If it does, generate a new ID
    // Reminder to myself
    // It's just something simple, don't expect for it to be all knowing of all IDs. It's only practice
    for (let user in users) {
        if (users[user]._id == id) {
            id = generateID()
        }
    }

    let { randomBoolean, currentTime } = generateRandomValues()

    const newUser = {
        _id: id,
        username: usernameInput,
        email: emailInput,
        password: passwordInput,
        createdAt: currentTime,
        isLoggedIn: randomBoolean
    }

    console.log(users)
    users.push(newUser)
    console.log(users)
    return console.log(users[users.length - 1])
}


const username = 'Alex'
const password = '123123'
const username2 = 'Justin'
const password2 = '1912'
const email = 'randomEmail@yahoo.com'
console.log(users)

//Sign in
signIn(username, password)
signIn(username2, password)

//sign up
signUp(username, email, password)
signUp(username2, email, password2)
 */


/* The products array has three elements and each of them has six properties. 
a. Create a function called rateProduct which rates the product 
b. Create a function called averageRating which calculate the average rating of a product */


function rateProduct() {
    const review = []


    //Loop for each Product
    for (const product in products) {

        //Create an object with its product name
        // and later push an array of the rater and the rating into this object 
        let productDetails = {
            name: products[product].name
        }
        // IF there are multiple ratings or none at all, push it onto the array
        const currentRatingArray = []
        //Loop for 'ratings' object
        for (const rating in products[product].ratings) {

            //Search for user ID
            let userRatedThis
            let userID = products[product].ratings[rating].userId
            for (const user in users) {
                if (users[user]._id == userID) {
                    userRatedThis = users[user].username
                }
            }
            const ratedPts = products[product].ratings[rating].rate

            //Object for Current Rating
            //Will be pushed to child array
            //Containing N amount of reviews            
            const currentRating = {
                reviewer: userRatedThis,
                rated: ratedPts,
            }
            /* const currentRatingArray = [] */
            currentRatingArray.push(currentRating)

        }
        //Add the ratings into an array for that current product
        //Put it on the current product object
        //Then push it to the parent Array object          
        productDetails.currentRatingArray = currentRatingArray
        review.push(productDetails)
    }
    return review
}

const printRatedProduct = () => {
    let reviews = rateProduct()
    console.log(reviews)
    for (const review in reviews) {
        let productName = reviews[review].name
        let NofRatings = reviews[review].currentRatingArray.length
        console.log(`${productName} has ${NofRatings} ratings.`)
        for (const rating in reviews[review].currentRatingArray) {
            let a = Object.values(reviews[review].currentRatingArray)
            console.log(`${a[rating].reviewer} rated this product ${a[rating].rated}`)
        }
        console.log('\n')
    }
}

printRatedProduct()