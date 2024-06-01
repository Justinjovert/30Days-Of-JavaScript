/* Try to develop a program which calculate measure of central tendency of a 
sample(mean, median, mode) and 
measure of variability(range, variance, standard deviation). 
In addition to those measures find the min, max, count, percentile,
and frequency distribution of the sample. 
You can create an object called statistics 
and create all the functions which do statistical calculations as method 
for the statistics object. Check the output below. */

//Calulate mean median and mdoe
//range, variance, standard deviation
//Find Min, max, count, percentile and frequency distribution
//Create an object called statistics
//Create functions which do statistical calcs

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const sortedAges = ages.sort((a, b) => a - b)



const statistics = {
    count: ages.length,
    sum: function () {
        let sum = 0
        for (const age of ages) {
            sum += age
        }
        return sum
    },
    min: function () {
        const lowest = ages.reduce((a, b) => (b > a ? a : b), ages[0])
        return lowest
    },
    max: function () {
        const lowest = ages.reduce((a, b) => (b < a ? a : b), ages[0])
        return lowest
    },
    range: function () {
        const range = statistics.max() - statistics.min()
        return range
    },
    mean: function () {
        /* return Math.round(statistics.sum() / ages.length) */
        return statistics.sum() / ages.length
    },
    median: function () {
        return sortedAges[parseInt(sortedAges.length / 2)]
    },
    mode: function () {

        let mostFrequent = {}
        let maxCount = 0

        repeatedElement = ages.reduce((mostfreq, current) => {
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
        }, ages[0])
        return [repeatedElement, maxCount]
    },
    variance: function () {
        //Calculate for sample mean
        const sampleMean = ages.map((age) => age - statistics.mean())
        //Square it
        const variance = (sampleMean.map((square) => square ** 2)).reduce((a, b) => (a += b),0)
        return variance / (ages.length - 1)
    },
    std: function(){
        return Math.sqrt(statistics.variance())
    },
    freqDist: function(){
        let number = []
        for(const age of ages){
            number[age] = (number[age] || 0) + 1
        }

        const arr = Object.keys(number).map((age) => ({
            age,
            count: number[age]
        }))

        sortByDesc = arr.sort((a, b) => {
            return b.count - a.count
        })
        return sortByDesc
    }
}

console.log(`Count is: ${statistics.count}`)
console.log(`Sum: ${statistics.sum()}`)
console.log(`Min: ${statistics.min()}`)
console.log(`Max: ${statistics.max()}`)
console.log('Range: ', statistics.range())
console.log(`Mean: ${Math.round(statistics.mean())}`)
console.log('Median: ', statistics.median())
console.log('Mode: ', statistics.mode()[0], 'Count: ', statistics.mode()[1])
console.log('Variance: ', statistics.variance())
console.log('Standard Deviation: ', statistics.std()) 
console.log('Frequency Distribution: ',statistics.freqDist()) 