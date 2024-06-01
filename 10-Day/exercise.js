

let setNumber = new Set()

for(let ctr = 0; ctr < 10; ctr++){
    setNumber.add(ctr+1)
}

console.log(setNumber)

console.log(setNumber.clear())

let setString = new Set()

setString.add('First')
setString.add('Second')
setString.add('Third')
setString.add('Fourth')
setString.add('Fifth')

console.log(setString)


const countryArr = ['Finland', 'Sweden', 'Norway']
const cntryLofE = []
const country = new Map()


for(const element of countryArr){

    country.set(element, element.length)
}

console.log(country)


