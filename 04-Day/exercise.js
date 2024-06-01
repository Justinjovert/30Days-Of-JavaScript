/* Even numbers are divisible by 2 and the remainder is zero. 
How do you check, if a number is even or not using JavaScript? */
/* 
let a = 2
let b = 9

if (a % 2 == 0){
    console.log(a+" is an even number")
}
else{
    console.log(a+" is an odd number")
}

if (b % 2 == 0){
    console.log(b+" is an even number")
}
else{
    console.log(b+" is an odd number")
} */

/* Write a code which can give grades to students 
according to theirs scores: */

/* 80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

/* let grade = Math.round(Math.random() * (100-40) + 40)

switch (true){
    case (grade >= 80 && grade <= 100):
        console.log("Grade is " +grade+". A")
        break
    case (grade >= 70 && grade <= 89):
        console.log("Grade is " +grade+". B")
        break
    case (grade >= 60 && grade <= 69):
        console.log("Grade is " +grade+". C")
        break
    case (grade >= 50 && grade <= 59):
        console.log("Grade is " +grade+". D")
        break
    case (grade >= 0 && grade <= 49):
        console.log("Grade is " +grade+". F")
        break
    default: 
        console.log("Error Grading")
        break
    } */


  /*   Check if a day is weekend day or a working day. 
    Your script will take day as an input. */

/* let day1 = 'sunday'
let day2 = 'tuesday'

const weekend = ['saturday', 'sunday']
const weekday = ['monday','tuesday','wednesday','thursday','friday']

day1 = day1.toLowerCase()
day2 = day2.toLowerCase()


for(let ctr = 0;ctr <= weekend.length+weekday.length;ctr++)
{
    if (day1 == weekend[ctr]){
        console.log(day1+' is a weekend.')
    }
    if (day2 == weekday[ctr]){
        console.log(day2+' is a weekday.')
    }
}

 */



/* Write a program which tells the number of days in a month.
    Include leap years */

/* 
let month = 'january'
month = month.toLowerCase();
const leapYear = Math.random() < 0.5;

switch(month){
    case 'january':
        console.log("January has 31 days")
        break
    case 'february':
        if(leapYear == 0){
                console.log("February has 28 days")
            }
        else if(leapYear == 1){
                console.log("February has 29 days in a leap year")
            }
        break
    case 'march':
        console.log("March has 31 days")
        break
    case 'april':
        console.log("April has 30 days")
        break
    case 'may':
        console.log("May has 31 days")
        break
    case 'june':
        console.log("June has 30 days")
        break
    case 'july':
        console.log("July has 31 days")
        break
    case 'august':
        console.log("August has 31 days")
        break
    case 'september':
        console.log("September has 30 days")
        break
    case 'october':
        console.log("October has 31 days")
        break
    case 'november':
        console.log("November has 30 days")
        break
    case 'december':
        console.log("December has 31 days")
        break
    default:
        console.log("error")
        break

} */
