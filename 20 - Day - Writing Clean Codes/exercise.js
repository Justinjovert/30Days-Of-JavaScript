//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?



paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`




const tenMostFrequentWords = (paragraph) =>{
    let paraArr = {}
    pattern = /[a-zA-Z]+/gi

    paragraph.match(pattern).forEach(word => {
        if(paraArr[word]){
            paraArr[word]++
        }
        else{
            paraArr[word] = 1
        }
    });

    const sortedArr = Object.entries(paraArr).sort((a, b) => b[1] - a[1])
    
    return sortedArr.slice(0, 10)
}


const cleanText = (sentence) => sentence.replace(/[%@$&#;!]+/gi, '')


//Taken from Day 12, exercise 2
/* const displayText = (input) => {

    a = Object.entries(input).sort((a, b) => b[1] - a[1])

    console.table(a)

    a.forEach(entry => {
        console.log(entry)
    })
    return
} */

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
input = cleanText(sentence)
console.log(input)

console.table(tenMostFrequentWords(input))

