const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

//Destructure and assign the elements of constants array 
// to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

console.log(`${e} is the e\n${pi} is pi\n${gravity} is gravity\n${humanBodyTemp} is the human body temperature\n${waterBoilingTemp} is the boiling temperature of water`)



//Destructure and assign the elements of countries array to fin, est, sw, den, nor

let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)


//Destructure the rectangle object by its properties or keys.
const rect = ({
    width,
    height,
    area,
    perimeter
}) => {
    console.log(`Width is ${width}`)
    console.log(`Height is ${height}`)
    console.log(`Area is ${area}`)
    console.log(`Perimeter is ${perimeter}`)

}

rect(rectangle)