const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]


//Find a union b //Use set
const union = [...a,...b]
const unionSet = new Set(union)
console.log(unionSet)

//Find a intersection b
const intersection = a.filter((num) => b.includes(num))
console.log(intersection)


//Difference of a and b
const difference = a.filter((num) => !b.includes(num))
console.log(difference)

//Find a with b
const together = [...a,...b]
console.log(together)