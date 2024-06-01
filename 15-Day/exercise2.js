



class statistics {
    constructor(ages){
        this.ages = ages
        console.log(this.ages)
    }

    set setSum(ages){
        let sum = 0
        for(const age of ages){
            sum += age
        }
    }
    sumOfAll(){
        let sum = 0
        for(const age of ages){
            sum += age
        }
        return sum
    }
    min(){
        const lowest = this.ages.reduce((a, b) => (b > a ? a : b), ages[0])
        return lowest
    }
    max(){
        const highest = ages.reduce((a, b) => (b < a ? a : b), ages[0])
        return highest
    }
    range(){
        const range = this.max() - this.min()
        return range
    }
    mean(){
        return this.sumOfAll() / this.ages.length
    }
    median(){
        let sortedAges = this.sortArray()
        return sortedAges[parseInt(this.ages.length / 2)]
    }
    mode(){
        let mostFrequent = {}
        let maxCount = 0

        const repeatedElement = this.ages.reduce((mostfreq, current) => {
            if (mostFrequent[current]) {
                mostFrequent[current]++
            }
            else {
                mostFrequent[current] = 1
            }

            if (mostFrequent[current] > mostFrequent[mostfreq]) {
                return current
            }
            else {
                maxCount = mostFrequent[mostfreq]
                return mostfreq
            }
        }, this.ages[0])
        return [repeatedElement, maxCount]
    }
    variance(){
        //Calculate for sample mean
        const sampleMean = this.ages.map((age) => age - this.mean())
        //Square it
        const variance = (sampleMean.map((square) => square ** 2)).reduce((a, b) => (a += b),0)
        return variance / (this.ages.length - 1)
    }
    std(){
        return Math.sqrt(this.variance())
    }
    freqDist(){
        let number = []
        for(const age of this.ages){
            number[age] = (number[age] || 0) + 1
        }

        const arr = Object.keys(number).map((age) => ({
            age,
            count: number[age]
        }))

        const sortByDesc = arr.sort((a, b) => {
            return b.count - a.count
        })
        return sortByDesc
    }

    sortArray() {
        let sortedAges = this.ages.sort((a, b) => (a - b))
        return sortedAges
    }

    describe() {
        console.log(`Count is: ${this.ages.length}`)
        console.log(`Sum is: ${this.sumOfAll()}`)
        console.log(`Min is: ${this.min()}`)
        console.log(`Max is: ${this.max()}`)
        console.log(`Range is: ${this.range()}`)
        console.log(`Mean is: ${this.mean()}`)
        console.log(`Median is: ${this.median()}`)
        console.log(`Mode is: ${this.mode()}`)
        console.log(`Variance is: ${this.variance()}`)
        console.log(`Standard Deviation is: ${this.std()}`)
        console.group(`Frequency Distribution`)
        console.table(this.freqDist())
        console.groupEnd()
    }
}






const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const stats = new statistics(ages)

stats.describe()

console.table(stats.sortArray())
