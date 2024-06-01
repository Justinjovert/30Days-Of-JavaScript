let phrase = 'You cannot end a sentence with because because because is a conjunction'

var count = (phrase.match(/because/g) || []).length

console.log(count)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


const nonAlphaNumericRegex= /[^a-zA-Z0-9 .,!?]/g;

console.log(sentence.replace(nonAlphaNumericRegex,''))



/* Calculate the total annual income of the person by extracting the numbers from the following text. 
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' */

/* Separate the month sentence and the annual sentence */
/* Multiply the month sentence to 12 to get the annual amount */
/* Add all income to get the total annual income */

const secondSentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let separateSentence = secondSentence.split(',')
var digits
var total = 0

console.log(secondSentence)

for(ctr = 0; ctr < separateSentence.length; ctr++)
{
    if(separateSentence[ctr].includes('month'))
    {
        digits = separateSentence[ctr].match(/\d+/g)
        let numInt = parseInt(digits)
        annualPer = numInt * 12
        total = total + annualPer
    }
    else{
        digits = separateSentence[ctr].match(/\d+/g)
        let numInt = parseInt(digits)
        total = total + numInt
    }
}

console.log("The total annual income is", total, "euro")