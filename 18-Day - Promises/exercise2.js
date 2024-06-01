//Read the cats api and find the average weight of cat in imperial unit.

const catsAPI = 'https://api.thecatapi.com/v1/breeds'


const findAvgWeightImperial = (imperialWeight) => {

    let min = []
    let max = []

    for(const weight of imperialWeight){
        const separate = weight.split('-')
        min.push(parseInt(separate[0].trim(), 10))
        max.push(parseInt(separate[1].trim(), 10))
    }

    const minAvg = min.reduce((sum, current, index, min) => {
        return sum + current / min.length
    }, 0)
    const maxAvg = max.reduce((sum, current, index, max) => {
        return sum + current / max.length
    }, 0)

    return `Average weight is ${Math.round(minAvg)} - ${Math.round(maxAvg)} in imperial unit`
}

const findAvgWeightMetric = (metricWeight) => {

    let min = []
    let max = []

    for(const weight of metricWeight){
        const separate = weight.split('-')
        min.push(parseInt(separate[0].trim(), 10))
        max.push(parseInt(separate[1].trim(), 10))
    }

    const minAvg = min.reduce((sum, current, index, min) => {
        return sum + current / min.length
    }, 0)
    const maxAvg = max.reduce((sum, current, index, max) => {
        return sum + current / max.length
    }, 0)

    return `Average weight is ${Math.round(minAvg)} - ${Math.round(maxAvg)} in metric unit`
}



fetch(catsAPI)
    .then(response => response.json())
    .then(cats => {
        let ImperialWeightArray = []
        let MetricWeightArray = []

        cats.forEach(cat => {
            ImperialWeightArray.push(cat.weight.imperial)
            MetricWeightArray.push(cat.weight.metric)
        })

        console.log(findAvgWeightImperial(ImperialWeightArray))
        console.log(findAvgWeightMetric(MetricWeightArray))
    })
    .catch(error => console.error(error)) 