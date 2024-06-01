

console.assert(10 < 2 * 10, 'true')
console.assert(10 > 2 * 10, 'false')

console.warn('warning')
console.error('error')
//Check the speed difference among the following loops: while, for, for of, forEach


const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

let ctr = 0
console.time('while')
while (ctr < countries.length) {
    console.log('hi')
    ctr++
}
console.timeEnd('while')

console.time('for')
for (let ctr = 0; ctr < countries.length; ctr++) {
    console.log('hi')
}
console.timeEnd('for')

console.time('for of')
for (const ctr of countries) {
    console.log('hi')
}
console.timeEnd('for of')

console.time('foreach')
countries.forEach(element => console.log('hi'))
console.timeEnd('foreach')