/* Calculate the total annual income of the person from the following text. 
‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’ */


let text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`

const textArray = text.split(',')

console.log(textArray)

const monthly = /month/i
const annual = /annual/i
const money = /\d+/g
const moneyFromMonth = []
const moneyFromAnnual = []


for(const text of textArray){
    if(monthly.test(text)){
        const amount = Number(text.match(money))
        moneyFromMonth.push(amount)
    }
    else if(annual.test(text)){
        const amount = Number(text.match(money))
        moneyFromAnnual.push(amount)
    }
}


const totalMoney = moneyFromMonth.reduce((accu, current) => {return accu += (current * 12)}, 0) + moneyFromAnnual.reduce((accu, current) => {return accu += current})

//console.log(`He earns a total of ${totalMoney} annually`)



points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']

const sortedPoints = points.sort((a, b) => a - b)


const distance = sortedPoints[sortedPoints.length-1] - sortedPoints[0]
/* console.log(distance) */



const is_valid_variable = (string) => {
    const variableNamePattern = /^[a-zA-Z$_][0-9a-zA-Z_$]*$/
    console.log(`${string} ${variableNamePattern.test(string)}`)
}


is_valid_variable('first_name')// True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') //True