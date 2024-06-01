function outerFunction() {
    let count = 0
    function innerFunction() {
        count += 1
        return count
    }
    return innerFunction
}

const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())


function outerF() {
    let count = 3
    function innerF() {
        console.log(count)
        console.log('Make it 5')
        count = 5
        return count
    }

    function plusOne() {
        count += 1
        return count
    }

    function minusOne(){
        count -= 1
        return count
    }

    return{
        innerF,
        plusOne,
        minusOne,
    }
}

const innerF = outerF()


console.log(innerF.innerF())
console.log(innerF.plusOne())
console.log(innerF.minusOne())