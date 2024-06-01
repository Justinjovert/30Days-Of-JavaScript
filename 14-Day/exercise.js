let text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`

const textArray = text.split(',')

console.log(textArray)

const monthly = /month/i
const annual = /annual/i
const money = /\d+/g
const moneyFromMonth = []
const moneyFromAnnual = []


for(const text of textArray){
    try{
        if(monthly.test(text)){
            const amount = Number(text.match(money))
            moneyFromMonth.push(amount)
        }
        else if(annual.test(text)){
            const amount = Number(text.match(money))
            moneyFromAnnual.push(amount)
        }
    }
    catch(err){
        console.warn(err)
    }
}


const totalMoney = moneyFromMonth.reduce((accu, current) => {return accu += (current * 12)}, 0) + moneyFromAnnual.reduce((accu, current) => {return accu += current})

console.log(`He earns a total of ${totalMoney} annually`)
